<script setup>
import { ref, computed } from 'vue'
import { lectureData } from '@/data/lectureData.js'

const years = [
  { name: '114 下學期', value: '114-2' },
  { name: '114 上學期', value: '114-1' },
  { name: '113 下學期', value: '113-2' },
  { name: '113 上學期', value: '113-1' },
  { name: '112 下學期', value: '112-2' },
  { name: '112 上學期', value: '112-1' },
  { name: '111 下學期', value: '111-2' },
  { name: '111 上學期', value: '111-1' },
]

const selectedYear = ref(years[0])
const selectedFilter = ref('主線')
const expandedIndex = ref(-1)

const filteredData = computed(() => {
  const data = lectureData[selectedYear.value.value] || []
  if (selectedFilter.value === '全部') return data
  return data.filter((l) => l.type === selectedFilter.value)
})

function selectYear(year) {
  selectedYear.value = year
  selectedFilter.value = '主線'
  expandedIndex.value = -1
}

function toggleExpand(i) {
  expandedIndex.value = expandedIndex.value === i ? -1 : i
}

function difficultyStars(d) {
  if (d === 0) return '🌑🌑🌑🌑🌑'
  const full = Math.floor(d)
  const half = d % 1 >= 0.25 ? 1 : 0
  const empty = 5 - full - half
  return '🌕'.repeat(full) + (half ? '🌗' : '') + '🌑'.repeat(Math.max(0, empty))
}

