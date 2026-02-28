<script setup>
import { ref } from 'vue'

import { memberData as members } from '@/data/memberData'

const years = [
  { name: '第拾參屆', value: '13' },
  { name: '第拾貳屆', value: '12' },
  { name: '第拾壹屆', value: '11' },
  { name: '第拾屆', value: '10' },
]

const selectedYear = ref(years[0])
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20 md:py-24">
    <span class="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-moss"
      >Members</span
    >
    <h1 class="font-display text-3xl md:text-4xl font-bold text-ink mt-2 mb-3">社團成員</h1>
    <p class="text-clay mb-10 max-w-2xl text-[15px]">
      來自電機系、資工系、工設系等不同科系，每個人都帶著獨特的專長和興趣，共同為推廣開源文化而努力。
    </p>

    <!-- Year Tabs -->
    <div class="flex flex-wrap gap-2 mb-10">
      <button
        v-for="year in years"
        :key="year.value"
        @click="selectedYear = year"
        class="px-4 py-1.5 text-sm font-display font-medium rounded-md transition-all duration-200"
        :class="
          selectedYear.value === year.value
            ? 'bg-ink text-paper'
            : 'text-clay border border-chalk hover:border-ink hover:text-ink'
        "
      >
        {{ year.name }}
      </button>
    </div>

    <!-- Member Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="member in members[selectedYear.value]"
        :key="member.name + member.title"
        class="hover-lift bg-paper-warm rounded-xl p-5 border border-chalk/60"
      >
        <div class="flex gap-4">
          <div class="shrink-0 w-14 h-14 rounded-md overflow-hidden bg-fog">
            <img
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-xl">🐧</div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline gap-2 flex-wrap">
              <h3 class="font-display font-semibold text-ink text-[15px]">{{ member.name }}</h3>
              <span class="text-[11px] text-sand">{{ member.title }}</span>
            </div>
            <a
              v-if="member.ig"
              :href="'https://www.instagram.com/' + member.ig"
              target="_blank"
              class="text-[11px] text-rust hover:underline"
              >@{{ member.ig }}</a
            >
            <p v-if="member.desc" class="mt-1.5 text-[13px] text-clay leading-relaxed line-clamp-2">
              {{ member.desc }}
            </p>
            <div v-if="member.tags.length" class="mt-1.5 flex flex-wrap gap-1">
              <span
                v-for="tag in member.tags"
                :key="tag"
                class="px-1.5 py-0.5 text-[10px] bg-fog text-clay rounded-sm"
                >#{{ tag }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
