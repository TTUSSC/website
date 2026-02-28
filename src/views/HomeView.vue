<template>
  <div>
    <!-- ═══════════════════ Hero ═══════════════════ -->
    <section
      class="relative overflow-hidden noise-bg min-h-[calc(100vh-3.5rem)] flex items-center py-16 md:py-0"
    >
      <div class="relative z-10 max-w-5xl mx-auto px-6 w-full md:-mt-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div class="md:col-span-8">
            <div class="reveal flex items-center gap-3 mb-4 md:mb-6">
              <span
                class="inline-block px-2.5 py-1 text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-rust border border-rust/30 rounded-sm"
              >
                Open Source Club
              </span>
              <div class="flex items-center gap-2">
                <a
                  href="https://discord.com/invite/29PsKfe45h"
                  target="_blank"
                  aria-label="Discord"
                  class="text-sand hover:text-[#5865F2] transition-colors duration-200"
                >
                  <font-awesome-icon :icon="faDiscord" class="text-base" />
                </a>
                <a
                  href="https://www.facebook.com/ttussc/"
                  target="_blank"
                  aria-label="Facebook"
                  class="text-sand hover:text-[#1877F2] transition-colors duration-200"
                >
                  <font-awesome-icon :icon="faFacebook" class="text-base" />
                </a>
                <a
                  href="https://instagram.com/ttussc_/"
                  target="_blank"
                  aria-label="Instagram"
                  class="text-sand hover:text-[#E1306C] transition-colors duration-200"
                >
                  <font-awesome-icon :icon="faInstagram" class="text-base" />
                </a>
              </div>
            </div>
            <h1
              class="reveal reveal-d1 font-display text-[clamp(3.2rem,9vw,6rem)] font-extrabold text-ink leading-tight tracking-tight whitespace-nowrap"
            >
              科學開源服務社
            </h1>
            <p
              class="reveal reveal-d2 mt-4 md:mt-8 text-sm md:text-lg text-clay leading-relaxed max-w-md"
            >
              致力於推廣開源文化、技術學習與志工服務。透過社課與講座學習開源工具，專案實作累積經驗，並參與資訊營隊與研討會志工。
            </p>
            <div class="reveal reveal-d3 mt-8 flex flex-wrap gap-3">
              <a
                href="https://forms.gle/GWUsti9y7igNq9gXA"
                target="_blank"
                class="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-md hover:bg-ink-soft transition-colors duration-300"
              >
                加入我們
                <svg
                  class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="https://forms.gle/nfnLuF2F2kBCH9AKA"
                target="_blank"
                class="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-rust text-paper rounded-md hover:opacity-90 transition-opacity duration-200"
              >
                幹部召集令
                <svg
                  class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
          <div class="reveal reveal-d4 md:col-span-4 flex justify-center">
            <div class="relative translate-y-4 md:translate-y-6">
              <div class="absolute -inset-8 bg-rust/5 rounded-full blur-3xl"></div>
              <img
                src="/logo.png"
                alt="TTUSSC"
                class="relative w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- scroll hint -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-sand/60"
      >
        <span class="text-[10px] uppercase tracking-widest">Scroll</span>
        <svg
          class="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <!-- Decorative border -->
      <div
        class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chalk to-transparent"
      ></div>
    </section>

    <!-- ═══════════════════ 我們在做什麼 ═══════════════════ -->
    <section class="py-20 md:py-28">
      <div class="max-w-5xl mx-auto px-6">
        <!-- Section title -->
        <div class="mb-10 scroll-reveal" ref="addRevealRef">
          <h2 class="text-3xl md:text-4xl font-bold text-ink">我們在做什麼？</h2>
        </div>

        <!-- Horizontal accordion -->
        <div class="scroll-reveal flex gap-3 h-[300px] md:h-[360px]" ref="addRevealRef">
          <div
            v-for="(item, i) in whatWeDoItems"
            :key="item.title"
            @click="activeIndex = i"
            class="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            :class="activeIndex === i ? 'flex-[5]' : 'w-[100px] md:w-[120px] shrink-0'"
          >
            <!-- Photo background -->
            <img
              :src="item.img"
              :alt="item.title"
              class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700"
              :class="activeIndex === i ? 'scale-100' : 'scale-110'"
            />

            <div
              class="absolute inset-0 transition-all duration-500"
              :class="
                activeIndex === i
                  ? 'bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10'
                  : 'bg-[#0d2a4a]/65'
              "
            />

            <!-- Active: content at bottom -->
            <Transition name="fade-up">
              <div v-if="activeIndex === i" class="absolute inset-0 flex items-end p-7 md:p-10">
                <div class="text-white">
                  <span class="font-mono text-[11px] text-white/50 tracking-[0.2em]">{{
                    String(i + 1).padStart(2, '0')
                  }}</span>
                  <h3 class="mt-1 font-display font-bold text-2xl md:text-3xl">{{ item.title }}</h3>
                  <p class="mt-2 text-sm text-white/75 leading-relaxed max-w-xs">{{ item.desc }}</p>
                </div>
              </div>
            </Transition>

            <!-- Inactive: vertical title -->
            <Transition name="fade">
              <div
                v-if="activeIndex !== i"
                class="absolute inset-0 flex items-center justify-center"
              >
                <span
                  class="font-display font-bold text-white text-base md:text-lg [writing-mode:vertical-rl] tracking-[0.2em] drop-shadow"
                  >{{ item.title }}</span
                >
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-5xl mx-auto px-6">
      <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent"></div>
    </div>

    <!-- ═══════════════════ 最近社課 ═══════════════════ -->
    <section class="py-20 md:py-28">
      <div class="max-w-5xl mx-auto px-6">
        <!-- Section label above card -->
        <div class="mb-6 scroll-reveal" ref="addRevealRef">
          <span class="text-[11px] uppercase tracking-[0.2em] text-moss font-semibold"
            >本學期社課</span
          >
          <h2 class="mt-2 text-3xl md:text-4xl font-bold text-ink">114-2 課程預覽</h2>
        </div>

        <!-- Card with warm background + penguin -->
        <div class="relative scroll-reveal" ref="addRevealRef">
          <!-- Warm card -->
          <div class="bg-[#f5efe0] rounded-2xl px-6 md:px-8 pt-6 pb-8">
            <!-- Lecture list -->
            <div class="divide-y divide-[#e8dfc8]">
              <RouterLink
                v-for="(lecture, i) in recentLectures"
                :key="lecture.name"
                to="/lecture"
                class="scroll-reveal group flex items-center gap-4 md:gap-8 py-4 px-3 -mx-3 rounded-lg hover:bg-white/50 transition-colors duration-200 cursor-pointer"
                :class="`scroll-reveal-delay-${i + 1}`"
                ref="addRevealRef"
              >
                <!-- Date -->
                <span class="text-sm text-sand font-mono w-14 shrink-0">{{ lecture.date }}</span>
                <!-- Title -->
                <span
                  class="flex-1 font-medium text-ink group-hover:text-rust transition-colors duration-200 leading-snug"
                >
                  {{ lecture.name }}
                </span>
                <!-- Tags -->
                <div class="hidden md:flex items-center gap-1.5 shrink-0">
                  <span
                    v-for="tag in lecture.tags.slice(0, 2)"
                    :key="tag"
                    class="text-[11px] px-2 py-0.5 rounded-full bg-white/70 text-clay"
                    >{{ tag }}</span
                  >
                </div>
                <!-- Type badge -->
                <span
                  class="text-[11px] px-2.5 py-0.5 rounded-full shrink-0 font-medium"
                  :class="lecture.type === '主線' ? 'bg-rust/15 text-rust' : 'bg-moss/15 text-moss'"
                  >{{ lecture.type }}</span
                >
                <!-- Arrow -->
                <svg
                  class="w-4 h-4 text-[#c8bfa8] group-hover:text-rust group-hover:translate-x-1 transition-all duration-200 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" d="M9 5l7 7-7 7" />
                </svg>
              </RouterLink>
            </div>

            <!-- View all link -->
            <div class="mt-5">
              <RouterLink
                to="/lecture"
                class="inline-flex items-center gap-2 text-sm text-clay hover:text-ink transition-colors duration-200 group"
              >
                查看所有社課
                <svg
                  class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </RouterLink>
            </div>
          </div>

          <!-- Thinking penguin at bottom-right of card -->
          <img
            src="/img/thinking.png"
            alt="思考中的企鵝"
            class="absolute -bottom-2 -right-4 md:-right-6 w-16 md:w-20 select-none pointer-events-none drop-shadow-sm"
          />
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-5xl mx-auto px-6">
      <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent"></div>
    </div>

    <!-- ═══════════════════ 活動精選 ═══════════════════ -->
    <section class="py-20 md:py-28">
      <div class="max-w-5xl mx-auto px-6">
        <!-- Header -->
        <div class="mb-10 scroll-reveal" ref="addRevealRef">
          <span class="text-[11px] uppercase tracking-[0.2em] text-rust font-semibold"
            >活動精選</span
          >
          <h2 class="mt-2 text-3xl md:text-4xl font-bold text-ink">回顧我們的足跡</h2>
        </div>

        <!-- Folder tabs layout -->
        <div
          class="scroll-reveal flex h-[360px] md:h-[460px]"
          ref="addRevealRef"
          @mouseenter="pauseCarousel"
          @mouseleave="resumeCarousel"
        >
          <!-- Left: folder tabs – full height -->
          <div class="flex flex-col shrink-0 w-32 md:w-40 h-full">
            <button
              v-for="(photo, i) in activityPhotos"
              :key="i"
              @click="goToPhoto(i)"
              class="flex-1 relative text-left px-4 md:px-5 rounded-l-xl transition-all duration-300 select-none flex items-center"
              :class="
                currentPhoto === i
                  ? 'bg-ink text-paper z-10'
                  : 'bg-[#e8e4dc] text-clay hover:bg-chalk'
              "
            >
              <span class="text-sm md:text-[15px] font-display font-semibold leading-tight">{{
                photo.alt
              }}</span>
              <!-- Divider (except last) -->
              <span
                v-if="i < activityPhotos.length - 1 && currentPhoto !== i && currentPhoto !== i + 1"
                class="absolute bottom-0 left-4 right-0 h-px bg-chalk/70"
              />
            </button>
          </div>

          <!-- Right: photo – directly adjacent, no gap -->
          <div class="flex-1 relative overflow-hidden rounded-r-2xl bg-fog">
            <Transition name="carousel-fade" mode="out-in">
              <div :key="currentPhoto" class="absolute inset-0">
                <img
                  :src="activityPhotos[currentPhoto].src"
                  :alt="activityPhotos[currentPhoto].alt"
                  class="w-full h-full object-cover"
                />
                <!-- Gradient overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                />
                <!-- Caption -->
                <div
                  class="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between gap-4"
                >
                  <div>
                    <span
                      class="text-white font-display font-bold text-xl md:text-2xl drop-shadow"
                      >{{ activityPhotos[currentPhoto].alt }}</span
                    >
                    <p class="mt-1 text-white/75 text-sm leading-relaxed max-w-sm">
                      {{ activityPhotos[currentPhoto].desc }}
                    </p>
                  </div>
                  <!-- View more link -->
                  <a
                    href="https://instagram.com/ttussc_/"
                    target="_blank"
                    class="shrink-0 flex items-center gap-1 text-white/70 hover:text-white text-xs transition-colors duration-200 group"
                  >
                    查看更多活動照片
                    <svg
                      class="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" d="M5 12h14m-4-4l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { faDiscord, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { semesterData } from '@/data/lectures/114-2.js'

