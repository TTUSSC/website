<script setup>
</script>

<template>
  <div class="row my-5">
    <div class="col-md-10 col-lg-8 mx-auto">
      <h1 class="mb-4">Project</h1>

      <div class="card shadow mb-3">
        <div class="card-body">
          <h3 class="card-title mb-2">紙上的電腦科學營</h3>
          <p class="card-text">透過數個學習單活動，帶領小朋友探索電腦科學的知識。</p>
        </div>
      </div>

      <div class="card shadow mb-3">
        <div class="card-body">
          <h3 class="card-title mb-2">電資創客營</h3>
          <p class="card-text">學習基本電學與程式邏輯，帶小朋友完成無用盒小專題。</p>
        </div>
      </div>

      <div class="card shadow mb-3">
        <div class="card-body">
          <h3 class="card-title mb-2">科學探索家</h3>
          <p class="card-text">利用簡單的物理知識，帶小朋友動手做出水火箭。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none !important;
  transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
}

.card:hover {
  cursor: pointer;
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);
}
</style>