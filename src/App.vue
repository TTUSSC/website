<script setup>
import { RouterView } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <NavBar />

  <div class="container-xl mt-4">
    <RouterView />
  </div>
  <PageFooter />
</template>

<style scoped></style>
