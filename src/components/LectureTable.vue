<script setup>
import { defineProps } from 'vue';

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
    <div class="col-md-12 d-none d-md-block">
      <table class="table">
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
          <tr v-for="lecture in props.tableData" :key="lecture.name">
            <td>{{ lecture.date }}</td>
            <td>{{ lecture.name }}</td>
            <td class="text-nowrap">{{ convertDifficultyToMoon(lecture.difficulty) }}</td>
            <td>{{ lecture.lecturer }}</td>
            <td>{{ lecture.location }}</td>
            <td>
              <span v-for="tag in lecture.tags" :key="tag" class="badge text-bg-light">#{{ tag }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-12 d-md-none">
      <div class="card mb-3" v-for="lecture in props.tableData" :key="lecture.name">
        <div class="card-body">
          <h5 class="card-title">{{ lecture.name }}</h5>
          <div class="card-text fs-6">日期：{{ lecture.date }}</div>
          <div class="card-text fs-6">難度：<span class="text-nowrap">{{ convertDifficultyToMoon(lecture.difficulty)
              }}</span>
          </div>
          <div class="card-text fs-6">講師：{{ lecture.lecturer }}</div>
          <div class="card-text fs-6">地點：{{ lecture.location }}</div>
          <div class="mt-2 card-text">
            <span v-for="tag in lecture.tags" :key="tag" class="badge text-bg-light">#{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>