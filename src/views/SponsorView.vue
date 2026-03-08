<template>
  <div class="max-w-3xl mx-auto px-6 py-20 md:py-28">
    <!-- Header -->
    <div class="mb-14 reveal">
      <span class="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-rust"
        >Sponsor Us</span
      >
      <h1
        class="font-display text-3xl md:text-4xl font-bold text-ink mt-2 mb-4 flex items-center gap-3"
      >
        <span class="flex items-center justify-center w-10 h-10 rounded-full bg-rust/10">
          <svg
            class="w-5 h-5 text-rust"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </span>
        個人贊助方案
      </h1>
      <p class="text-clay text-base leading-relaxed max-w-xl">
        贊助金額請以百元為單位進行贊助。您的每一分支持，都是社團繼續前行的動力。
      </p>
    </div>

    <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent mb-14"></div>

    <!-- Tier cards -->
    <div class="space-y-6">
      <div
        v-for="tier in tiers"
        :key="tier.name"
        class="reveal group relative rounded-2xl border border-chalk bg-paper hover:border-clay/40 transition-all duration-300 overflow-hidden"
      >
        <!-- Colored left accent bar -->
        <div
          class="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
          :style="{ background: tier.color }"
        ></div>

        <div class="pl-6 pr-5 py-6">
          <!-- Tier title row -->
          <div class="flex items-start justify-between gap-4 mb-3">
            <div>
              <span class="text-xl">{{ tier.emoji }}</span>
              <span class="ml-2 font-display font-bold text-ink text-lg">{{ tier.name }}</span>
            </div>
            <span
              class="shrink-0 text-[12px] font-mono font-semibold px-2.5 py-1 rounded-full border"
              :style="{
                color: tier.color,
                borderColor: tier.color + '55',
                background: tier.color + '12',
              }"
              >{{ tier.range }}</span
            >
          </div>

          <!-- Quote -->
          <p
            class="text-[13px] text-clay/80 italic leading-relaxed mb-4 border-l-2 pl-3"
            :style="{ borderColor: tier.color + '80' }"
          >
            {{ tier.quote }}
          </p>

          <!-- Who it's for -->
          <p class="text-[13px] text-clay mb-4">
            <span class="font-medium text-ink">適合：</span>{{ tier.for }}
          </p>

          <!-- Benefits -->
          <div>
            <p class="text-[12px] uppercase tracking-[0.15em] font-semibold text-sand mb-2">
              🎁 回饋內容
            </p>
            <ul class="space-y-1.5">
              <li
                v-for="benefit in tier.benefits"
                :key="benefit"
                class="flex items-start gap-2 text-[13px] text-clay leading-relaxed"
              >
                <span class="mt-0.5 shrink-0 w-1 h-1 rounded-full bg-clay/40 mt-[7px]"></span>
                {{ benefit }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer note -->
    <div class="mt-14 text-center">
      <div class="h-px bg-gradient-to-r from-transparent via-chalk to-transparent mb-8"></div>
      <p class="text-sm text-clay leading-relaxed">
        若您有任何贊助相關問題，歡迎透過
        <a
          href="https://discord.com/invite/29PsKfe45h"
          target="_blank"
          class="text-ink underline underline-offset-2 hover:text-rust transition-colors"
          >Discord</a
        >
        或
        <a
          href="https://www.facebook.com/ttussc/"
          target="_blank"
          class="text-ink underline underline-offset-2 hover:text-rust transition-colors"
          >Facebook</a
        >
        與我們聯繫。
      </p>
    </div>
  </div>
</template>

<script setup>
const tiers = [
  {
    emoji: '🔹',
    name: '一般支持者',
    range: '100 – 400 元',
    color: '#7c9bb5',
    quote: '你的力量微小，卻足以點亮黑暗中的第一盞火。',
    for: '想小額支持、希望看到社團持續發展的人',
    benefits: [
      '期末大會感謝名單（電子）',
      'Discord 支持者身分組（Basic Supporter）',
      '受邀參與社團期初、期末大會',
    ],
  },
  {
    emoji: '🟫',
    name: '青銅支持者',
    range: '500 – 900 元',
    color: '#a0744a',
    quote: '你的援助如同青銅之盾，為我們擋下最初的風與雨。',
    for: '想真正參與社團文化的人',
    benefits: ['之前的所有回饋內容', '購買社團周邊享有折扣', '電子感謝狀'],
  },
  {
    emoji: '⚪',
    name: '白銀支持者',
    range: '1,000 – 4,900 元',
    color: '#8a9aaa',
    quote: '你賜予的銀光，使我們能在知識的迷霧中看得更遠。',
    for: '希望具體提升設備／教材的人',
    benefits: ['之前的所有回饋內容', '優先購買新上架的社團周邊', '社團活動優先參與權'],
  },
  {
    emoji: '🟡',
    name: '黃金支持者',
    range: '5,000 – 9,900 元',
    color: '#c9922a',
    quote: '你的黃金祝福讓計畫的齒輪運轉得比命運還要精準。',
    for: '社團核心贊助者，有興趣深度參與活動',
    benefits: [
      '之前的所有回饋內容',
      '實體感謝狀（期初、期末頒發）',
      '可指定贊助項目（贊助款項將有超過一半用於您指定的項目）',
    ],
  },
  {
    emoji: '🔵',
    name: '白金支持者',
    range: '10,000 – 19,900 元',
    color: '#5c85bd',
    quote: '你是白金之翼，帶我們越過技術的壁障，抵達更高的天空。',
    for: '想長期支持社團教育願景的人',
    benefits: [
      '之前的所有回饋內容',
      '名字將出現在社網的特別感謝名單中（可匿名）',
      '受邀於社團期初、期末大會致詞',
    ],
  },
  {
    emoji: '💎',
    name: '鑽石支持者',
    range: '20,000 元以上',
    color: '#7c5cbf',
    quote: '你的意志堅若鑽石，是足以改寫未來軌跡的神域之力。',
    for: '對教育、開源、科技傳承，有高度熱情的人',
    benefits: [
      '之前的所有回饋內容',
      '可在社團成員能力範圍內指定一項社團活動的主題',
      '全體社團幹部拍影片致謝',
    ],
  },
]
</script>