function parseTimelineItem(itemStr) {
  // Extract time span (e.g., "18:00 ~ 18:30") and the remaining event description
  const match = itemStr.match(/^([\d:~ -]+)\s+(.+)$/)

  if (!match) return { time: '', event: itemStr }

  const [, time, event] = match
  return { time: time.trim(), event: event.trim() }
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20 md:py-24">
    <span class="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-moss"
      >Lectures</span
    >
    <h1 class="font-display text-3xl md:text-4xl font-bold text-ink mt-2 mb-3">社課</h1>
    <p class="text-[15px] text-clay leading-relaxed max-w-3xl mb-4">
      學長姐手把手教學，搭配業界前輩實戰分享。在這裡，你可以學程式、做專案，也能輕鬆交友。無論你的目標是什麼，這裡都有適合你的位置，帶你踏入開源世界的無限可能！
    </p>

    <!-- Difficulty Explanation with Hover Tooltip -->
    <div class="relative group inline-block z-20 mb-6">
      <div class="flex items-center gap-1.5 text-clay cursor-help hover:text-ink transition-colors">
        <svg
          class="w-4 h-4 text-moss"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
        <span class="text-[14px] border-b border-dashed border-clay/50">了解課程難度分級</span>
      </div>

      <!-- Tooltip Content -->
      <div
        class="absolute left-0 top-full mt-2 w-[320px] sm:w-[480px] p-5 bg-paper backdrop-blur-xl border border-chalk/80 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 origin-top-left pointer-events-none group-hover:pointer-events-auto"
      >
        <p class="text-[13px] text-ink/90 leading-relaxed mb-4">
          為了方便大家選擇感興趣的活動，我們的課程難度一共分為六個等級：
        </p>
        <ul class="space-y-2 text-[13px] text-ink/80 font-medium">
          <li class="flex items-start gap-2">
            <span class="shrink-0">🌑🌑🌑🌑🌑</span>：一般性質活動，任何人都可以一同參與。
          </li>
          <li class="flex items-start gap-2">
            <span class="shrink-0">🌕🌑🌑🌑🌑</span>：非常簡單，適合完全新手，無需任何背景知識。
          </li>
          <li class="flex items-start gap-2">
            <span class="shrink-0">🌕🌕🌑🌑🌑</span>：簡單，需具備基本概念或基礎能力。
          </li>
          <li class="flex items-start gap-2">
            <span class="shrink-0">🌕🌕🌕🌑🌑</span>：中等，內容稍具挑戰性，適合已有相關經驗的人。
          </li>
          <li class="flex items-start gap-2">
            <span class="shrink-0">🌕🌕🌕🌕🌑</span>：困難，需要較多背景知識或具備一定專業技能。
          </li>
          <li class="flex items-start gap-2">
            <span class="shrink-0">🌕🌕🌕🌕🌕</span>：非常困難，適合高水準的學習者或專業人士。
          </li>
        </ul>
      </div>
    </div>

    <!-- Semester Tabs -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="year in years"
        :key="year.value"
        @click="selectYear(year)"
        class="px-3 py-1.5 text-xs font-display font-medium rounded-md transition-all duration-200"
        :class="
          selectedYear.value === year.value
            ? 'bg-ink text-paper'
            : 'text-clay border border-chalk hover:border-ink hover:text-ink'
        "
      >
        {{ year.name }}
      </button>
    </div>

    <!-- Filter -->
    <div class="flex gap-2 mb-8">
      <button
        v-for="f in ['主線', '支線', '全部']"
        :key="f"
        @click="selectedFilter = f"
        class="px-3 py-1 text-xs font-display font-medium rounded-sm transition-all"
        :class="selectedFilter === f ? 'bg-rust text-paper' : 'bg-fog text-clay hover:text-ink'"
      >
        {{ f }}
      </button>
    </div>

    <!-- Lecture Cards -->
    <div class="space-y-2">
      <div
        v-for="(lecture, i) in filteredData"
        :key="i"
        class="bg-paper-warm rounded-xl border border-chalk/60 overflow-hidden transition-all duration-300"
        :class="{ 'shadow-md border-rust/30': expandedIndex === i }"
      >
        <button @click="toggleExpand(i)" class="w-full text-left px-5 py-4 flex items-center gap-4">
          <div class="shrink-0 w-14 text-center">
            <span class="text-[11px] font-mono text-sand">{{ lecture.date }}</span>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-display font-semibold text-ink text-sm truncate">{{ lecture.name }}</h3>
            <div class="flex items-center gap-2 mt-1 flex-wrap">
              <span class="text-[11px]">{{ difficultyStars(lecture.difficulty) }}</span>
              <span class="text-[11px] text-sand">{{ lecture.lecturer }}</span>
              <span
                v-if="lecture.type"
                class="px-1.5 py-0.5 text-[10px] rounded-sm"
                :class="lecture.type === '主線' ? 'bg-moss/10 text-moss' : 'bg-rust/10 text-rust'"
              >
                {{ lecture.type }}
              </span>
            </div>
          </div>
          <svg
            class="w-4 h-4 text-sand shrink-0 transition-transform duration-200"
            :class="{ 'rotate-180': expandedIndex === i }"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-screen"
          leave-active-class="transition-all duration-150 ease-in"
          leave-from-class="opacity-100 max-h-screen"
          leave-to-class="opacity-0 max-h-0"
        >
          <div v-if="expandedIndex === i" class="px-5 pb-5 border-t border-chalk/40">
            <div class="pt-4 space-y-4">
              <div v-if="lecture.location" class="flex items-center gap-2 text-[14px] text-clay">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    stroke-linecap="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                {{ lecture.location }}
              </div>

              <p
                v-if="lecture.description"
                class="text-[14px] text-ink/90 font-medium leading-relaxed whitespace-pre-line"
              >
                {{ lecture.description }}
              </p>

              <div
                v-if="lecture.tags && lecture.tags.length && lecture.tags[0]"
                class="flex flex-wrap gap-1.5"
              >
                <span
                  v-for="tag in lecture.tags"
                  :key="tag"
                  class="px-2 py-0.5 text-xs bg-fog text-clay rounded-sm"
                  >#{{ tag }}</span
                >
              </div>

              <div v-if="lecture.timeline && lecture.timeline.length" class="mt-6">
                <h4
                  class="text-[11px] font-display font-semibold text-sand uppercase tracking-[0.1em] mb-4"
                >
                  時程
                </h4>
                <div class="relative pl-4 border-l-2 border-chalk/50 ml-1 space-y-3.5">
                  <div v-for="(t, idx) in lecture.timeline" :key="idx" class="relative">
                    <!-- Timeline Dot -->
                    <div
                      class="absolute -left-[21px] top-[5px] w-2 h-2 rounded-full bg-paper border-[1.5px] border-chalk/80"
                      :class="{
                        'bg-paper-warm border-rust/70': idx === lecture.timeline.length - 1,
                      }"
                    ></div>

                    <template v-if="parseTimelineItem(t).time">
                      <div class="text-[10px] text-sand/70 font-mono mb-0.5 tracking-wide">
                        {{ parseTimelineItem(t).time }}
                      </div>
                      <div class="text-[13px] text-clay leading-snug">
                        {{ parseTimelineItem(t).event }}
                      </div>
                    </template>
                    <template v-else>
                      <div class="text-[13px] text-clay leading-snug">{{ t }}</div>
                    </template>
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 pt-3">
                <a
                  v-if="lecture.slide"
                  :href="lecture.slide"
                  target="_blank"
                  class="text-[13px] px-3 py-1.5 border border-chalk rounded-md text-rust hover:bg-rust/5 transition-colors"
                  >簡報 →</a
                >
                <a
                  v-if="lecture.note"
                  :href="lecture.note"
                  target="_blank"
                  class="text-[13px] px-3 py-1.5 border border-chalk rounded-md text-rust hover:bg-rust/5 transition-colors"
                  >共筆 →</a
                >
                <a
                  v-if="lecture.slido"
                  :href="lecture.slido"
                  target="_blank"
                  class="text-[13px] px-3 py-1.5 border border-chalk rounded-md text-rust hover:bg-rust/5 transition-colors"
                  >Slido →</a
                >
                <a
                  v-if="lecture.kktix"
                  :href="lecture.kktix"
                  target="_blank"
                  class="text-[13px] px-3 py-1.5 border border-chalk rounded-md text-rust hover:bg-rust/5 transition-colors"
                  >KKTIX →</a
                >
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <p v-if="!filteredData.length" class="text-center text-clay py-12 text-sm">
      這學期目前還沒有{{ selectedFilter }}社課資料。
    </p>
  </div>
</template>
