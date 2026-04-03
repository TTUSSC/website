<template>
  <div class="max-w-5xl mx-auto px-6 py-20 md:py-24">
    <span class="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-rust"
      >活動紀錄</span
    >
    <h1 class="font-display text-3xl md:text-4xl font-bold text-ink mt-2 mb-3">活動</h1>
    <p class="text-clay mb-14 text-base md:text-lg leading-relaxed max-w-2xl">
      紀錄社團的每一個足跡——從每週社課到年度營隊，從校園到開源社群，我們一起走過的每個時刻。
    </p>

    <!-- Three activity blocks -->
    <div class="space-y-16">
      <!-- 最近社課 -->
      <div class="scroll-reveal" ref="addRevealRef">
        <div class="flex items-center gap-3 mb-6">
          <span class="w-8 h-0.5 bg-moss rounded-full"></span>
          <h2 class="font-display text-xl md:text-2xl font-bold text-ink">最近社課</h2>
        </div>
        <div class="relative">
          <div
            ref="recentScrollEl"
            class="gallery-scroll flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3"
          >
            <div
              v-for="item in recentActivities"
              :key="item.title"
              class="hover-lift group relative overflow-hidden rounded-2xl bg-fog aspect-[4/3] cursor-pointer snap-start shrink-0 w-[76vw] md:w-[310px]"
            >
              <img
                v-if="item.img"
                :src="item.img"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent transition-all duration-300 group-hover:from-ink/75"
              />
              <div class="absolute bottom-0 left-0 right-0 px-3 pb-3">
                <p class="text-white font-display font-semibold text-sm drop-shadow">
                  {{ item.title }}
                </p>
                <p
                  v-if="item.desc"
                  class="text-white/80 text-xs mt-0.5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
          <!-- Desktop arrows -->
          <button
            @click="recentScrollEl?.scrollBy({ left: -330, behavior: 'smooth' })"
            class="hidden md:flex absolute -left-5 top-[calc(50%-1.25rem)] -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-paper/90 shadow border border-chalk text-ink hover:bg-paper transition-all duration-200 z-10"
            aria-label="向左滑"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="recentScrollEl?.scrollBy({ left: 330, behavior: 'smooth' })"
            class="hidden md:flex absolute -right-5 top-[calc(50%-1.25rem)] -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-paper/90 shadow border border-chalk text-ink hover:bg-paper transition-all duration-200 z-10"
            aria-label="向右滑"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent"></div>

      <!-- 營隊活動 -->
      <div class="scroll-reveal" ref="addRevealRef">
        <div class="flex items-center gap-3 mb-6">
          <span class="w-8 h-0.5 bg-rust rounded-full"></span>
          <h2 class="font-display text-xl md:text-2xl font-bold text-ink">營隊活動</h2>
        </div>
        <div class="relative">
          <div
            ref="campScrollEl"
            class="gallery-scroll flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3"
          >
            <div
              v-for="item in campActivities"
              :key="item.title"
              class="hover-lift group relative overflow-hidden rounded-2xl bg-fog aspect-[4/3] cursor-pointer snap-start shrink-0 w-[76vw] md:w-[310px]"
            >
              <img
                v-if="item.img"
                :src="item.img"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent transition-all duration-300 group-hover:from-ink/75"
              />
              <div class="absolute bottom-0 left-0 right-0 px-3 pb-3">
                <p class="text-white font-display font-semibold text-sm drop-shadow">
                  {{ item.title }}
                </p>
                <p
                  v-if="item.desc"
                  class="text-white/80 text-xs mt-0.5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
          <button
            @click="campScrollEl?.scrollBy({ left: -330, behavior: 'smooth' })"
            class="hidden md:flex absolute -left-5 top-[calc(50%-1.25rem)] -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-paper/90 shadow border border-chalk text-ink hover:bg-paper transition-all duration-200 z-10"
            aria-label="向左滑"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="campScrollEl?.scrollBy({ left: 330, behavior: 'smooth' })"
            class="hidden md:flex absolute -right-5 top-[calc(50%-1.25rem)] -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-paper/90 shadow border border-chalk text-ink hover:bg-paper transition-all duration-200 z-10"
            aria-label="向右滑"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent"></div>

      <!-- 開源社群 -->
      <div class="scroll-reveal" ref="addRevealRef">
        <div class="flex items-center gap-3 mb-6">
          <span class="w-8 h-0.5 bg-clay rounded-full"></span>
          <h2 class="font-display text-xl md:text-2xl font-bold text-ink">開源社群</h2>
        </div>
        <div class="relative">
          <div
            ref="communityScrollEl"
            class="gallery-scroll flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3"
          >
            <div
              v-for="item in communityActivities"
              :key="item.title"
              class="hover-lift group relative overflow-hidden rounded-2xl bg-fog aspect-[4/3] cursor-pointer snap-start shrink-0 w-[76vw] md:w-[310px]"
            >
              <img
                v-if="item.img"
                :src="item.img"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent transition-all duration-300 group-hover:from-ink/75"
              />
              <div class="absolute bottom-0 left-0 right-0 px-3 pb-3">
                <p class="text-white font-display font-semibold text-sm drop-shadow">
                  {{ item.title }}
                </p>
                <p
                  v-if="item.desc"
                  class="text-white/80 text-xs mt-0.5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
          <button
            @click="communityScrollEl?.scrollBy({ left: -330, behavior: 'smooth' })"
            class="hidden md:flex absolute -left-5 top-[calc(50%-1.25rem)] -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-paper/90 shadow border border-chalk text-ink hover:bg-paper transition-all duration-200 z-10"
            aria-label="向左滑"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="communityScrollEl?.scrollBy({ left: 330, behavior: 'smooth' })"
            class="hidden md:flex absolute -right-5 top-[calc(50%-1.25rem)] -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-paper/90 shadow border border-chalk text-ink hover:bg-paper transition-all duration-200 z-10"
            aria-label="向右滑"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent"></div>

      <!-- 全社評 -->
      <div class="scroll-reveal" ref="addRevealRef">
        <div class="flex items-center gap-3 mb-6">
          <span class="w-8 h-0.5 bg-moss rounded-full"></span>
          <h2 class="font-display text-xl md:text-2xl font-bold text-ink">全社評</h2>
        </div>
        <div class="relative">
          <div
            ref="socialReviewScrollEl"
            class="gallery-scroll flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3"
          >
            <div
              v-for="item in socialReviewActivities"
              :key="item.title"
              class="hover-lift group relative overflow-hidden rounded-2xl bg-fog aspect-[4/3] cursor-pointer snap-start shrink-0 w-[76vw] md:w-[310px]"
            >
              <img
                v-if="item.img"
                :src="item.img"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent transition-all duration-300 group-hover:from-ink/75"
              />
              <div class="absolute bottom-0 left-0 right-0 px-3 pb-3">
                <p class="text-white font-display font-semibold text-sm drop-shadow">
                  {{ item.title }}
                </p>
                <p
                  v-if="item.desc"
                  class="text-white/80 text-xs mt-0.5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
          <button
            @click="socialReviewScrollEl?.scrollBy({ left: -330, behavior: 'smooth' })"
            class="hidden md:flex absolute -left-5 top-[calc(50%-1.25rem)] -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-paper/90 shadow border border-chalk text-ink hover:bg-paper transition-all duration-200 z-10"
            aria-label="向左滑"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="socialReviewScrollEl?.scrollBy({ left: 330, behavior: 'smooth' })"
            class="hidden md:flex absolute -right-5 top-[calc(50%-1.25rem)] -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-paper/90 shadow border border-chalk text-ink hover:bg-paper transition-all duration-200 z-10"
            aria-label="向右滑"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// scroll container refs
