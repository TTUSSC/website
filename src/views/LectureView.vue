<script setup>
import LectureTable from '@/components/LectureTable.vue';
import { ref } from 'vue';

const years = [
  { name: '113 上學期', value: '2024-fall' },
  { name: '112 下學期', value: '2024-spring' },
  { name: '112 上學期', value: '2023-fall' },
  { name: '111 下學期', value: '2023-spring' },
  { name: '111 上學期', value: '2022-fall' },
];

const lectureData = {
  '2024-fall': [
    {
      date: "9/12",
      name: "開源茶會",
      difficulty: '🌑🌑🌑🌑🌑', // 預設難度
      lecturer: "威力",
      location: "A3-307",
      tags: ["開源", "迎新"],
    },
    {
      date: "9/19",
      name: "開源新手村",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "威力",
      location: "A3-200",
      tags: ["開源"],
    },
    {
      date: "9/26",
      name: "0 到 1 的社群協作守則",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "小方",
      location: "A3-200",
      tags: ["HackMD", "Markdown", "協作"],
    },
    {
      date: "10/3",
      name: "怕麻煩的話，就 Shell 出你的指令吧",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "芋泥",
      location: "A3-200",
      tags: ["Linux", "Shell"],
    },
    {
      date: "10/7",
      name: "Re：從 C 開始的大學生活（上）",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "阿文",
      location: "A3-200",
      tags: ["C", "程式設計"],
    },
    {
      date: "10/17",
      name: "Re：從 C 開始的大學生活（下）",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "阿文",
      location: "A3-200",
      tags: ["C", "程式設計"],
    },
    {
      date: "10/21",
      name: "考前讀書會",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "威力",
      location: "A3 8F 樂學空間",
      tags: ["工作坊", "讀書"],
    },
    {
      date: "11/4",
      name: "Email(工作坊)",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "神秘講者",
      location: "待定",
      tags: ["工作坊", "Email"],
    },
    {
      date: "11/7",
      name: "Arduino 微處理器入門",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Allen",
      location: "A3-200",
      tags: ["Arduino"],
    },
    {
      date: "11/14",
      name: "無用盒專題實作",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "呆呆",
      location: "A3-200",
      tags: ["Arduino", "創客"],
    },
    {
      date: "11/21",
      name: "Arduino RFID 實戰",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Allen",
      location: "A3-200",
      tags: ["Arduino", "創客"],
    },
    {
      date: "11/28",
      name: "作業系統生存指南",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "小方",
      location: "A3-200",
      tags: ["OS", "Linux"],
    },
    {
      date: "12/5",
      name: "想學黑魔法嗎？我告訴你有哪些技能",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-307",
      tags: ["資訊安全"],
    },
    {
      date: "12/12",
      name: "聖誕企氛，來交換禮物吧！",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "威力",
      location: "A3-307",
      tags: ["交換禮物"],
    },
    {
      date: "12/14",
      name: "愛奇兒營隊",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "無",
      location: "待定",
      tags: ["服務", "營隊"],
    },
    {
      date: "12/16",
      name: "考前讀書會",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "威力",
      location: "A3 8F 樂學空間",
      tags: ["工作坊", "讀書"],
    },
  ],
  '2024-spring': [
    {
      date: "2/29",
      name: "新學期啟航！回顧及展望",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A3-307",
      tags: ["期初大會"]
    },
    {
      date: "3/7",
      name: "來從開源一路細說到FOSDEM去",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: ["開源文化"]
    },
    {
      date: "3/9",
      name: "SITCON 學生計算機年會",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "無",
      location: "中研院",
      tags: ["SITCON"]
    },
    {
      date: "3/14",
      name: "古老卻強大的編譯器-Vim",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: ["vim", "shell"]
    },
    {
      date: "3/16",
      name: "天使心志工活動",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "無",
      location: "台北市立木柵動物園",
      tags: ["服務"]
    },
    {
      date: "3/21",
      name: "想要擁有自己的網站嗎？boostrap帶你上手",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "張哲嘉",
      location: "A3-200",
      tags: ["網頁前端", "Bootstrap"]
    },
    {
      date: "3/28",
      name: "vue出新世界",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "張哲嘉",
      location: "A3-200",
      tags: ["網頁前端"]
    },
    {
      date: "4/13",
      name: "開源工具大補帖",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A3 8F 樂學空間",
      tags: ["Linux", "Markdown"]
    },
    {
      date: "4/15",
      name: "Denny學長的Git教學（上）",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Denny",
      location: "A3-200",
      tags: ["Git", "多人協作"]
    },
    {
      date: "4/22",
      name: "Denny學長的Git教學（下）",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Denny",
      location: "A3-200",
      tags: ["Git", "多人協作"]
    },
    {
      date: "5/2",
      name: "從C語言快速上手Python的基礎實戰",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["Python"]
    },
    {
      date: "5/9",
      name: "從Python爬蟲認識網路世界",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["Python", "網路爬蟲"]
    },
    {
      date: "5/16",
      name: "Jerry 的 HEXO 分享",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "小方",
      location: "A3-200",
      tags: ["GitHub", "HEXO"]
    },
    {
      date: "5/23",
      name: "社團總結&交接",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "張芯瑜",
      location: "A3-307",
      tags: ["期末派對"]
    }
  ],
  '2023-fall': [
    {
      date: "9/18",
      name: "期初迎新",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A3-102",
      tags: ["迎新"]
    },
    {
      date: "9/25",
      name: "開源是什麼?蛤?雞排?",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["開源文化"]
    },
    {
      date: "10/2",
      name: "轉生開源世界無意間竟獲得了最強武器是否搞錯了社麼",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["開源", "HackMD"]
    },
    {
      date: "10/9",
      name: "怕麻煩的我，把Shell學好就對了!",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Stanley",
      location: "A3-200",
      tags: ["OS", "Linux"]
    },
    {
      date: "10/16",
      name: "從printf()開始的扣頂生活",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["C", "程式設計"]
    },
    {
      date: "11/6",
      name: "關於我用迴圈旋轉自己的那檔事",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["C", "程式設計"]
    },
    {
      date: "11/13",
      name: "Useless Box 實作1",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "吳享恩",
      location: "A3-200",
      tags: ["設計", "創客"]
    },
    {
      date: "11/20",
      name: "Useless box 實作2",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "吳享恩",
      location: "A3-200",
      tags: ["設計", "創客"]
    },
    {
      date: "11/27",
      name: "Arrr我要du到你說no",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "劉玠祐",
      location: "A3-200",
      tags: ["Arduino", "創客"]
    },
    {
      date: "12/4",
      name: "想學黑魔法嗎？我告訴你有哪些技能",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-307",
      tags: ["資訊安全"]
    },
    {
      date: "12/11",
      name: "來給開源企鵝仔加頂聖誕帽吧！！",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "張芯瑜",
      location: "A3-307",
      tags: ["交換禮物"]
    },
  ],
  '2023-spring': [
    {
      date: "2/20",
      name: "時間回復！讓我們聊聊過去、現在與未來",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-307",
      tags: []
    },
    {
      date: "3/06",
      name: "做孩子的啦啦隊",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "幼竹老師",
      location: "A3-307",
      tags: []
    },
    {
      date: "3/13",
      name: "一起來做個tldr，畢竟我們可是要教小學生呢！（水火箭）",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-202",
      tags: []
    },
    {
      date: "3/20",
      name: "打扣必備的版本控管工具，讓你從入門到放棄-Git教學",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A5-807",
      tags: []
    },
    {
      date: "3/27",
      name: "淺談分支概念與Github實戰-Git教學（二）",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Yuto",
      location: "A5-807",
      tags: []
    },
    {
      date: "4/17",
      name: "做自己的夢，Just Do IT! ",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "劉辰盈",
      location: "A3-307",
      tags: []
    },
    {
      date: "4/24",
      name: "有FB有IG，為什麼要有自己的網站? 談談架站的好處是什麼",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/01",
      name: "聊了那麼久的OS，讓我們來架一個安全的Ubuntu！",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/08",
      name: "腳把腳教你架自己的部落格 - WordPress",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/15",
      name: "Nginx反向代理 - 資安是什麼? 能喝嗎?",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/22",
      name: "想學黑魔法嗎？我告訴你有哪些技能",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A5-807",
      tags: []
    },
    {
      date: "05/29",
      name: "社團總結",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-307",
      tags: []
    },
  ],
  '2022-fall': [
    {
      date: "9/12",
      name: "期初大會（迎新）",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-102",
      tags: []
    },
    {
      date: "9/19",
      name: "大開源時代！所以開源是什麼？聽起來很好吃？",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "10/03",
      name: "HackMD 開啟凡人的開源之路（Markdown語法）",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "10/17",
      name: "誰說這是個無聊的社團？讓我們一起說笑話聊開源OwO",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/07",
      name: "讓我們來認識『林姓商人』Linux！各種OS的形狀",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/14",
      name: "手把手帶你學會使用Shell！讓你成為專業的電腦用戶",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/21",
      name: "古老卻強大的編輯器『Vim』",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/28",
      name: "滿天飛的程式課程？！那我們到底要這麼多東西幹嘛？",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "12/05",
      name: "拯救你的Ｃ語言教學（一）",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "12/12",
      name: "拯救你的Ｃ語言教學（二）",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "12/19",
      name: "期末大會+『左邊一點Shell、右邊一點C…哇！變成惡意軟體了…』",
      difficulty: '🌑🌑🌑🌑🌑',
      lecturer: "Timothy",
      location: "A3-307",
      tags: []
    }
  ],
};

