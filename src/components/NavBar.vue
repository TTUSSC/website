<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const iconClickCount = ref(0)
const lastClickTime = ref(0)
const handleIconClick = () => {
  const now = Date.now()
  if (now - lastClickTime.value > 10000) iconClickCount.value = 0
  iconClickCount.value++
  lastClickTime.value = now
  if (iconClickCount.value === 10) {
    alert('ttussc{dont_h4ck_us_j0in_us}')
    iconClickCount.value = 0
  }
}

const navLinks = [
  { to: '/', label: '首頁' },
  { to: '/about', label: '關於' },
  { to: '/member', label: '成員' },
  { to: '/lecture', label: '社課' },
  { to: '/project', label: '專案' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-500"
    :class="
      isScrolled ? 'bg-paper/90 backdrop-blur-xl shadow-[0_1px_0_var(--color-chalk)]' : 'bg-paper'
    "
  >
    <nav class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
      <RouterLink
        to="/"
        class="flex items-center gap-2.5 font-display font-bold text-ink tracking-tight hover:text-rust transition-colors duration-300"
        @click="handleIconClick"
      >
        <img src="/logo.png" alt="TTUSSC" class="h-6 w-6" />
        <span class="text-sm">TTUSSC</span>
      </RouterLink>

      <!-- Desktop -->
      <ul class="hidden md:flex items-center gap-0.5">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-3 py-1.5 text-[13px] font-medium text-clay rounded-md hover:text-ink hover:bg-fog transition-all duration-200"
            active-class="!text-ink !bg-fog"
            >{{ link.label }}</RouterLink
          >
        </li>
      </ul>

      <div class="hidden md:flex items-center gap-2">
        <a
          href="https://discord.com/invite/29PsKfe45h"
          target="_blank"
          class="flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-medium text-clay border border-chalk rounded-md hover:border-ink hover:text-ink transition-all duration-200"
        >
          <font-awesome-icon :icon="faDiscord" class="text-ink text-sm" />
          Discord
        </a>
        <a
          href="https://buymeacoffee.com/ttussc"
          target="_blank"
          class="px-3.5 py-1.5 text-[13px] font-medium bg-ink text-paper rounded-md hover:bg-ink-soft transition-all duration-200"
        >
          贊助我們
        </a>
      </div>

      <!-- Mobile -->
      <button
        @click="toggleMenu"
        class="md:hidden p-1.5 rounded-md hover:bg-fog transition-colors"
        aria-label="Menu"
      >
        <svg
          v-if="!isMenuOpen"
          class="w-5 h-5 text-ink"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" d="M4 7h16M4 12h10M4 17h14" />
        </svg>
        <svg
          v-else
          class="w-5 h-5 text-ink"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="isMenuOpen" class="md:hidden border-t border-chalk bg-paper">
        <div class="px-6 py-3 space-y-0.5">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-3 py-2 text-sm text-clay rounded-md hover:text-ink hover:bg-fog transition-all"
            active-class="!text-ink !bg-fog"
            @click="closeMenu"
            >{{ link.label }}</RouterLink
          >
          <div class="pt-3 flex gap-2">
            <a
              href="https://discord.com/invite/29PsKfe45h"
              target="_blank"
              class="flex-1 flex justify-center items-center gap-1.5 px-3 py-2 text-sm border border-chalk rounded-md text-ink"
              @click="closeMenu"
            >
              <font-awesome-icon :icon="faDiscord" />
              Discord
            </a>
            <a
              href="https://buymeacoffee.com/ttussc"
              target="_blank"
              class="flex-1 text-center px-3 py-2 text-sm bg-ink text-paper rounded-md"
              @click="closeMenu"
              >贊助</a
            >
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