const recentScrollEl = ref(null)
const campScrollEl = ref(null)
const communityScrollEl = ref(null)
const socialReviewScrollEl = ref(null)

// ── 最近社課 ── (新的放最前面)

const recentActivities = [
  {
    title: '20260402 從 0 開始的前端實作：JavaScript 記帳系統',
    desc: '和網頁有互動了 !',
    img: '/img/lectures/20260402_從 0 開始的前端實作：JavaScript 記帳系統.jpg',
  },
  {
    title: '20260326 零基礎打造自己的網站  HTML × Tailwind CSS 網頁前端入門',
    desc: '打造酷酷的網頁 !',
    img: '/img/lectures/20260326_零基礎打造自己的網站  HTML × Tailwind CSS 網頁前端入門.jpg',
  },
  {
    title: '20260319 Git 起來！Denny 學長帶你雲端協作',
    desc: 'Git 進階實作 !',
    img: '/img/lectures/20260319_Git 起來！Denny 學長帶你雲端協作.jpg',
  },
  {
    title: '20260312 Git 起來！ Denny 學長帶你本地實踐',
    desc: 'Git 基礎實作 !',
    img: '/img/lectures/20260312_Git 起來！ Denny 學長帶你本地實踐.jpg',
  },
  {
    title: '20260305 AI不只有聊天 ? 做出屬於自己的AI Agent吧 !',
    desc: '萬崧的第一堂社課 ~',
    img: '/img/lectures/20260305_AI.jpg',
  },
  {
    title: '20260226 期初大會',
    desc: '114-2 學期社課正式開跑',
    img: '/img/lectures/20260226期初大會.jpg',
  },
  {
    title: '20251211 期末大會',
    desc: 'TakeTurnsUnwarppingSecretSantaChristmas',
    img: '/img/lectures/20251211_TakeTurnsUnwarppingSecretSantaChristmas.jpg',
  },
  {
    title: '20251205 做孩子的啦啦隊！',
    desc: '志工培訓',
    img: '/img/lectures/20251205_做孩子的啦啦隊！—志工培訓_260228_1.jpg',
  },
]

