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
    {
      date: "2/20",
      name: "開源新起點 LEVEL UP！",
      difficulty: 0.0,
      lecturer: "威力",
      location: "A3-307",
      tags: ["期初大會"],
      description: "📢 新學期開始啦！你是不是也很好奇這學期的社課和活動安排呢？<br>" +
        "想知道有哪些有趣的企劃等著大家一起參與嗎？那這場期初茶會你絕對不能錯過！✨<br><br>" +
        "這次的活動不僅會帶你深入了解新學期的社團規劃 📋，還能和幹部、社員們輕鬆聊聊 💭，提出你的想法，甚至發現志同道合的夥伴！<br>" +
        "不論你是剛加入的新朋友 🆕，還是已經參加過活動的老朋友 👋，我們都熱情歡迎你的到來～ 🎉<br><br>" +
        "讓我們一起迎接全新的學期、全新的可能！🎊",
      timeline: [
        "17:30~18:00 場地布置與活動準備",
        "18:00~19:00 社團介紹、活動規劃說明、退費機制修訂",
        "19:00~19:45 自由交流時間（點心、聊天、分享想法）",
        "19:45~20:00 填寫回饋表單、場復"
      ],
      slide: "",
      slido: "",
      handout: "",
      note: "",
      kktix: "",
    },
    {
      date: "2/27",
      name: "蛇年就來學 Python 吧！（上）",
      difficulty: 1.5,
      lecturer: "阿文",
      location: "A3-200",
      tags: ["Python", "程式設計"],
      description: "Python 作為當今最受歡迎的程式語言之一，憑藉其簡潔的語法與強大的功能，在數據分析、人工智慧、網頁開發、自動化處理等領域佔有重要地位。本次課程，希望能讓社員們在短時間內掌握 Python 的基礎語法，從開發環境開始，逐步學習變數宣告、資料型態、輸入輸出、數學運算、條件判斷等核心概念，並透過實際的問題練習來強化理解，此外還會比較 C語言 和 Python 的語法差別，讓大家加深對 Python 簡潔語法的印象。",
      timeline: [
        "17:30~18:00 場佈、活動準備",
        "18:00~18:20 開場閒聊、調查、設置環境 (Google Colab、Jupyter)",
        "18:20~19:50 Python 基礎教學 (語言特性、輸出/入、變數與資料型態、運算與條件判斷)",
        "19:50~20:00 填寫回饋表單、場地復原"
      ],
      slide: "https://www.canva.com/design/DAGeacDaUtc/0UVrt6Fm9mQ9fQGOygm7NA/view?utm_content=DAGeacDaUtc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbc24679e33",
      slido: "https://app.sli.do/event/4TW296oA3oAEFayFQBJsK1/live/questions",
      handout: "",
      note: "https://hackmd.io/@ttussc/SJiOwrhYyg",
      kktix: "https://ttussc.kktix.cc/events/python-1",
    },
    {
      date: "3/6",
      name: "蛇年就來學 Python 吧！（下）",
      difficulty: 2,
      lecturer: "阿文",
      location: "A3-200",
      tags: ["Python", "程式設計"],
      description: "延續上週的課程，本次課程將帶領社員深入探索迴圈，學習如何有效率地處理重複性任務；透過序組，理解 Python 如何管理與操作資料；最後，我們將介紹模組導入，讓社員學會運用 Python 標準函式庫來擴充功能，例如使用 `random` 來產生亂數。",
      timeline: [
        "17:30~18:00 場佈、活動準備",
        "18:00~18:20 複習上次社課的內容",
        "18:20~19:50 正式社課 (for、while 邏輯與使用、字串和 list 處理技巧、導入模組與 random 用法、終極密碼實作)",
        "19:50~20:00 表單回饋"
      ],
      slide: "https://www.canva.com/design/DAGfzW4GRPc/7q6safQvyNWXUbZ9IsA34w/view?utm_content=DAGfzW4GRPc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3165f349e6",
      slido: "https://app.sli.do/event/iqM25TgEYb792AaU4Yv9Vk",
      handout: "",
      note: "https://hackmd.io/@ttussc/H1X5wrnt1e",
      kktix: "https://ttussc.kktix.cc/events/python-2",
    },
    {
      date: "3/13",
      name: "SIGSEGV時在做什麼？有沒有GDB？可以來除錯嗎？",
      difficulty: 3.0,
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["除錯", "GDB"],
      description: "在程式開發的學習過程中，Debug(除錯)往往是最耗時且令人沮喪的環節。傳統教學較注重語法和解題，容易忽略除錯技巧的培養。當程式發生錯誤，例如出現`SIGSEGV`(Segmentation Fault)時，新手往往難以找到問題根源，只能靠運氣或土法煉鋼的方式除錯。<br><br>" +
        "GDB (GNU Debugger) 是一款歷史悠久且功能強大的除錯工具，廣泛應用於軟體開發、系統分析、資訊安全等領域。透過 GDB，開發者可以逐步追蹤程式碼的執行流程、檢視變數內容、分析記憶體狀態，從而快速定位並解決問題。<br><br>" +
        "本次社課希望引導社員及對程式開發有興趣的同學，認識 GDB 這個強大的工具，擺脫以往 printf 大法低效率的除錯方式，學會利用更有效率的工具來解決問題，提升程式開發能力。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~19:30 GDB使用教學",
        "19:30~19:50 實作練習",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "",
      slido: "https://app.sli.do/event/2yR677sxAfZJW7m6dTotYa",
      handout: "",
      note: "https://hackmd.io/@ttussc/HkdHqBhF1e",
      kktix: "https://ttussc.kktix.cc/events/gdb",
    },
    {
      date: "3/20",
      name: "Java（上）",
      difficulty: 2.0,
      lecturer: "詠竣",
      location: "A3-200",
      tags: ["Java", "程式設計"],
      description: "Java 作為一種廣泛應用的程式語言，在後端開發、行動應用與企業級系統等等領域占有重要地位。不管是第一次接觸程式設計或已經學會其他程式語言，Java 都是一個值得學習的程式語言。本次課程將介紹 Java 的開發基礎，從開發環境開始，逐步學習變數宣告、資料型態、條件判斷、方法等核心概念。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 介紹課程目標",
        "18:10~18:30 介紹Java、運行環境、各種IDE",
        "18:30~20:00 正式社課 (hello world、基本資料型態與變數、運算子、流程控制、陣列、靜態方法)",
        "20:00~20:10 表單回饋"
      ],
      slide: "https://hackmd.io/@speedcubing/java/",
      slido: "https://app.sli.do/event/ehmaXz25cxapQ4snM2UAkt",
      handout: "",
      note: "https://hackmd.io/@ttussc/SyGh7pp9Jg",
      kktix: "https://ttussc.kktix.cc/events/java-1",
    },
    {
      date: "3/27",
      name: "Java（下）",
      difficulty: 2.5,
      lecturer: "詠竣",
      location: "A3-200",
      tags: ["Java", "程式設計"],
      description: "Java 作為一種廣泛應用的程式語言，在後端開發、行動應用與企業級系統等等領域占有重要地位。物件導向是一種靈活，強調「物件」與「類別」關係的程式設計模式，能夠提升程式的擴展性、可讀性。本次課程將介紹物件導向的核心概念，如類別、實例、繼承等。並透過各種物件導向相關的關鍵字，幫助學員學習在Java中使用物件導向設計程式。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:20 複習上次社課的內容",
        "18:20~20:00 正式社課 (物件導向、類別、實例、參照/GC、靜態、this、繼承、final)",
        "20:00~20:10 表單回饋"
      ],
      slide: "https://hackmd.io/@speedcubing/java/",
      slido: "https://app.sli.do/event/sR3MTgHAymt6LnCLChXczS",
      handout: "",
      note: "https://hackmd.io/@ttussc/rko2mTpqJx",
      kktix: "https://ttussc.kktix.cc/events/java-2",
    },
    {
      date: "3/31",
      name: "考前讀書會",
      difficulty: 0.0,
      lecturer: "威力",
      location: "A3 8F 樂學空間",
      tags: ["工作坊", "讀書"],
      description: "期中考前夕，讓我們一起準備考試！社員們可以互相交流讀書心得，學長姐也會在現場協助解答問題。",
      timeline: [
        "18:00~18:30 入座準備",
        "18:30~20:50 準備考試內容",
        "20:50~21:00 填寫回饋表單"
      ],
      slide: "",
      slido: "",
      handout: "",
      note: "",
      kktix: "",
    },
    {
      date: "4/17",
      name: "期中社遊",
      difficulty: 0.0,
      lecturer: "威力",
      location: "待定",
      tags: ["社遊"],
      description: "期中考是學生壓力較大的時期，科學開源服務社希望透過輕鬆的社遊活動，讓社員在忙碌的學業中得到喘息的機會。此外，由於平時社課較難建立深厚的人際連結，我們期待藉由這次的社遊拉近社員與幹部之間的距離，增進彼此了解，營造更友善溫暖的社團氛圍，讓大家更願意持續參與社團活動。",
      timeline: [
        "18:00~20:00 社遊"
      ],
      slide: "",
      slido: "",
      handout: "",
      note: "",
      kktix: "",
    },
    {
      date: "4/24",
      name: "Denny 學長的 Git 教學 （上）",
      difficulty: 3.25,
      lecturer: "Denny",
      location: "A3-200",
      tags: ["Git", "版本控制"],
      description: "Git 是在不論是開源或是工程師在工作中常使用的版本控制工具，用來監督程式碼的開發，也可以變成多人合作的利器。但在大學課堂中，教師並不會教導學生使用，更多的學生甚至都不知道有這樣的工具存在。這堂課將帶領大家認識 Git 的基本概念和常用指令，讓你在未來的開發道路上更加順暢。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:30 介紹版本控制概念",
        "18:30~19:00 安裝 git 與環境設定", 
        "19:00~20:00 git 基本指令教學",
      ],
      slide: "https://denny.one/git-slide/",
      slido: "https://app.sli.do/event/fAMhbRNE6AiDbmnSBijuPf",
      handout: "",
      note: "https://hackmd.io/@ttussc/BkvTXpa91l",
      kktix: "https://ttussc.kktix.cc/events/git-0x01",
    },
    {
      date: "5/1",
      name: "Denny 學長的 Git 教學（下）",
      difficulty: 3.5,
      lecturer: "Denny",
      location: "A3-200",
      tags: ["Git", "版本控制"],
      description: "延續上週的社課教導社員使用版本控制系統，這次我們將介紹線上版本控制平台 GitHub，讓大家學習如何透過 Git 與 GitHub 進行多人協作。課程中將帶領大家註冊 GitHub 帳號、建立專案倉庫，並實際操作如何將本地的程式碼推送到 GitHub 上，以及如何與他人共同開發專案。透過這堂課，你將學會如何運用版本控制系統進行團隊合作開發。",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:30 介紹 GitHub 與建立帳號",
        "18:30~19:00 熟習 GitHub",
        "19:00~20:00 練習將 Git 與 GitHub 結合"
      ],
      slide: "https://denny.one/git-slide/",
      slido: "https://app.sli.do/event/8p4t9VGsHpsLEXCN3x6oPn",
      handout: "",
      note: "https://hackmd.io/@ttussc/ByapQp69yg",
      kktix: "https://ttussc.kktix.cc/events/git-0x02",
    },
    {
      date: "5/8",
      name: "前端小白入門指北",
      difficulty: 1.25,
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["網頁前端", "HTML", "CSS"],
      description: "在現今的網路時代，無論是個人品牌建立、作品展示，或是商業行銷，網頁都扮演著至關重要的角色。然而，對於許多初學者來說，前端開發的技術門檻仍然偏高，常常因為缺乏系統性的引導而感到卻步。\n\n本次課程將以實作導向的方式進行，透過 hands-on 的練習，讓參與者在動手做的過程中，快速掌握 HTML、CSS 和 Bootstrap 等常用技術，並學會使用 VSCode 開發工具，為自己的網路世界開啟無限可能。",
      timeline: [
        "17:30~18:00 場地佈置、活動準備、參與者報到",
        "18:00~18:30 前端基礎概念介紹 (HTML、CSS)",
        "18:30~19:30 Bootstrap 框架教學與實作",
        "19:30~19:50 VSCode 開發工具使用",
        "19:50~20:00 成果展示與 QA",
        "20:00~20:30 表單回饋、場地復原"
      ],
      slide: "",
      slido: "https://app.sli.do/event/p8zr1ZDpbHKHJrZ8hrZ9fw",
      handout: "",
      note: "https://hackmd.io/@ttussc/SkDCmTTqyg",
      kktix: "https://ttussc.kktix.cc/events/front-end",
    },
    {
      date: "5/15",
      name: "前端小白的 GitHub Pages 入門",
      difficulty: 2.25,
      lecturer: "小方",
      location: "A3-200",
      tags: ["網頁前端", "GitHub Pages"],
      description: "藉由前幾堂課所學的 Git 基礎指令與 HTML/CSS 網頁開發技巧，本次課程將帶領大家整合所學並進一步探索 GitHub 平台。我們將介紹如何運用 GitHub Pages 服務來架設靜態網站，同時也會深入講解 Git 在多人協作專案中的應用場景。透過實際操作，讓社員能更全面地掌握以 Git 為核心的版本控制技術，並學會如何運用 GitHub 平台來展示自己的作品。",
      timeline: [
        "17:30~18:00 課前準備",
        "18:00~18:20 環境準備",
        "18:20~18:50 複習及整合前面課程所提及之各項內容", 
        "19:00~19:20 簡單提及網路概論及網頁架構",
        "19:20~19:40 申請 Github.io 域名，將域名指向個人 Github",
        "19:40~20:00 成果發表，瀏覽成員之網頁"
      ],
      slide: "",
      slido: "https://app.sli.do/event/qge2DdLjQcmXARHkjTiQ2Q",
      handout: "",
      note: "https://hackmd.io/@ttussc/rkTCQpa5kx",
      kktix: "https://ttussc.kktix.cc/events/github-pages",
    },
    {
      date: "5/22",
      name: "期末大會",
      difficulty: 0.0,
      lecturer: "威力",
      location: "A3-307",
      tags: ["期末大會"],
      description: "這學期即將結束，我們想透過期末大會一起回顧這段時間的努力和成果，感謝每位社員的付出與參與。這不僅是一個分享心得的機會，更是凝聚共識、調整未來方向的重要時刻。同時，我們也將進行幹部交接儀式，協助新任幹部更清楚自己的職責，確保社團能夠順利傳承、持續茁壯！",
      timeline: [
        "17:30~18:00 場地布置與活動準備",
        "18:00~18:30 本學期活動回顧與成果分享",
        "18:30~19:00 社員心得分享與意見交流",
        "19:00~19:20 幹部交接儀式",
        "19:20~19:45 社團未來規劃討論",
        "19:45~20:00 填寫回饋表單、場復"
      ],
      slide: "",
      slido: "https://app.sli.do/event/tKKSJ11dqKCm2jHjmKwARX",
      handout: "",
      note: "https://hackmd.io/@ttussc/BkH1VaT9Je",
      kktix: "https://ttussc.kktix.cc/events/finalparty",
    },
    {
      date: "5/26",
      name: "考前讀書會",
      difficulty: 0.0,
      lecturer: "威力",
      location: "A3 8F 樂學空間",
      tags: ["工作坊", "讀書"],
      description: "有別於以往考試期間暫停社團活動的慣例，我們特別舉辦這場考前讀書會，希望能讓社員們在準備考試時互相扶持。透過學長姐的經驗分享，指導學弟妹如何有效規劃讀書策略、掌握重點，並在現場協助解答各科目的疑難。我們相信，藉由這樣的讀書會形式，不僅能讓社員在考前得到實質的幫助，更能凝聚社團向心力，一同在學業上精進成長。",
      timeline: [
        "18:00~18:30 入座準備",
        "18:30~20:50 準備考試內容",
        "20:50~21:00 填寫回饋表單"
      ],
      slide: "",
      slido: "",
      handout: "",
      note: "",
      kktix: "",
    },
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
      difficulty: 1.0,
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
      difficulty: 1.25,
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
      difficulty: 2.0,
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
      difficulty: 2.0,
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
      difficulty: 2.5,
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
      difficulty: 1.0,
      lecturer: "卓立教授",
      location: "A3-206",
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
      difficulty: 2.0,
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
      name: "做自己的夢，Just Do It ！",
      difficulty: 1.0,
      lecturer: "柳橙學姊",  // 將 "劉辰盈" 改為 "柳橙學姊"
      location: "A3-201",
      tags: ["生涯規劃", "職涯發展"],
      description: "對自己未來的自己迷惘嗎？<br>可以做更多還在想什麼嗎？？<br>勇敢向前衝，做就對了！！<br><br>這堂課，邀請到了我們的校外指導老師，劉辰盈學姊，在短短時間內將帶領大家找到屬於自己想要做的事情😉<br><br>透過老師引導以及輕鬆小短片，觸動自己對未來的不可能，最後再分類出哪些屬性夢想該如何往前🤔<br><br>還在對未來很迷惘的夥伴們趕快報名起來吧～",
      timeline: [
        "17:30~18:00 場地佈置、進場",
        "18:00~18:10 開場介紹",
        "18:10~19:00 生涯探索與規劃",
        "19:00~19:30 小組討論與分享",
        "19:30~19:50 總結與回饋",
        "19:50~20:00 填寫問卷、收拾場地"
      ],
      slide: "",
      slido: "",
      handout: "",
      note: "",
      kktix: "https://kktix.com/events/just-do-it113",
    },
    {
      date: "11/21",
      name: "Arduino RFID 實戰",
      difficulty: 3.0,
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
      difficulty: 2.0,
      lecturer: "Yuto",
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
      difficulty: 2.5,
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
      difficulty: 0.0,  // 純參加活動，會呼吸即可
      lecturer: "Yuto",
      location: "A3-307",
      tags: ["期初大會"]
    },
    {
      date: "3/7",
      name: "來從開源一路細說到FOSDEM去",
      difficulty: 1.0,  // 開源文化入門
      lecturer: "Timothy",
      location: "A3-200",
      tags: ["開源文化"]
    },
    {
      date: "3/9",
      name: "SITCON 學生計算機年會",
      difficulty: 0.0,  // 純參加活動
      lecturer: "無",
      location: "中研院",
      tags: ["SITCON"]
    },
    {
      date: "3/14",
      name: "古老卻強大的編譯器-Vim",
      difficulty: 2.0,  // vim 需要一定學習曲線
      lecturer: "Timothy",
      location: "A3-200",
      tags: ["vim", "shell"]
    },
    {
      date: "3/16",
      name: "天使心志工活動",
      difficulty: 0.0,  // 純參加活動
      lecturer: "無",
      location: "台北市立木柵動物園",
      tags: ["服務"]
    },
    {
      date: "3/21",
      name: "想要擁有自己的網站嗎？boostrap帶你上手",
      difficulty: 1.25,  // 類似前面的 HTML 課程
      lecturer: "張哲嘉",
      location: "A3-200",
      tags: ["網頁前端", "Bootstrap"]
    },
    {
      date: "3/28",
      name: "vue出新世界",
      difficulty: 2.5,  // 需要 HTML/JS 基礎
      lecturer: "張哲嘉",
      location: "A3-200",
      tags: ["網頁前端"]
    },
    {
      date: "4/13",
      name: "開源工具大補帖",
      difficulty: 1.5,  // 基礎工具教學
      lecturer: "Yuto",
      location: "A3 8F 樂學空間",
      tags: ["Linux", "Markdown"]
    },
    {
      date: "4/15",
      name: "Denny學長的Git教學（上）",
      difficulty: 3.25,  // 參考你提供的範例
      lecturer: "Denny",
      location: "A3-200",
      tags: ["Git", "多人協作"]
    },
    {
      date: "4/22",
      name: "Denny學長的Git教學（下）",
      difficulty: 3.5,  // 參考你提供的範例
      lecturer: "Denny",
      location: "A3-200",
      tags: ["Git", "多人協作"]
    },
    {
      date: "5/2",
      name: "從C語言快速上手Python的基礎實戰",
      difficulty: 2.0,  // Python 基礎，需要 C 語言知識
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["Python"]
    },
    {
      date: "5/9",
      name: "從Python爬蟲認識網路世界",
      difficulty: 2.5,  // 需要 Python 基礎
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["Python", "網路爬蟲"]
    },
    {
      date: "5/16",
      name: "Jerry 的 HEXO 分享",
      difficulty: 2.25,  // 類似 GitHub Pages
      lecturer: "小方",
      location: "A3-200",
      tags: ["GitHub", "HEXO"]
    },
    {
      date: "5/23",
      name: "社團總結&交接",
      difficulty: 0.0,  // 純參加活動
      lecturer: "張芯瑜",
      location: "A3-307",
      tags: ["期末派對"]
    }
  ],
  '2023-fall': [
    {
      date: "9/18",
      name: "期初迎新",
      difficulty: 0.0,  // 純參加活動
      lecturer: "Yuto",
      location: "A3-102",
      tags: ["迎新"]
    },
    {
      date: "9/25",
      name: "開源是什麼?蛤?雞排?",
      difficulty: 1.0,  // 開源文化入門
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["開源文化"]
    },
    {
      date: "10/2",
      name: "轉生開源世界無意間竟獲得了最強武器是否搞錯了社麼",
      difficulty: 1.25,  // 類似前面的 Markdown 課程
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["開源", "HackMD"]
    },
    {
      date: "10/9",
      name: "怕麻煩的我，把Shell學好就對了!",
      difficulty: 2.0,  // Shell 基礎，需要 Linux 知識
      lecturer: "Stanley",
      location: "A3-200",
      tags: ["OS", "Linux"]
    },
    {
      date: "10/16",
      name: "從printf()開始的扣頂生活",
      difficulty: 2.0,  // C語言基礎
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["C", "程式設計"]
    },
    {
      date: "11/6",
      name: "關於我用迴圈旋轉自己的那檔事",
      difficulty: 2.5,  // C語言進階
      lecturer: "Yuto",
      location: "A3-200",
      tags: ["C", "程式設計"]
    },
    {
      date: "11/13",
      name: "Useless Box 實作1",
      difficulty: 2.0,  // 需要基礎電學和程式概念
      lecturer: "吳享恩",
      location: "A3-200",
      tags: ["設計", "創客"]
    },
    {
      date: "11/20",
      name: "Useless box 實作2",
      difficulty: 2.5,  // 需要 Arduino 基礎
      lecturer: "吳享恩",
      location: "A3-200",
      tags: ["設計", "創客"]
    },
    {
      date: "11/27",
      name: "Arrr我要du到你說no",
      difficulty: 3.0,  // 需要 Arduino 和程式基礎
      lecturer: "劉玠祐",
      location: "A3-200",
      tags: ["Arduino", "創客"]
    },
    {
      date: "12/4",
      name: "想學黑魔法嗎？我告訴你有哪些技能",
      difficulty: 2.5,  // 資安入門，需要基礎知識
      lecturer: "Timothy",
      location: "A3-307",
      tags: ["資訊安全"]
    },
    {
      date: "12/11",
      name: "來給開源企鵝仔加頂聖誕帽吧！！",
      difficulty: 0.0,  // 純參加活動
      lecturer: "張芯瑜",
      location: "A3-307",
      tags: ["交換禮物"]
    },
  ],
  '2023-spring': [
    {
      date: "2/20",
      name: "時間回復！讓我們聊聊過去、現在與未來",
      difficulty: 0.0,  // 純參加活動，會呼吸即可
      lecturer: "Timothy",
      location: "A3-307",
      tags: []
    },
    {
      date: "3/06",
      name: "做孩子的啦啦隊",
      difficulty: 1.0,  // 基礎講座
      lecturer: "幼竹老師",
      location: "A3-307",
      tags: []
    },
    {
      date: "3/13",
      name: "一起來做個tldr，畢竟我們可是要教小學生呢！（水火箭）",
      difficulty: 2.0,  // 需要基礎物理知識
      lecturer: "Timothy",
      location: "A3-202",
      tags: []
    },
    {
      date: "3/20",
      name: "打扣必備的版本控管工具，讓你從入門到放棄-Git教學",
      difficulty: 3.25,  // 參考你提供的Git課程難度
      lecturer: "Yuto",
      location: "A5-807",
      tags: []
    },
    {
      date: "3/27",
      name: "淺談分支概念與Github實戰-Git教學（二）",
      difficulty: 3.5,  // 參考你提供的Git進階課程難度
      lecturer: "Yuto",
      location: "A5-807",
      tags: []
    },
    {
      date: "4/17",
      name: "做自己的夢，Just Do IT! ",
      difficulty: 1.0,  // 基礎講座
      lecturer: "柳橙學姊",  // 將 "劉辰盈" 改為 "柳橙學姊"
      location: "A3-307",
      tags: []
    },
    {
      date: "4/24",
      name: "有FB有IG，為什麼要有自己的網站? 談談架站的好處是什麼",
      difficulty: 1.0,  // 概念介紹
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/01",
      name: "聊了那麼久的OS，讓我們來架一個安全的Ubuntu！",
      difficulty: 2.5,  // 需要基礎Linux知識
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/08",
      name: "腳把腳教你架自己的部落格 - WordPress",
      difficulty: 2.0,  // 需要基礎網站概念
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/15",
      name: "Nginx反向代理 - 資安是什麼? 能喝嗎?",
      difficulty: 3.0,  // 需要網站和Linux基礎
      lecturer: "Brian",
      location: "A5-807",
      tags: []
    },
    {
      date: "5/22",
      name: "想學黑魔法嗎？我告訴你有哪些技能",
      difficulty: 2.5,  // 資安入門，需要基礎知識
      lecturer: "Timothy",
      location: "A5-807",
      tags: []
    },
    {
      date: "05/29",
      name: "社團總結",
      difficulty: 0.0,  // 純參加活動，會呼吸即可
      lecturer: "Timothy",
      location: "A3-307",
      tags: []
    },
  ],
  '2022-fall': [
    {
      date: "9/12",
      name: "期初大會（迎新）",
      difficulty: 0.0,  // 純參加活動，會呼吸即可
      lecturer: "Timothy",
      location: "A3-102",
      tags: []
    },
    {
      date: "9/19",
      name: "大開源時代！所以開源是什麼？聽起來很好吃？",
      difficulty: 1.0,  // 開源文化入門
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "10/03",
      name: "HackMD 開啟凡人的開源之路（Markdown語法）",
      difficulty: 1.25,  // 類似前面的 Markdown 課程
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "10/17",
      name: "誰說這是個無聊的社團？讓我們一起說笑話聊開源OwO",
      difficulty: 0.0,  // 純交流活動，會呼吸即可
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/07",
      name: "讓我們來認識『林姓商人』Linux！各種OS的形狀",
      difficulty: 1.5,  // Linux 基礎概念
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/14",
      name: "手把手帶你學會使用Shell！讓你成為專業的電腦用戶",
      difficulty: 2.0,  // Shell 基礎，需要 Linux 知識
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/21",
      name: "古老卻強大的編輯器『Vim』",
      difficulty: 2.0,  // Vim 需要一定學習曲線
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "11/28",
      name: "滿天飛的程式課程？！那我們到底要這麼多東西幹嘛？",
      difficulty: 1.0,  // 概念介紹
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "12/05",
      name: "拯救你的Ｃ語言教學（一）",
      difficulty: 2.0,  // C語言基礎
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "12/12",
      name: "拯救你的Ｃ語言教學（二）",
      difficulty: 2.5,  // C語言進階
      lecturer: "Timothy",
      location: "A3-200",
      tags: []
    },
    {
      date: "12/19",
      name: "期末大會+『左邊一點Shell、右邊一點C…哇！變成惡意軟體了…』",
      difficulty: 0.0,  // 純參加活動，會呼吸即可
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
