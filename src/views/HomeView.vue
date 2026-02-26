<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden noise-bg">
      <div class="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div class="md:col-span-7">
            <div class="reveal">
              <span
                class="inline-block px-2.5 py-1 text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-rust border border-rust/30 rounded-sm mb-6"
              >
                Open Source Club
              </span>
            </div>
            <h1
              class="reveal reveal-d1 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-ink leading-[1.05] tracking-tight"
            >
              科學開源<br />服務社
            </h1>
            <p
              class="reveal reveal-d2 mt-6 text-base md:text-lg text-clay leading-relaxed max-w-md"
            >
              致力於推廣開源文化、技術學習與志工服務。透過社課與講座學習開源工具，專案實作累積經驗，並參與資訊營隊與研討會志工。
            </p>
            <div class="reveal reveal-d3 mt-8 flex flex-wrap gap-3">
              <a
                href="https://forms.gle/GWUsti9y7igNq9gXA"
                target="_blank"
                class="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-md hover:bg-rust transition-colors duration-300"
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
                href="https://discord.com/invite/29PsKfe45h"
                target="_blank"
                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-ink border border-chalk rounded-md hover:border-ink transition-colors duration-200"
              >
                Discord
              </a>
            </div>
          </div>
          <div class="reveal reveal-d4 md:col-span-5 flex justify-center">
            <div class="relative">
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
      <!-- Decorative border -->
      <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent"></div>
    </section>

    <!-- What We Do -->
    <section class="py-20 md:py-24">
      <div class="max-w-5xl mx-auto px-6">
        <div class="mb-14 max-w-md">
          <span class="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-moss"
            >What We Do</span
          >
          <h2 class="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">我們在做些什麼</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="(card, i) in cards"
            :key="i"
            class="hover-lift group bg-paper-warm rounded-xl overflow-hidden border border-chalk/60 cursor-default"
          >
            <div class="aspect-[16/10] overflow-hidden">
              <img
                :src="card.image"
                :alt="card.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <h3 class="font-display text-lg font-semibold text-ink mb-2">{{ card.title }}</h3>
              <p class="text-sm text-clay leading-relaxed">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-5xl mx-auto px-6">
      <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent"></div>
    </div>

    <!-- CTAs -->
    <section class="py-20 md:py-24">
      <div class="max-w-5xl mx-auto px-6 space-y-5">
        <!-- 幹部 -->
        <div
          class="noise-bg relative overflow-hidden rounded-xl border border-chalk/60 bg-paper-warm"
        >
          <div
            class="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div class="flex-1">
              <span
                class="inline-block px-2 py-0.5 text-[10px] font-display font-semibold uppercase tracking-[0.15em] text-rust bg-rust/10 rounded-sm mb-3"
                >招募中</span
              >
              <h3 class="font-display text-xl font-bold text-ink mb-2">幹部召集令！</h3>
              <p class="text-sm text-clay leading-relaxed">
                填寫籌備幹部表，告訴我們你想挑戰哪個角色。<strong class="text-ink"
                  >不論想嘗試新技能、或單純想幫忙，都超歡迎。</strong
                >
              </p>
            </div>
            <a
              href="https://forms.gle/nfnLuF2F2kBCH9AKA"
              target="_blank"
              class="shrink-0 group inline-flex items-center gap-2 px-5 py-2.5 bg-rust text-paper text-sm font-medium rounded-md hover:bg-rust-light transition-colors"
            >
              成為小幫手
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

        <!-- 入社 -->
        <div class="noise-bg relative overflow-hidden rounded-xl bg-ink">
          <div
            class="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div class="flex-1">
              <h3 class="font-display text-xl font-bold text-paper mb-2">加入我們！</h3>
              <p class="text-sm text-sand/60 leading-relaxed">
                學期初都會有期初大會，向各位介紹社團。<strong class="text-paper"
                  >我們歡迎對開源、服務有興趣的學生加入。</strong
                >
              </p>
            </div>
            <a
              href="https://forms.gle/GWUsti9y7igNq9gXA"
              target="_blank"
              class="shrink-0 group inline-flex items-center gap-2 px-5 py-2.5 bg-paper text-ink text-sm font-medium rounded-md hover:bg-fog transition-colors"
            >
              填寫入社表單
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
      </div>
    </section>
  </div>
</template>

<script setup>
const cards = [
  {
    title: '開源文化',
    desc: '認識開源精神與理念，參與 SITCON、COSCUP 等社群活動，感受開源社群的魅力，拓展視野。',
    image: '/img/open-source.jpg',
  },
  {
    title: '技術學習',
    desc: '學習 HackMD、Linux、Git 等實用工具，提升技術能力，應用於日常與專案中。',
    image: '/img/tech-learning.jpg',
  },
  {
    title: '志工服務',
    desc: '寒暑假舉辦資訊營隊，參與研討會志工，結合服務與學習，推廣開源理念。',
    image: '/img/other-activities.jpg',
  },
]
</script>