// ── 我們在做什麼 — 活躍索引 ──
const activeIndex = ref(0)

// ── 最近社課 資料（取前6筆主線/支線，跳過空描述的重複課）──
const recentLectures = semesterData
  .filter((l) => l.name && l.type)
  .filter((l) => !['cpe(1)', 'cpe(2)', 'cpe(3)', 'cpe(4)', 'cpe(5)'].includes(l.name.trim()))
  .slice(0, 5)

// ── 活動照片輪播 ──
const activityPhotos = [
  { src: '/img/20260226期初大會.jpg', alt: '最近社課', desc: '20260226 期初大會' },
  {
    src: '/img/2026 winter_vacation_camp.png',
    alt: '營隊活動',
    desc: '2026 小小創客大冒險 - ARDUINO冬日創客營',
  },
  { src: '/img/202508COSCUP.jpg', alt: '開源社群', desc: '20250810 COSCUP' },
]
const currentPhoto = ref(0)
let carouselTimer = null

const nextPhoto = () => {
  currentPhoto.value = (currentPhoto.value + 1) % activityPhotos.length
}

const goToPhoto = (i) => {
  currentPhoto.value = i
}
const pauseCarousel = () => {
  clearInterval(carouselTimer)
}
const resumeCarousel = () => {
  carouselTimer = setInterval(nextPhoto, 4000)
}

