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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="item in recentActivities"
            :key="item.title"
            class="hover-lift group relative overflow-hidden rounded-2xl bg-fog aspect-[4/3] cursor-pointer"
          >
            <img
              v-if="item.img"
              :src="item.img"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <!-- 常態游層 + hover 加深 -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent transition-all duration-300 group-hover:from-ink/75"
            />
            <!-- 標題常態顯示，desc hover 時滑入 -->
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
      </div>

      <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent"></div>

      <!-- 營隊活動 -->
      <div class="scroll-reveal" ref="addRevealRef">
        <div class="flex items-center gap-3 mb-6">
          <span class="w-8 h-0.5 bg-rust rounded-full"></span>
          <h2 class="font-display text-xl md:text-2xl font-bold text-ink">營隊活動</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="item in campActivities"
            :key="item.title"
            class="hover-lift group relative overflow-hidden rounded-2xl bg-fog aspect-[4/3] cursor-pointer"
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
      </div>

      <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent"></div>

      <!-- 開源社群 -->
      <div class="scroll-reveal" ref="addRevealRef">
        <div class="flex items-center gap-3 mb-6">
          <span class="w-8 h-0.5 bg-clay rounded-full"></span>
          <h2 class="font-display text-xl md:text-2xl font-bold text-ink">開源社群</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="item in communityActivities"
            :key="item.title"
            class="hover-lift group relative overflow-hidden rounded-2xl bg-fog aspect-[4/3] cursor-pointer"
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ── 最近社課 ──
const recentActivities = [
  { title: '20260226 期初大會', desc: '114-2 學期社課正式開跑', img: '/img/20260226期初大會.jpg' },
  {
    title: '20251211 期末大會',
    desc: 'TakeTurnsUnwarppingSecretSantaChristmas',
    img: '/img/20251211_TakeTurnsUnwarppingSecretSantaChristmas.jpg',
  },
  {
    title: '20251205 做孩子的啦啦隊！',
    desc: '志工培訓',
    img: '/img/20251205_做孩子的啦啦隊！—志工培訓_260228_1.jpg',
  },
]

// ── 營隊活動 ──
const campActivities = [
  {
    title: '20260125-0130 小小創客大冒險',
    desc: 'ARDUINO冬日創客營',
    img: '/img/2026 winter_vacation_camp.png',
  },
  { title: '20250811-0813 電資創客營', desc: '暑假營隊', img: '/img/20250811電資創客營.jpg' },
  { title: '', desc: '', img: '' },
]

// ── 開源社群 ──
const communityActivities = [
  { title: '20250810 COSCUP', desc: '開源人年會', img: '/img/202508COSCUP.jpg' },
  { title: '20250329-30 全社評', desc: '全國社團評鑑', img: '/img/20250329-30_全社評.jpg' },
  { title: '20240803 COSCUP', desc: '開源人年會', img: '/img/20240803_COSCUP.jpg' },
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
