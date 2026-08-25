from __future__ import annotations

import re
import sys
from pathlib import Path
from typing import TypedDict


class ValidationResult(TypedDict):
    ok: bool
    errors: list[str]


_ALLOWED_TYPES = [
    "feat",
    "fix",
    "chore",
    "docs",
    "refactor",
    "test",
    "ci",
    "build",
    "perf",
    "style",
]

ALLOWED_TYPES: frozenset[str] = frozenset(_ALLOWED_TYPES)
ALLOWED_TYPES_DISPLAY = ", ".join(_ALLOWED_TYPES)

VAGUE_SUBJECTS = {
    "misc changes",
    "stuff",
    "updates",
    "fixes",
}

MAX_HEADER_LENGTH = 100
MAX_SUBJECT_LENGTH = 72

# Conventional Commits-ish header:
# - type(scope): subject
# - type!: subject
# - type(scope)!: subject
HEADER_PATTERN = re.compile(
    r"^(?P<type>[a-z]+)(?:\((?P<scope>[a-z0-9_-]+)\))?(?P<breaking>!)?:\s(?P<subject>.*)$"
)

# Applied to the full raw message; any match causes an early-exit rejection.
_MESSAGE_GUARDS: list[tuple[re.Pattern[str], str]] = [
    (
        re.compile(r"Co-Authored-By:.*(anthropic|claude)", re.IGNORECASE),
        "Commit message must not contain an AI co-author signature.",
    ),
    (
        re.compile(r"^Claude-Session:", re.IGNORECASE | re.MULTILINE),
        "Commit message must not contain a Claude-Session trailer.",
    ),
]

# Applied to the casefold-normalised subject; any match causes an early-exit rejection.
_NORMALIZED_SUBJECT_GUARDS: list[tuple[re.Pattern[str], str]] = [
    (
        re.compile(r"^update\s+\S+$"),
        (
            "Commit subject looks like an auto-generated update message. "
            "Describe what changed, not just 'update <thing>'."
        ),
    ),
]

# Applied to the raw subject; matches accumulate into the error list.
_SUBJECT_CHECKS: list[tuple[re.Pattern[str], str]] = [
    (re.compile(r"[.!?]$"), "Commit subject must not end with punctuation."),
]

_FIRST_WORD_PATTERN = re.compile(r"[a-z][a-z0-9-]*")


def validate_commit_message(message: str) -> ValidationResult:
    for pattern, msg in _MESSAGE_GUARDS:
        if pattern.search(message):
            return {"ok": False, "errors": [msg]}

    lines = message.splitlines()
    if not lines:
        return {"ok": False, "errors": ["Commit message must not be empty."]}

    # Keep trailing whitespace so headers like "feat:   " still match and can be
    # validated as an empty subject after normalization.
    first_line = lines[0].lstrip()

    # Allow autosquash prefixes.
    for prefix in ("fixup! ", "squash! "):
        stripped = first_line.removeprefix(prefix)
        if stripped != first_line:
            first_line = stripped.lstrip()
            break

    # Allow merge/revert commits created by Git.
    if first_line.startswith(("Merge ", "Revert ")):
        return {"ok": True, "errors": []}

    match = HEADER_PATTERN.match(first_line)

    if match is None:
        return {
            "ok": False,
            "errors": [
                "Commit header must follow type(scope): subject or type: subject."
            ],
        }

    commit_type = match.group("type")
    subject = match.group("subject").strip()

    if commit_type not in ALLOWED_TYPES:
        return {
            "ok": False,
            "errors": [
                f"Commit type '{commit_type}' must be one of: {ALLOWED_TYPES_DISPLAY}."
            ],
        }

    if not subject:
        return {
            "ok": False,
            "errors": ["Commit subject must not be empty."],
        }

    words = subject.split()
    normalized_subject = " ".join(words).casefold()
    if normalized_subject in VAGUE_SUBJECTS:
        return {
            "ok": False,
            "errors": [
                "Commit subject is too vague. Use a specific action and object."
            ],
        }

    for pattern, msg in _NORMALIZED_SUBJECT_GUARDS:
        if pattern.match(normalized_subject):
            return {"ok": False, "errors": [msg]}

    errors: list[str] = []

    if len(first_line) > MAX_HEADER_LENGTH:
        errors.append(
            f"Commit header must be at most {MAX_HEADER_LENGTH} characters (got {len(first_line)})."
        )

    if len(subject) > MAX_SUBJECT_LENGTH:
        errors.append(
            f"Commit subject must be at most {MAX_SUBJECT_LENGTH} characters (got {len(subject)})."
        )

    for pattern, msg in _SUBJECT_CHECKS:
        if pattern.search(subject):
            errors.append(msg)

    first_word = words[0]
    if _FIRST_WORD_PATTERN.fullmatch(first_word) is None:
        errors.append(
            "Commit subject must start with a lowercase imperative verb (e.g. add, fix, re-add, refactor)."
        )
    elif (first_word.endswith("ed") and len(first_word) > 4) or (
        # len > 4 skips short words like "red", "bed", "axed" (≤4 chars)
        # len > 5 skips short words like "ring", "bring", "sting" (≤5 chars)
        first_word.endswith("ing") and len(first_word) > 5
    ):
        errors.append(
            "Commit subject should use imperative mood (e.g. 'add', not 'added' or 'adding')."
        )

    return {"ok": not errors, "errors": errors}


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        print(
            "Usage: python scripts/check_commit_msg.py <commit-message-file>",
            file=sys.stderr,
        )
        return 1

    commit_message_path = Path(argv[1])
    message = commit_message_path.read_text(encoding="utf-8")
    result = validate_commit_message(message)

    if result["ok"]:
        return 0

    print("Commit message validation failed:", file=sys.stderr)
    for error in result["errors"]:
        print(f"- {error}", file=sys.stderr)
    print("Valid example: feat(lectures): add semester filter", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