// ── 我們在做什麼 ──
const whatWeDoItems = [
  {
    title: '課程',
    desc: '舉辦社課、講座與工作坊，帶領社員學習 HackMD、Linux、Git 等技術，培養實力並融入開源社群。',
    img: '/img/202510_lecture.jpg',
  },
  {
    title: '社群',
    desc: '認識志同道合的朋友，隨時揪團探討技術或參與社群活動，感受協作的魅力。',
    img: '/img/202508COSCUP.jpg',
  },
  {
    title: '服務',
    desc: '寒暑假舉辦資訊相關營隊，將所學回饋社群，實現服務與學習的結合。',
    img: '/img/202601_camp.JPG',
  },
]

// ── Scroll Reveal (IntersectionObserver) ──
const revealEls = ref([])

const addRevealRef = (el) => {
  if (el) {
    // handle both component $el and native el
    const node = el.$el ?? el
    if (node instanceof Element && !revealEls.value.includes(node)) {
      revealEls.value.push(node)
    }
  }
}

let observer = null

onMounted(() => {
  // Start carousel auto-play
  carouselTimer = setInterval(nextPhoto, 4000)

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )

  // Also select all .scroll-reveal elements in the DOM
  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el)
  })
})

onUnmounted(() => {
  clearInterval(carouselTimer)
  observer?.disconnect()
})
</script>
