<script setup>
import { defineProps } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilePowerpoint, faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import { faFileLines, faBook } from '@fortawesome/free-solid-svg-icons';
library.add(faFilePowerpoint, faFileLines, faCircleQuestion, faBook);

const props = defineProps({
  year: String,
  tableData: Array
});

function convertDifficultyToMoon(difficulty) {
  // 確保難度在 0 到 5 之間
  if (difficulty < 0 || difficulty > 5) {
    throw new Error("難度必須在 0 到 5 之間");
  }

  const moonPhases = ['🌑', '🌑', '🌑', '🌑', '🌑']; // 初始化五顆月亮

  // 計算每顆月亮的值
  for (let i = 0; i < 5; i++) {
    if (difficulty >= 1) {
      moonPhases[i] = '🌕'; // 完全的滿月
      difficulty -= 1; // 減去 1
    } else if (difficulty >= 0.75) {
      moonPhases[i] = '🌖'; // 0.75 的月亮
      difficulty -= 0.75; // 減去 0.75
    } else if (difficulty >= 0.5) {
      moonPhases[i] = '🌗'; // 0.5 的月亮
      difficulty -= 0.5; // 減去 0.5
    } else if (difficulty >= 0.25) {
      moonPhases[i] = '🌘'; // 0.25 的月亮
      difficulty -= 0.25; // 減去 0.25
    } else {
      moonPhases[i] = '🌑'; // 0 的月亮
    }
  }

  return moonPhases.join(''); // 返回月亮的字串
}
</script>

<template>
  <div class="row">
    <div class="col-md-12 d-none d-lg-block">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">日期</th>
            <th scope="col">名稱</th>
            <th scope="col">難度</th>
            <th scope="col">講師</th>
            <th scope="col">地點</th>
            <th scope="col">標籤</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="props.tableData.length === 0">
            <td colspan="6" class="text-center">目前沒有課程資料</td>
          </tr>
          <tr v-for="lecture in props.tableData" :key="lecture.name" data-bs-toggle="modal"
            :data-bs-target="'#modal-' + encodeURIComponent(lecture.name)">
            <td>{{ lecture.date }}</td>
            <td>
              {{ lecture.name }}
            </td>
            <td class="text-nowrap">{{ convertDifficultyToMoon(lecture.difficulty) }}</td>
            <td>{{ lecture.lecturer }}</td>
            <td>{{ lecture.location }}</td>
            <td>
              <span v-for="tag in lecture.tags" :key="tag" class="badge text-bg-light me-1">#{{ tag }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 手機板檢視卡片 -->
    <div class="col-12 d-lg-none">
      <div v-if="props.tableData.length === 0" class="card shadow mb-3">
        <div class="card-body text-center">
          目前沒有課程資料
        </div>
      </div>
      
      <div class="card shadow mb-3" v-for="lecture in props.tableData" :key="lecture.name" data-bs-toggle="modal"
        :data-bs-target="'#modal-' + encodeURIComponent(lecture.name)">
        <div class="card-body">
          <h5 class="card-title">{{ lecture.name }}</h5>
          <div class="card-text fs-6">日期：{{ lecture.date }}</div>
          <div class="card-text fs-6">難度：<span class="text-nowrap">{{ convertDifficultyToMoon(lecture.difficulty)
              }}</span></div>
          <div class="card-text fs-6">講師：{{ lecture.lecturer }}</div>
          <div class="card-text fs-6">地點：{{ lecture.location }}</div>
          <div class="mt-2 card-text">
            <span v-for="tag in lecture.tags" :key="tag" class="badge text-bg-light me-1">#{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 跳出視窗 -->
  <div v-for="lecture in props.tableData" :key="'modal-' + encodeURIComponent(lecture.name)" class="modal modal-lg fade"
    :id="'modal-' + encodeURIComponent(lecture.name)" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel"><strong>{{ lecture.name }}</strong></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div><strong>講師：</strong>{{ lecture.lecturer }}</div>
          <div><strong>地點：</strong>{{ lecture.location }}</div>
          <div><strong>時間：</strong>{{ lecture.date }}</div>
          <div class="my-3">
            <a v-if="lecture.slide" :href="lecture.slide" type="button" class="btn btn-warning me-2">
              <font-awesome-icon :icon="['far', 'file-powerpoint']" />
              簡報
            </a>
            <a v-if="lecture.slido" :href="lecture.slido" type="button" class="btn btn-success me-2">
              <font-awesome-icon :icon="['far', 'circle-question']" />
              Slido
            </a>
            <a v-if="lecture.handout" :href="lecture.handout" type="button" class="btn btn-info me-2">
              <font-awesome-icon :icon="['far', 'book']" />
              講義
            </a>
            <a v-if="lecture.note" :href="lecture.note" type="button" class="btn btn-dark me-2">
              <font-awesome-icon :icon="['fas', 'file-lines']" />
              共筆
            </a>
          </div>
          <div v-if="lecture.description">
            <h4 class="mt-4"><strong>活動簡介</strong></h4>
            <p class="mt-2">{{ lecture.description }}</p>
          </div>
          <div v-if="lecture.timeline">
            <h4 class="mt-4"><strong>活動時程</strong></h4>
            <ul class="mt-2 mb-6">
              <li v-for="time in lecture.timeline" :key="time.id">
                {{ time }}
              </li>
            </ul>
          </div>
          <div><strong></strong><span v-for="tag in lecture.tags" :key="tag" class="badge text-bg-light me-1">#{{ tag
              }}</span></div>
        </div>
        <div class="modal-footer">
          <a :href="lecture.kktix">
            <button type="button" :disabled="!lecture.kktix || lecture.kktix.trim() === ''" class="btn btn-success">
              KKTIX 報名
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-hover tbody tr:hover {
  cursor: pointer;
}

.card {
  border: none !important;
  transition: background-color 0.3s ease;
}

.card:hover {
  cursor: pointer;
  background-color: rgba(var(--bs-emphasis-color-rgb), 0.075);
}
</style>