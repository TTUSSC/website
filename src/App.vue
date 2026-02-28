<script setup>
import { ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import GlobalBackground from '@/components/GlobalBackground.vue'
import NavBar from '@/components/NavBar.vue'
import PageFooter from '@/components/PageFooter.vue'

const usePageTitle = () => {
  const baseTitle = '科學開源服務社'
  const pageTitle = ref(baseTitle)
  const route = useRoute()

  watch(
    () => route.meta.title,
    (newTitle) => {
      pageTitle.value = newTitle ? `${baseTitle}｜${newTitle}` : baseTitle
      document.title = pageTitle.value
    },
    { immediate: true },
  )

  return pageTitle
}

usePageTitle()
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <GlobalBackground />
    <NavBar />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <PageFooter />
  </div>
</template>
