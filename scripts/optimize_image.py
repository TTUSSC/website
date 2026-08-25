#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = ["Pillow>=10"]
# ///
"""Resize and recompress images so oversized source photos don't bloat the repo.

Output format follows the destination path's extension (.jpg/.jpeg -> JPEG,
.png -> PNG), regardless of the source format -- this lets a caller convert a
large photographic PNG to a smaller JPEG simply by naming the destination
with a .jpg extension.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from PIL import Image

MAX_DIMENSION = 2000
JPEG_QUALITY = 82
SOURCE_EXTENSIONS = {".jpg", ".jpeg", ".png"}


def optimize_image(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as img:
        img.load()
        if img.width > MAX_DIMENSION or img.height > MAX_DIMENSION:
            img.thumbnail((MAX_DIMENSION, MAX_DIMENSION), Image.LANCZOS)

        suffix = dest.suffix.lower()
        if suffix in {".jpg", ".jpeg"}:
            if img.mode != "RGB":
                img = img.convert("RGB")
            img.save(dest, "JPEG", quality=JPEG_QUALITY, optimize=True)
        elif suffix == ".png":
            img.save(dest, "PNG", optimize=True)
        else:
            raise ValueError(f"Unsupported output extension: {suffix}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=Path, help="Source image file or directory")
    parser.add_argument(
        "output",
        type=Path,
        help="Destination file (single-file mode) or directory (directory mode)",
    )
    args = parser.parse_args()

    if args.input.is_dir():
        found = False
        for src in sorted(args.input.rglob("*")):
            if src.is_file() and src.suffix.lower() in SOURCE_EXTENSIONS:
                found = True
                rel = src.relative_to(args.input)
                dest = args.output / rel
                optimize_image(src, dest)
                print(f"{src} -> {dest}")
        if not found:
            print(f"No images found under {args.input}", file=sys.stderr)
            return 1
    elif args.input.is_file():
        optimize_image(args.input, args.output)
        print(f"{args.input} -> {args.output}")
    else:
        print(f"Input path does not exist: {args.input}", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
