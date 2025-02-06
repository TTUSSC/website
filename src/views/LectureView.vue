<script setup>
import LectureTable from '@/components/LectureTable.vue';
import { ref } from 'vue';

const years = [
  { name: '113 下學期', value: '2025-spring' },
  { name: '113 上學期', value: '2024-fall' },
  { name: '112 下學期', value: '2024-spring' },
  { name: '112 上學期', value: '2023-fall' },
  { name: '111 下學期', value: '2023-spring' },
  { name: '111 上學期', value: '2022-fall' },
];

const lectureData = {
  '2025-spring': [
    // {
    //   date: "",
    //   name: "",
    //   difficulty: 0.0,
    //   lecturer: "",
    //   location: "A3-200",
    //   tags: [],
    //   description: "",
    //   timeline: [
    //     "17:30~18:00 場地佈置、進場",
    //     "19:50~20:00 填寫問卷、收拾場地"
    //   ],
    //   slide: "",
    //   slido: "",
    //   handout: "",
    //   note: "",
    //   kktix: "",
    // },
  ],
  '2024-fall': [
    {
      date: "9/12",
      name: "開源茶會",
      difficulty: 0.0,
      lecturer: "威力",
      location: "A3-307",
      tags: ["開源", "迎新"],
      description: "隨著新學期的到來，許多新生已經加入了大同大學這個大家庭，相信大家都迫不及待想要探索和加入感興趣的社團。我們透過舉辦這次茶會，介紹科學開源服務社，幫助你深入了解我們的社團活動和宗旨，並希望你能成為我們大家庭的一員，共同揮灑青春！",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:30 介紹科學開源服務社",
        "18:30~18:40 各組別與幹部介紹",
        "18:40~19:10 交流與享用茶點",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQPFwQnzs/qrJPlJwbXhDrviK7GhcaIg/view?utm_content=DAGQPFwQnzs&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/aB84ftRiHDJBgi6CYpcQ31",
      handout: "",
      note: "https://hackmd.io/@ttussc/SJp-rjlnA",
      kktix: "https://ttussc.kktix.cc/events/teaparty2024",
    },
    {
      date: "9/19",
      name: "開源新手村",
      difficulty: 0.0,
      lecturer: "威力",
      location: "A3-200",
      tags: ["開源"],
      description: "在這堂課中，我們將探索開源的核心理念及其對現代科技的影響。課程將介紹開源軟體的基本原則和價值，透過實例展示如何促進創新、協作與學習。我們將討論開源專案對科學研究、軟體開發的影響，並透過 Kahoot！遊戲加深理解。歡迎對開源文化感興趣的同學一同參與！期待能夠凝聚社團的向心力，激勵每位社員積極參與社團活動。",
      timeline: [
        "17:30~18:00：場地佈置、進場",
        "18:00~19:30：介紹開源的基本概念與重要性",
        "19:30~19:50：Kahoot！時間",
        "19:50~20:00：填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "9/26",
      name: "0 到 1 的社群協作守則",
      difficulty: 0.0,
      lecturer: "小方",
      location: "A3-200",
      tags: ["HackMD", "Markdown", "協作"],
      description: "MarkDown 廣泛的被使用於各大開源社群，從開發間的溝通到產品的文件，處處都有 Mark Down 的蹤影。Mark Down 除了可以快速地排版文章外，搭配 HackMD 可以變成方便的筆記工具。這次會帶大家認識 Mark Down 的撰寫方式，以及如何共筆協作。以此為媒介帶領大家入門開源的世界。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹，介紹共筆文化，與為甚麼要寫共筆 (本次社課將會開一篇共筆，將為所有社員今天的筆記，編輯最多內容的社員將得到講師的小禮物喔)",
        "18:10~18:30 介紹 Mark Down 的撰寫方式",
        "18:30~18:40 實際操作練習",
        "18:40~19:10 分享與討論",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "10/3",
      name: "怕麻煩的話，就 Shell 出你的指令吧",
      difficulty: 0.0,
      lecturer: "芋泥",
      location: "A3-200",
      tags: ["Linux", "Shell"],
      description: "Shell 是 Linux 系統中的命令行解釋器，掌握 Shell 指令可以大大提高工作效率。這次社課將帶領大家認識 Shell 的基本概念和常用指令，並透過實際操作練習，讓大家能夠熟練運用 Shell 來管理系統和執行各種任務。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹",
        "18:10~18:30 介紹 Shell 的基本概念",
        "18:30~18:40 實際操作練習",
        "18:40~19:10 分享與討論",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "10/7",
      name: "Re：從 C 開始的大學生活（上）",
      difficulty: 0.0,
      lecturer: "阿文",
      location: "A3-200",
      tags: ["C", "程式設計"],
      description: "C 語言是程式設計的基礎，掌握 C 語言可以為學習其他程式語言打下堅實的基礎。這次社課將帶領大家認識 C 語言的基本概念和語法，並透過實際操作練習，讓大家能夠熟練運用 C 語言來開發程式。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹",
        "18:10~18:30 介紹 C 語言的基本概念",
        "18:30~18:40 實際操作練習",
        "18:40~19:10 分享與討論",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "10/17",
      name: "Re：從 C 開始的大學生活（下）",
      difficulty: 0.0,
      lecturer: "阿文",
      location: "A3-200",
      tags: ["C", "程式設計"],
      description: "C 語言是程式設計的基礎，掌握 C 語言可以為學習其他程式語言打下堅實的基礎。這次社課將帶領大家認識 C 語言的基本概念和語法，並透過實際操作練習，讓大家能夠熟練運用 C 語言來開發程式。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹",
        "18:10~18:30 介紹 C 語言的基本概念",
        "18:30~18:40 實際操作練習",
        "18:40~19:10 分享與討論",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "10/21",
      name: "考前讀書會",
      difficulty: 0.0,
      lecturer: "威力",
      location: "A3 8F 樂學空間",
      tags: ["工作坊", "讀書"],
      description: "以往學校大考前，社團活動會暫停一次，讓社團的夥伴們專心準備大考。此次與以往不同，希望聚集社團的大家一起召開讀書會，共同為了學校大考而努力。同學與同學之間可以互相照應外，學長姐也可以協助學弟妹考試準備的方向。",
      timeline: [
        "18:00~18:30 入座準備",
        "18:30~20:50 準備考試內容",
        "20:50~21:00 填寫回饋表單",
      ],
      slide: "",
      slido: "",
      handout: "",
      note: "",
      kktix: "",
    },
    {
      date: "11/4",
      name: "Email(工作坊)",
      difficulty: 0.0,
      lecturer: "神秘講者",
      location: "待定",
      tags: ["工作坊", "Email"],
      description: "Email 是現代人與人溝通的重要工具，掌握 Email 的使用可以大大提高工作效率。這次社課將帶領大家認識 Email 的基本概念和使用方法，並透過實際操作練習，讓大家能夠熟練運用 Email 來與人溝通和協作。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹",
        "18:10~18:30 介紹 Email 的基本概念",
        "18:30~18:40 實際操作練習",
        "18:40~19:10 分享與討論",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "11/7",
      name: "Arduino 微處理器入門",
      difficulty: 0.0,
      lecturer: "Allen",
      location: "A3-200",
      tags: ["Arduino"],
      description: "Arduino 是開源硬體平台，掌握 Arduino 的使用可以為學習其他硬體平台打下堅實的基礎。這次社課將帶領大家認識 Arduino 的基本概念和使用方法，並透過實際操作練習，讓大家能夠熟練運用 Arduino 來開發各種應用。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹",
        "18:10~18:30 介紹 Arduino 的基本概念",
        "18:30~18:40 實際操作練習",
        "18:40~19:10 分享與討論",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "11/14",
      name: "無用盒專題實作",
      difficulty: 0.0,
      lecturer: "呆呆",
      location: "A3-200",
      tags: ["Arduino", "創客"],
      description: "無用盒專題實作是科學開源服務社的特色活動之一，透過實際操作來學習和應用開源軟體和硬體的知識。這次社課將帶領大家認識無用盒專題實作的背景和目的，並透過實際操作練習，讓大家能夠熟練運用開源軟體和硬體來開發各種應用。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹",
        "18:10~18:30 介紹無用盒專題實作的背景和目的",
        "18:30~18:40 實際操作練習",
        "18:40~19:10 分享與討論",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "11/21",
      name: "Arduino RFID 實戰",
      difficulty: 0.0,
      lecturer: "Allen",
      location: "A3-200",
      tags: ["Arduino", "創客"],
      description: "Arduino RFID 實戰是科學開源服務社的特色活動之一，透過實際操作來學習和應用開源軟體和硬體的知識。這次社課將帶領大家認識 Arduino RFID 實戰的背景和目的，並透過實際操作練習，讓大家能夠熟練運用開源軟體和硬體來開發各種應用。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹",
        "18:10~18:30 介紹 Arduino RFID 實戰的背景和目的",
        "18:30~18:40 實際操作練習",
        "18:40~19:10 分享與討論",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "11/28",
      name: "作業系統生存指南",
      difficulty: 0.0,
      lecturer: "小方",
      location: "A3-200",
      tags: ["OS", "Linux"],
      description: "作業系統是電腦運作的核心，掌握作業系統的使用可以大大提高工作效率。這次社課將帶領大家認識作業系統的基本概念和使用方法，並透過實際操作練習，讓大家能夠熟練運用作業系統來管理電腦和執行各種任務。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹",
        "18:10~18:30 介紹作業系統的基本概念",
        "18:30~18:40 實際操作練習",
        "18:40~19:10 分享與討論",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "12/5",
      name: "想學黑魔法嗎？我告訴你有哪些技能",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-307",
      tags: ["資訊安全"],
      description: "資訊安全是現代人與人溝通的重要工具，掌握資訊安全可以大大提高工作效率。這次社課將帶領大家認識資訊安全的基本概念和使用方法，並透過實際操作練習，讓大家能夠熟練運用資訊安全來保護電腦和資料。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹",
        "18:10~18:30 介紹資訊安全的基本概念",
        "18:30~18:40 實際操作練習",
        "18:40~19:10 分享與討論",
        "19:10~19:50 桌遊團康活動",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "https://www.canva.com/design/DAGQ5_ONUM4/8bSIXCfQ4ihhEAWvy0Aobg/view?utm_content=DAGQ5_ONUM4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      slido: "https://app.sli.do/event/3x9JxEntqCz1dXFiZ8KvzB",
      handout: "",
      note: "https://hackmd.io/@ttussc/Bk8ycCF30",
      kktix: "https://ttussc.kktix.cc/events/opensrc113",
    },
    {
      date: "12/12",
      name: "聖誕企氛，來交換禮物吧！",
      difficulty: 0.0,
      lecturer: "威力",
      location: "A3-307",
      tags: ["交換禮物"],
      description: "親愛的社員們，快來參加我們的期末大會暨聖誕派對吧！我們將回顧本學期的精彩瞬間，並在節日氛圍中展開聖誕交換禮物活動，帶來驚喜和歡樂。不僅如此，還有豐富的輕食和飲料等你來享用。這是一場學期總結和節日慶祝的完美結合，別錯過與大家一起歡慶的機會！",
      timeline: [
        "17:30~18:00 場地佈置與進場",
        "18:00~18:50 社團回顧與成果展示",
        "18:50~19:40 聖誕派對",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "",
      slido: "https://app.sli.do/event/uknkv6KpkicyQe4ai1Lwhv",
      handout: "",
      note: "https://hackmd.io/@ttussc/HyeSjRtnA",
      kktix: "https://ttussc.kktix.cc/events/afterparty113",
    },
    {
      date: "12/14",
      name: "愛奇兒營隊",
      difficulty: 0.0,
      lecturer: "無",
      location: "待定",
      tags: ["服務", "營隊"],
      description: "",
      timeline: [],
      slide: "",
      slido: "",
      handout: "",
      note: "",
      kktix: "",
    },
    {
      date: "12/16",
      name: "考前讀書會",
      difficulty: 0.0,
      lecturer: "威力",
      location: "A3 8F 樂學空間",
      tags: ["工作坊", "讀書"],
      description: "以往學校大考前，社團活動會暫停一次，讓社團的夥伴們專心準備大考。此次與以往不同，希望聚集社團的大家一起召開讀書會，共同為了學校大考而努力。同學與同學之間可以互相照應外，學長姐也可以協助學弟妹考試準備的方向。",
      timeline: [
        "18:00~18:30 入座準備",
        "18:30~20:50 準備考試內容",
        "20:50~21:00 填寫回饋表單",
      ],
      slide: "",
      slido: "",
      handout: "",
      note: "",
      kktix: "",
    },
  ],
  '2024-spring': [
    {
      date: "2/29",
      name: "新學期啟航！回顧及展望",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A3-307",
      tags: ["期初大會"]
    },
    {
      date: "3/7",
      name: "來從開源一路細說到FOSDEM去",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: ["開源文化"]
    },
    {
      date: "3/9",
      name: "SITCON 學生計算機年會",
      difficulty: 0.0,
      lecturer: "無",
      location: "中研院",
      tags: ["SITCON"]
    },
    {
      date: "3/14",
      name: "古老卻強大的編譯器-Vim",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: ["vim", "shell"]
    },
    {
      date: "3/16",
      name: "天使心志工活動",
      difficulty: 0.0,
      lecturer: "無",
      location: "台北市立木柵動物園",
      tags: ["服務"]
    },
    {
      date: "3/21",
      name: "想要擁有自己的網站嗎？boostrap帶你上手",
      difficulty: 0.0,
      lecturer: "張哲嘉",
      location: "A3-200",
      tags: ["網頁前端", "Bootstrap"]
    },
    {
      date: "3/28",
      name: "vue出新世界",
      difficulty: 0.0,
      lecturer: "張哲嘉",
      location: "A3-200",
      tags: ["網頁前端"]
    },
    {
      date: "4/13",
      name: "開源工具大補帖",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A3 8F 樂學空間",
      tags: ["Linux", "Markdown"]
    },
    {
      date: "4/15",
      name: "Denny學長的Git教學（上）",
      difficulty: 0.0,
      lecturer: "Denny",
      location: "A3-200",
      tags: ["Git", "多人協作"]
    },
    {
      date: "4/22",
      name: "Denny學長的Git教學（下）",
      difficulty: 0.0,
      lecturer: "Denny",
      location: "A3-200",
      tags: ["Git", "多人協作"]
    },
    {
      date: "5/2",
      name: "從C語言快速上手Python的基礎實戰",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["Python"]
    },
    {
      date: "5/9",
      name: "從Python爬蟲認識網路世界",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["Python", "網路爬蟲"]
    },
    {
      date: "5/16",
      name: "Jerry 的 HEXO 分享",
      difficulty: 0.0,
      lecturer: "小方",
      location: "A3-200",
      tags: ["GitHub", "HEXO"]
    },
    {
      date: "5/23",
      name: "社團總結&交接",
      difficulty: 0.0,
      lecturer: "張芯瑜",
      location: "A3-307",
      tags: ["期末派對"]
    }
  ],
  '2023-fall': [
    {
      date: "9/18",
      name: "期初迎新",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A3-102",
      tags: ["迎新"]
    },
    {
      date: "9/25",
      name: "開源是什麼?蛤?雞排?",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["開源文化"]
    },
    {
      date: "10/2",
      name: "轉生開源世界無意間竟獲得了最強武器是否搞錯了社麼",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["開源", "HackMD"]
    },
    {
      date: "10/9",
      name: "怕麻煩的我，把Shell學好就對了!",
      difficulty: 0.0,
      lecturer: "Stanley",
      location: "A3-200",
      tags: ["OS", "Linux"]
    },
    {
      date: "10/16",
      name: "從printf()開始的扣頂生活",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["C", "程式設計"]
    },
    {
      date: "11/6",
      name: "關於我用迴圈旋轉自己的那檔事",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["C", "程式設計"]
    },
    {
      date: "11/13",
      name: "Useless Box 實作1",
      difficulty: 0.0,
      lecturer: "吳享恩",
      location: "A3-200",
      tags: ["設計", "創客"]
    },
    {
      date: "11/20",
      name: "Useless box 實作2",
      difficulty: 0.0,
      lecturer: "吳享恩",
      location: "A3-200",
      tags: ["設計", "創客"]
    },
    {
      date: "11/27",
      name: "Arrr我要du到你說no",
      difficulty: 0.0,
      lecturer: "劉玠祐",
      location: "A3-200",
      tags: ["Arduino", "創客"]
    },
    {
      date: "12/4",
      name: "想學黑魔法嗎？我告訴你有哪些技能",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-307",
      tags: ["資訊安全"]
    },
    {
      date: "12/11",
      name: "來給開源企鵝仔加頂聖誕帽吧！！",
      difficulty: 0.0,
      lecturer: "張芯瑜",
      location: "A3-307",
      tags: ["交換禮物"]
    },
  ],
  '2023-spring': [
    {
      date: "2/20",
      name: "時間回復！讓我們聊聊過去、現在與未來",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-307",
      tags: []
    },
    {
      date: "3/06",
      name: "做孩子的啦啦隊",
      difficulty: 0.0,
      lecturer: "幼竹老師",
      location: "A3-307",
      tags: []
    },
    {
      date: "3/13",
      name: "一起來做個tldr，畢竟我們可是要教小學生呢！（水火箭）",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-202",
      tags: []
    },
    {
      date: "3/20",
      name: "打扣必備的版本控管工具，讓你從入門到放棄-Git教學",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A5-807",
      tags: []
    },
    {
      date: "3/27",
      name: "淺談分支概念與Github實戰-Git教學（二）",
      difficulty: 0.0,
      lecturer: "Yuto",
      location: "A5-807",
      tags: []
    },
    {
      date: "4/17",
      name: "做自己的夢，Just Do IT! ",
      difficulty: 0.0,
      lecturer: "劉辰盈",
      location: "A3-307",
      tags: []
    },
    {
      date: "4/24",
      name: "有FB有IG，為什麼要有自己的網站? 談談架站的好處是什麼",
      difficulty: 0.0,
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/01",
      name: "聊了那麼久的OS，讓我們來架一個安全的Ubuntu！",
      difficulty: 0.0,
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/08",
      name: "腳把腳教你架自己的部落格 - WordPress",
      difficulty: 0.0,
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/15",
      name: "Nginx反向代理 - 資安是什麼? 能喝嗎?",
      difficulty: 0.0,
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/22",
      name: "想學黑魔法嗎？我告訴你有哪些技能",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A5-807",
      tags: []
    },
    {
      date: "05/29",
      name: "社團總結",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-307",
      tags: []
    },
  ],
  '2022-fall': [
    {
      date: "9/12",
      name: "期初大會（迎新）",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-102",
      tags: []
    },
    {
      date: "9/19",
      name: "大開源時代！所以開源是什麼？聽起來很好吃？",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "10/03",
      name: "HackMD 開啟凡人的開源之路（Markdown語法）",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "10/17",
      name: "誰說這是個無聊的社團？讓我們一起說笑話聊開源OwO",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/07",
      name: "讓我們來認識『林姓商人』Linux！各種OS的形狀",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/14",
      name: "手把手帶你學會使用Shell！讓你成為專業的電腦用戶",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/21",
      name: "古老卻強大的編輯器『Vim』",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/28",
      name: "滿天飛的程式課程？！那我們到底要這麼多東西幹嘛？",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "12/05",
      name: "拯救你的Ｃ語言教學（一）",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "12/12",
      name: "拯救你的Ｃ語言教學（二）",
      difficulty: 0.0,
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "12/19",
      name: "期末大會+『左邊一點Shell、右邊一點C…哇！變成惡意軟體了…』",
      difficulty: 0.0,
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
        <li class="nav-item mb-1" v-for="year in years" :key="year.value">
          <a class="nav-link" :class="{ active: selectedYear.value === year.value }" href="#"
            @click.prevent="handleSelectYear(year)">
            {{ year.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="col-lg-10">
      <h3 class="my-2">{{ selectedYear.name }}</h3>
      <LectureTable :year="selectedYear.value" :table-data="lectureData[selectedYear.value]" />
    </div>
  </div>
</template>