// ── 營隊活動 ──
const campActivities = [
  {
    title: '20260125-0130 小小創客大冒險',
    desc: 'ARDUINO冬日創客營',
    img: '/img/camps/2026 winter_vacation_camp.png',
  },
  {
    title: '20250811-0813 電資創客營',
    desc: '暑假營隊',
    img: '/img/camps/20250811電資創客營.jpg',
  },
  {
    title: '20250716 夏季攝影手作營',
    desc: '與攝影社合辦營隊',
    img: '/img/camps/20250716_夏季攝影手作營.jpg',
  },
]

// ── 開源社群 ──
const communityActivities = [
  {
    title: '20260328 SITCON',
    desc: '開源社今年又來啦~',
    img: '/img/Open-Source-Activity/20260328_SITCON.jpg',
  },
  {
    title: '20250810 COSCUP',
    desc: '開源人開源魂',
    img: '/img/Open-Source-Activity/202508COSCUP.jpg',
  },
  {
    title: '20250308 SITCON',
    desc: '開源人年會',
    img: '/img/Open-Source-Activity/20250308_SITCON.jpg',
  },
  {
    title: '20240803 COSCUP',
    desc: '開源人年會',
    img: '/img/Open-Source-Activity/20240803_COSCUP.jpg',
  },
]

// ── 全社評 ──
const socialReviewActivities = [
  {
    title: '20250329-30 全社評',
    desc: '希望每年都來 ~',
    img: '/img/National-Clubs/20250329-30_全社評.jpg',
  },
  {
    title: '20260328-29 全社評',
    desc: '認識到很多社團哦 ~',
    img: '/img/National-Clubs/20260328-29_全社評.jpg',
  },
]

// ── Scroll Reveal ──
const revealEls = ref([])
const addRevealRef = (el) => {
  if (el) {
    const node = el.$el ?? el
    if (node instanceof Element && !revealEls.value.includes(node)) {
      revealEls.value.push(node)
    }
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
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
  document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
/* 隱藏橫向滾動條，保留滑動功能 */
.gallery-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.gallery-scroll::-webkit-scrollbar {
  display: none;
}
</style>
