<template>
  <div class="max-w-5xl mx-auto px-6 py-20 md:py-24">
    <span class="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-moss">Projects</span>
    <h1 class="font-display text-3xl md:text-4xl font-bold text-ink mt-2 mb-3">專案</h1>
    <p class="text-clay mb-12 text-[15px]">我們透過實作專案，帶領同學與小朋友認識科學與科技的樂趣。</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div v-for="p in projects" :key="p.title"
        class="hover-lift bg-paper-warm rounded-xl p-7 border border-chalk/60">
        <div class="text-2xl mb-4">{{ p.icon }}</div>
        <h3 class="font-display text-lg font-semibold text-ink mb-2">{{ p.title }}</h3>
        <p class="text-sm text-clay leading-relaxed">{{ p.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  { title: '紙上的電腦科學營', desc: '透過數個學習單活動，帶領小朋友探索電腦科學的知識。', icon: '💻' },
  { title: '電資創客營', desc: '學習基本電學與程式邏輯，帶小朋友完成無用盒小專題。', icon: '🔧' },
  { title: '科學探索家', desc: '利用簡單的物理知識，帶小朋友動手做出水火箭。', icon: '🚀' },
]
</script>
