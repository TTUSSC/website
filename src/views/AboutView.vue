<template>
  <div class="max-w-2xl mx-auto px-6 py-20 md:py-24">
    <span class="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-moss reveal">About</span>
    <h1 class="reveal reveal-d1 font-display text-3xl md:text-4xl font-bold text-ink mt-2 mb-10">
      開源，開啟協作與分享的新篇章
    </h1>

    <div class="reveal reveal-d2 space-y-5 text-clay leading-[1.85] text-[15px]">
      <p>在資訊爆炸與技術革新的時代，人們越來越重視智慧財產的保護，期望透過規範帶來便利與創新。然而，隨之而來的專利戰與過度保護，往往阻礙了知識的流通與技術的進步。面對這樣的現實，我們相信事情可以有另一種選擇。</p>
      <p>「開源」的本質是分享與協作。從分享智慧到推動文化進步，開源精神讓程式碼在陽光下接受檢視，讓所有人都能參與修正與改良。這種開放的模式不僅防範了隱私侵害與惡意程式，還促成了技術的共同進步，開啟了透明與信任的未來。</p>
    </div>

    <div class="mt-14 space-y-10 reveal reveal-d3">
      <div v-for="section in sections" :key="section.title">
        <h3 class="font-display text-lg font-semibold text-ink mb-3 flex items-center gap-3">
          <span class="w-6 h-0.5 rounded-full" :class="section.bar"></span>
          {{ section.title }}
        </h3>
        <template v-if="section.items">
          <ul class="space-y-3 ml-9">
            <li v-for="item in section.items" :key="item.label" class="text-[15px] text-clay leading-relaxed">
              <strong class="text-ink">{{ item.label }}</strong>：{{ item.text }}
            </li>
          </ul>
        </template>
        <p v-else class="text-[15px] text-clay leading-relaxed ml-9">{{ section.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const sections = [
  { title: '我們是誰？', bar: 'bg-rust', text: '科學開源服務社是以學生角度出發的社群，致力於推廣開源文化與資訊透明。我們以行動實踐開源理念，探索開源如何改善生活，改變未來。' },
  { title: '我們在做什麼？', bar: 'bg-moss', items: [
    { label: '課程', text: '舉辦社課、講座與工作坊，帶領社員學習 HackMD、Linux、Git 等技術，培養實力並融入開源社群。' },
    { label: '專案', text: '透過實作專案累積經驗，從實際應用中體會開源的價值與成就感。' },
    { label: '社群', text: '認識志同道合的朋友，隨時揪團探討技術或參與社群活動，感受協作的魅力。' },
    { label: '服務', text: '寒暑假舉辦資訊相關營隊，將所學回饋社群，實現服務與學習的結合。' },
  ]},
  { title: '加入我們', bar: 'bg-clay', text: '社課的時間和資訊會在每學期公告於網站上，每個禮拜 IG 上也會貼文公告。歡迎一同加入科學開源服務社，探索開源的世界，讓分享與協作成為你的日常！' },
]
</script>