const selectedYear = ref(years[0]);

function handleSelectYear(year) {
  selectedYear.value = year;
}
</script>

<template>
  <div class="row mx-1 my-5">
    <div class="col-md-8 mx-auto">
      <h1 class="mb-4">Lecture</h1>
      <p>
        在科學開源服務社的社課中，我們為社員提供多元且富挑戰性的學習體驗。為了方便大家選擇感興趣的活動，課程難度從🌑🌑🌑🌑🌑到🌕🌕🌕🌕🌕一共分為六個等級：
      </p>

      <ul>
        <li>🌑🌑🌑🌑🌑：一般性質活動，任何人都可以一同參與。</li>
        <li>🌕🌑🌑🌑🌑：非常簡單，適合完全新手，無需任何背景知識。</li>
        <li>🌕🌕🌑🌑🌑：簡單，需具備基本概念或基礎能力。</li>
        <li>🌕🌕🌕🌑🌑：中等，內容稍具挑戰性，適合已有相關經驗的人。</li>
        <li>🌕🌕🌕🌕🌑：困難，需要較多背景知識或具備一定專業技能。</li>
        <li>🌕🌕🌕🌕🌕：非常困難，適合高水準的學習者或專業人士。</li>
      </ul>

      <p>
        我們的社課適合各種學習者，內容包括基礎技能教學，如程式語言與軟體使用，實作課程，如網頁開發與機器學習，還有輕鬆類活動如社交與讀書會，讓大家在輕鬆愉快的氛圍中學習與成長。更邀請業界專家分享最新資訊與實戰經驗，拓展視野。無論你是初學者還是資深學習者，這裡都有適合你的課程，帶你一探開源世界的無限可能！
      </p>
    </div>
  </div>
  <div class="row mb-5">
    <div class="col p-2">
      <div class="my-2">
        歷年課表
      </div>
      <ul class="nav flex-column nav-pills">
        <li class="nav-item" v-for="year in years" :key="year.value">
          <a class="nav-link" :class="{ active: selectedYear === year }" href="#"
            @click.prevent="handleSelectYear(year)">
            {{ year.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="col-md-10">
      <h3>{{ selectedYear.name }}</h3>
      <LectureTable :year="selectedYear.value" :table-data="lectureData[selectedYear.value]" />
    </div>
  </div>
</template>