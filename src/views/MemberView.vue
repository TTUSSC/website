<script setup>
import { ref } from 'vue';
import LazyImage from '@/components/LazyImage.vue';

const baseUrl = import.meta.env.BASE_URL;
const trueURL = (url) => {
  return `${baseUrl}${url}`
}

const members = {
  // 第拾貳屆
  '12':[
    {
      image: trueURL("img/member/willy.jpg"),
      name: "游凱崴",
      title: "社長",
      ig: "willyyu.20041019",
      desc: "電機系學生，對於電資相關領域感到興趣，平時喜歡看科技相關的酷東東以及探索各種沒接觸過的東西😆",
      tags: []
    },
    {
      image: "",
      name: "陳柏屹",
      title: "副社長",
      ig: "boyce.chen03",
      desc: "資工系學生，目前在學習如何通靈。",
      tags: []
    },
    {
      image: trueURL("img/member/jerry.jpg"),
      name: "盧佳緯",
      title: "副社長",
      ig: "jerrylu8631",
      desc: "電機系學生，吃貨一枚，有啥想問的也可以問我喔",
      tags: []
    },
    {
      image: trueURL("img/member/fang.jpg"),
      name: "方健宇",
      title: "教學組長",
      ig: "jerry_0804_",
      desc: "資工系的學生，喜歡一個人躲在角落看書。最近在努力學習各種知識，藉此增加資工領域的能力。以前從來沒有想過會走資工，覺得和同學們格格不入，希望大學四年能夠找到好夥伴。",
      tags: []
    },
    {
      image: trueURL("img/member/hyn.jpg"),
      name: "黃郁寧",
      title: "編輯組長",
      ig: "__hhyn.7",
      desc: "資工系學生，也可以叫我芋泥，但我不吃芋泥跟芋頭，特別不能加在火鍋裡面。",
      tags: []
    },
    {
      image: "",
      name: "蔡詠竣",
      title: "資訊組長",
      ig: "speedcubing.top",
      desc: "資工系學生",
      tags: []
    },
    {
      image: "",
      name: "連婉妤",
      title: "設計組長",
      ig: "kt._422",
      desc: "",
      tags: []
    },
    {
      image: trueURL("img/member/star.jpg"),
      name: "張乃文",
      title: "紀錄組長",
      ig: "best_twisted_fate",
      desc: "資工系學生，喜歡睡覺，吃水餃不沾醬油，吃咖哩要拌。",
      tags: []
    },
    {
      image: trueURL("img/member/stanley.jpg"),
      name: "陳威翰",
      title: "財務組長",
      ig: "stanley_1106_",
      desc: "資工系學生，喜歡參加各式各樣的活動，努力學習資安中",
      tags: [
        "貝斯(新)手",
        "社花"
      ]
    },
    {
      image: trueURL("img/member/tty.jpg"),
      name: "曹延宥",
      title: "器材組長",
      ig: "tty_9_28",
      desc: "電機系妹妹，萌萌噠",
      tags: ["社草"]
    },
    {
      image: trueURL("img/member/yuto.jpg"),
      name: "羅崧瑋",
      title: "活動組長",
      ig: "sw_1a4",
      desc: "資工系學生，熱衷於研究網頁前後端、電腦底層技術，目前正努力學習資訊安全。",
      tags: [
        "弓道",
        "網頁前後端",
      ]
    },
    {
      image: trueURL("img/member/allen.jpg"),
      name: "陳彥廷",
      title: "前副社長",
      ig: "maverick_01_freedom",
      desc: "電機系學生，能自己完成的就自己做，不忘初心，盡力就好，一切隨緣....",
      tags: []
    },
  ],
  // 第拾壹屆
  '11':[
    {
      image: trueURL("img/member/yuto.jpg"),
      name: "羅崧瑋",
      title: "社長",
      ig: "sw_1a4",
      desc: "資工系，熱衷於研究網頁前後端、電腦底層技術，目前正努力學習資訊安全。",
      tags: [
        "弓道",
        "網頁前後端",
      ]
    },
    {
      image: trueURL("img/member/tty.jpg"),
      name: "曹莛宥",
      title: "副社長",
      ig: "tty_9_28",
      desc: "電機系",
      tags: [
        "社草",
      ]
    },
    {
      image: trueURL("img/member/stanley.jpg"),
      name: "陳威翰",
      title: "副社長",
      ig: "stanley_1106_",
      desc: "資工系，喜歡參加各式各樣的活動，努力學習資安中",
      tags: [
        "貝斯(新)手",
        "社花"
      ]
    },
    {
      image: trueURL("img/member/xin.jpg"),
      name: "張芯瑜",
      title: "文書組長",
      ig: "xin._1865",
      desc: "電機系",
      tags: [
        "不要害SHIU",
      ]
    },
    {
      image: trueURL("img/member/john.jpg"),
      name: "林靖疆",
      title: "財務組長",
      ig: "jinjohn_lin",
      desc: "電機系",
      tags: []
    },
    {
      image: trueURL("img/member/sam.jpg"),
      name: "陳茂凱",
      title: "器材組長",
      ig: "sam_930704",
      desc: "電機系",
      tags: []
    },
    {
      image: trueURL("img/member/ju.jpg"),
      name: "劉玠佑",
      title: "教學組長",
      ig: "j.u_28_",
      desc: "電機系",
      tags: []
    },
    {
      image: trueURL("img/member/brian.jpg"),
      name: "Brain",
      title: "教學組長",
      ig: "brian_jhan",
      desc: "資經系",
      tags: []
    },
    {
      image: trueURL("img/member/harry.jpg"),
      name: "郭祐亨",
      title: "美宣組長",
      ig: "harry.0108_",
      desc: "工設系",
      tags: []
    },
    {
      image: trueURL("img/member/xiangen.jpg"),
      name: "吳享恩",
      title: "紀錄組長",
      ig: "xiangen7653",
      desc: "工設系",
      tags: []
    }
  ],
  // 第拾屆
  '10':[
    {
      image: trueURL("img/member/timothy.jpg"),
      name: "Timothy ",
      title: "社長",
      ig: "timothy_tzd2819",
      desc: "電機系",
      tags: []
    },
    {
      image: trueURL("img/member/yellow_new.jpg"),
      name: "黃新翰",
      title: "副社長",
      ig: "yellow_new_and",
      desc: "電機系",
      tags: []
    },
    {
      image: trueURL("img/member/zhen.jpg"),
      name: "王苡禎 ",
      title: "文書",
      ig: "91_12_19",
      desc: "電機系",
      tags: []
    },
  ],
};

