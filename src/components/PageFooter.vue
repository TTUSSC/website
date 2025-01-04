<script setup>
/* import icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook, faInstagram)
</script>

<template>
  <footer class="bg-body-tertiary text-center text-lg-start">
    <div class="container p-5">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">聯絡我們</h5>
          <p>
            10491 台北市中山區中山北路三段 40 號<br>
            Email：ttussc@ms.ttu.edu.tw<br>
          </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">社群媒體</h5>
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">
                <font-awesome-icon :icon="['fab', 'instagram']" />
                @ttussc_
              </a>
            </li>
            <li>
              <a href="#!" class="text-dark">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                @ttussc
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">
                開放文化基金會
              </a>
            </li>
            <li>
              <a href="#!" class="text-dark">
                COSCUP 開源人年會
              </a>
            </li>
            <li>
              <a href="#!" class="text-dark">
                SITCON 學生計算機年會
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center p-3">
      © 2025 TTUSSC
    </div>
  </footer>
</template>