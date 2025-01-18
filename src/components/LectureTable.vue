<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  year: String,
  tableData: Array
});
</script>

<template>
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
        <td>{{ lecture.difficulty }}</td>
        <td>{{ lecture.lecturer }}</td>
        <td>{{ lecture.location }}</td>
        <td>
          <span v-for="tag in lecture.tags" :key="tag" class="badge text-bg-light">#{{ tag }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>