const years = [
  { name: '第拾貳屆', value: '12' },
  { name: '第拾壹屆', value: '11' },
  { name: '第拾屆', value: '10' },
];

const selectedYear = ref(years[0]);

function handleSelectYear(year) {
  selectedYear.value = year;
}
</script>

<template>
  <div class="row mx-1 my-5">
    <div class="col-md-8 mx-auto">
      <h1 class="mb-4">社團成員</h1>
      <p>
        科學開源服務社的成員來自各個不同的科系，包括電機系、資工系、工設系等。每個人都帶著獨特的專長和興趣，共同為推廣開源文化而努力。我們相信，透過開源精神的交流與分享，能夠創造更多的可能性。
      </p>
    </div>
  </div>

  <div class="row mb-5">
    <!-- 左側選單 -->
    <div class="col p-2">
      <div class="my-2">
        歷屆成員
      </div>
      <ul class="nav flex-column nav-pills">
        <li class="nav-item mb-1" v-for="year in years" :key="year.value">
          <a class="nav-link" :class="{ active: selectedYear.value === year.value }" href="#"
            @click.prevent="handleSelectYear(year)">
            {{ year.name }}
          </a>
        </li>
      </ul>
    </div>

    <!-- 右側成員卡片 -->
    <div class="col-lg-10">
      <h3>{{ selectedYear.name }}</h3>
      <div class="row">
        <div class="col-sm-12 col-md-6 mb-3" v-for="member in members[selectedYear.value]" :key="member.name">
          <div class="card h-100">
            <div class="card-body">
              <!-- 大頭貼 + 姓名 + 職稱 + IG -->
              <div class="d-flex mb-3">
                <!-- 左側大頭貼 -->
                <div class="me-3">
                  <div style="width: 100px; height: 100px; border-radius: 4px; overflow: hidden; position: relative;">
                    <LazyImage
                      v-if="member.image != ''"
                      :src="member.image"
                      alt=""
                      fit="cover"
                      width="100%"
                      height="100%"
                    />
                    <LazyImage
                      v-else
                      :src="trueURL('img/peek.png')"
                      alt=""
                      fit="cover"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>

                <!-- 右側內容 -->
                <div class="flex-grow-1 mt-auto">
                  <h5 class="card-title">{{ member.name }} <small class="text-body-secondary">{{ member.title }}</small>
                  </h5>
                  <h6 class="card-subtitle mb-2">
                    <a :href="'https://www.instagram.com/' + member.ig" class="text-body-secondary" target="_blank">
                      @{{ member.ig }}
                    </a>
                  </h6>
                </div>
              </div>
              <p class="card-text" v-if="member.desc != ''">{{ member.desc }}</p>
              <div class="mt-auto">
                <span v-for="tag in member.tags" :key="tag" class="badge bg-light text-dark me-1">#{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none !important;
  box-shadow: var(--bs-box-shadow-sm);
  transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
}

.card:hover {
  cursor: pointer;
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06) !important;
}
</style>
