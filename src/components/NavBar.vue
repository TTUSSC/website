<script setup>
import { RouterLink } from 'vue-router'

/* import icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
library.add(faMugSaucer, faDiscord)
</script>

<template>
  <header class="navbar navbar-expand-md bg-body-tertiary sticky-top shadow">
    <nav class="container-xl flex-wrap flex-lg-nowrap">
      <RouterLink class="nav-link me-2" to="/"><img src="/logo.png" height="24" alt="">TTUSSC </RouterLink><button
        class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>
      <!-- 收縮區塊 -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">關於</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/member">社團成員</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/lecture">社課</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/project">專案</RouterLink>
          </li>
        </ul>
        <!-- 靠右導覽按鈕 -->
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">
              <a class="btn btn-outline-primary icon-link icon-link-hover" href="https://discord.com/invite/29PsKfe45h">
                <font-awesome-icon :icon="['fab', 'discord']" />
                Discord
              </a>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">
              <a class="btn btn-outline-success icon-link icon-link-hover" href="https://buymeacoffee.com/ttussc">
                <font-awesome-icon :icon="['fas', 'mug-saucer']" />
                贊助我們
              </a>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
