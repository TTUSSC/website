<script setup>
import { ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
import PageFooter from './components/PageFooter.vue';

const usePageTitle = () => {
  const baseTitle = '科學開源服務社';
  const pageTitle = ref(baseTitle);

  const route = useRoute();

  watch(
    () => route.meta.title,
    (newTitle) => {
      pageTitle.value = newTitle ? `${baseTitle}｜${newTitle}` : baseTitle
      document.title = pageTitle.value
    },
    { immediate: true }
  );

  return pageTitle;
}

usePageTitle();
</script>

<template>
  <NavBar />

  <div class="container-xl mt-4">
    <RouterView />
  </div>
  <PageFooter />
</template>

<style scoped></style>
