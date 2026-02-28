<template>
  <div class="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
    <!-- Moving Dot Grid Backdrop (Now global and full screen) -->
    <div class="dot-grid animate-drift absolute inset-0 opacity-25"></div>

    <!-- Interactive Mouse Spotlight Blob -->
    <div
      class="spotlight hidden md:block"
      :style="{
        left: spotlightX + 'px',
        top: spotlightY + 'px',
        opacity: isMouseMoving ? 0.25 : 0,
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const spotlightX = ref(window.innerWidth / 2)
const spotlightY = ref(window.innerHeight / 2)
const isMouseMoving = ref(false)

let hideTimeout = null

const handleMouseMove = (e) => {
  isMouseMoving.value = true
  spotlightX.value = e.clientX
  spotlightY.value = e.clientY

  // Fade out if mouse stops moving for a while
  clearTimeout(hideTimeout)
  hideTimeout = setTimeout(() => {
    isMouseMoving.value = false
  }, 2000)
}

const handleMouseLeave = () => {
  isMouseMoving.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseleave', handleMouseLeave)
  clearTimeout(hideTimeout)
})
</script>

<style scoped>
/* Scoped specific adjustments if needed */
.spotlight {
  position: absolute;
  /* Slightly larger and more vibrant background than before to make it pop */
  width: 800px;
  height: 800px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle at center, rgba(107, 166, 227, 0.5) 0%, transparent 60%);
  filter: blur(100px);
  will-change: transform, left, top;
  transform: translate(-50%, -50%);
  /* Smoothly catch up to the mouse position (CSS interpolation) */
  transition:
    opacity 0.8s ease,
    left 0.4s ease-out,
    top 0.4s ease-out;
}
</style>
