<script setup>
import { ref } from 'vue'

const baseUrl = import.meta.env.BASE_URL
const trueURL = (url) => `${baseUrl}${url}`

const members = {
  '13': [
    { image: trueURL("img/member/boyce.jpg"), name: "陳柏屹", title: "社長", ig: "boyce.chen03", desc: "資工系學生，目前在學習如何通靈。", tags: [] },
    { image: trueURL("img/member/willy.jpg"), name: "游凱崴", title: "副社長 x 文書組長", ig: "kwy_1019", desc: "電機系學生，對於電資相關領域感到興趣，平時喜歡看科技相關的酷東東以及探索各種沒接觸過的東西😆", tags: ["通訊", "電機人"] },
    { image: trueURL("img/member/hyijeee.jpg"), name: "洪苡倢", title: "財務組長", ig: "hyijeee", desc: "化工系學生，喜歡摸索新事物，在努力學英文（底子太爛國小生都不如，吃咖哩要攪派，讚", tags: [] },
    { image: trueURL("img/member/zp.jpg"), name: "張登評", title: "器材組長", ig: "zp.2006", desc: "電機系學生，是個軍事迷，喜歡學習科技與應用相關的事物。", tags: [] },
    { image: "", name: "蔡詠竣", title: "教學 x 資訊", ig: "speedcubing.top", desc: "", tags: [] },
    { image: trueURL("img/member/hyn.jpg"), name: "黃郁寧", title: "活動組長", ig: "__hhyn.7", desc: "資工系學生，也可以叫我芋泥，但我不吃芋泥跟芋頭，特別不能加在火鍋裡面。", tags: ["貓派", "小精靈"] },
    { image: trueURL("img/member/Jenny.jpg"), name: "陳心妮", title: "編輯 x 紀錄", ig: "shinni.c", desc: "機材系學生，大家都叫我 Jenny。喜歡去咖啡廳，也喜歡 K-pop，目前在努力學習德文跟材料中。", tags: ["狗派", "貓派", "小方派"] },
    { image: trueURL("img/member/rain.jpg"), name: "余萬崧", title: "資訊組長", ig: "rainyu_05_10", desc: "喜歡嘗試跟程式有關的新事物，最近在積極學習網站跟人工智慧", tags: ["音樂", "遊戲"] },
    { image: trueURL("img/member/zhaoyu.png"), name: "陳昭妤", title: "設計組長", ig: "yo_man_yaha", desc: "資工系學生，喜歡組鋼彈和追星，偶爾看動漫，是個吃貨🤤", tags: ["貓派", "ENTJ", "聽團仔"] },
    { image: trueURL("img/member/star.jpg"), name: "張乃文", title: "紀錄組長 x 教學組", ig: "best_twisted_fate", desc: "資工系學生，喜歡睡覺，吃水餃不沾醬油，吃咖哩要拌。", tags: [] },
    { image: trueURL("img/member/fang.jpg"), name: "方健宇", title: "教學", ig: "jerry_0804_", desc: "資工系的學生，喜歡一個人躲在角落看書，最近在積極學習資安知識。", tags: ["唱歌", "香水", "攝影", "Jenny派"] },
    { image: trueURL("img/member/yuto.jpg"), name: "羅崧瑋", title: "編輯 x 資訊", ig: "sw_1a4", desc: "資工系學生，熱衷於研究網頁前後端、電腦底層技術，目前正努力學習資訊安全。", tags: ["弓道", "網頁前後端"] },
    { image: trueURL("img/member/stanley.jpg"), name: "陳威翰", title: "財務 x 資訊", ig: "stanley_1106_", desc: "資工系學生，喜歡參加各式各樣的活動，努力學習資安中", tags: ["貝斯(新)手", "社花"] },
  ],
  '12': [
    { image: trueURL("img/member/willy.jpg"), name: "游凱崴", title: "社長", ig: "willyyu.20041019", desc: "電機系學生，對於電資相關領域感到興趣，平時喜歡看科技相關的酷東東以及探索各種沒接觸過的東西😆", tags: [] },
    { image: trueURL("img/member/boyce.jpg"), name: "陳柏屹", title: "副社長", ig: "boyce.chen03", desc: "資工系學生，目前在學習如何通靈。", tags: [] },
    { image: trueURL("img/member/fang.jpg"), name: "方健宇", title: "教學組長", ig: "jerry_0804_", desc: "資工系的學生，喜歡一個人躲在角落看書。最近在努力學習各種知識，藉此增加資工領域的能力。以前從來沒有想過會走資工，覺得和同學們格格不入，希望大學四年能夠找到好夥伴。", tags: [] },
    { image: trueURL("img/member/hyn.jpg"), name: "黃郁寧", title: "編輯組長", ig: "__hhyn.7", desc: "資工系學生，也可以叫我芋泥，但我不吃芋泥跟芋頭，特別不能加在火鍋裡面。", tags: [] },
    { image: "", name: "蔡詠竣", title: "資訊組長", ig: "", desc: "", tags: [] },
    { image: trueURL("img/member/star.jpg"), name: "張乃文", title: "紀錄組長", ig: "best_twisted_fate", desc: "資工系學生，喜歡睡覺，吃水餃不沾醬油，吃咖哩要拌。", tags: [] },
    { image: trueURL("img/member/stanley.jpg"), name: "陳威翰", title: "財務組長", ig: "stanley_1106_", desc: "資工系學生，喜歡參加各式各樣的活動，努力學習資安中", tags: ["貝斯(新)手", "社花"] },
    { image: trueURL("img/member/tty.jpg"), name: "曹延宥", title: "器材組長", ig: "tty_9_28", desc: "電機系妹妹，萌萌噠", tags: ["社草"] },
    { image: trueURL("img/member/yuto.jpg"), name: "羅崧瑋", title: "活動組長", ig: "sw_1a4", desc: "資工系學生，熱衷於研究網頁前後端、電腦底層技術，目前正努力學習資訊安全。", tags: ["弓道", "網頁前後端"] },
    { image: trueURL("img/member/allen.jpg"), name: "陳彥廷", title: "前副社長", ig: "maverick_01_freedom", desc: "電機系學生，能自己完成的就自己做，不忘初心，盡力就好，一切隨緣....", tags: [] },
    { image: trueURL("img/member/jerry.jpg"), name: "盧佳緯", title: "前副社長", ig: "jerrylu8631", desc: "電機系學生，吃貨一枚，有啥想問的也可以問我喔", tags: [] },
    { image: "", name: "連婉妤", title: "設計組長", ig: "kt._422", desc: "", tags: [] },
  ],
  '11': [
    { image: trueURL("img/member/yuto.jpg"), name: "羅崧瑋", title: "社長", ig: "sw_1a4", desc: "資工系，熱衷於研究網頁前後端、電腦底層技術，目前正努力學習資訊安全。", tags: ["弓道", "網頁前後端"] },
    { image: trueURL("img/member/tty.jpg"), name: "曹莛宥", title: "副社長", ig: "tty_9_28", desc: "電機系", tags: ["社草"] },
    { image: trueURL("img/member/stanley.jpg"), name: "陳威翰", title: "副社長", ig: "stanley_1106_", desc: "資工系，喜歡參加各式各樣的活動，努力學習資安中", tags: ["貝斯(新)手", "社花"] },
    { image: trueURL("img/member/xin.jpg"), name: "張芯瑜", title: "文書組長", ig: "xin._1865", desc: "電機系", tags: ["不要害SHIU"] },
    { image: trueURL("img/member/john.jpg"), name: "林靖疆", title: "財務組長", ig: "jinjohn_lin", desc: "電機系", tags: [] },
    { image: trueURL("img/member/sam.jpg"), name: "陳茂凱", title: "器材組長", ig: "sam_930704", desc: "電機系", tags: [] },
    { image: trueURL("img/member/ju.jpg"), name: "劉玠佑", title: "教學組長", ig: "j.u_28_", desc: "電機系", tags: [] },
    { image: trueURL("img/member/brian.jpg"), name: "Brain", title: "教學組長", ig: "brian_jhan", desc: "資經系", tags: [] },
    { image: trueURL("img/member/harry.jpg"), name: "郭祐亨", title: "美宣組長", ig: "harry.0108_", desc: "工設系", tags: [] },
    { image: trueURL("img/member/xiangen.jpg"), name: "吳享恩", title: "紀錄組長", ig: "xiangen7653", desc: "工設系", tags: [] },
  ],
  '10': [
    { image: trueURL("img/member/timothy.jpg"), name: "Timothy", title: "社長", ig: "timothy_tzd2819", desc: "電機系", tags: [] },
    { image: trueURL("img/member/yellow_new.jpg"), name: "黃新翰", title: "副社長", ig: "yellow_new_and", desc: "電機系", tags: [] },
    { image: trueURL("img/member/zhen.jpg"), name: "王苡禎", title: "文書", ig: "91_12_19", desc: "電機系", tags: [] },
  ],
}

const years = [
  { name: '第拾參屆', value: '13' },
  { name: '第拾貳屆', value: '12' },
  { name: '第拾壹屆', value: '11' },
  { name: '第拾屆', value: '10' },
]

const selectedYear = ref(years[0])
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20 md:py-24">
    <span class="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-moss">Members</span>
    <h1 class="font-display text-3xl md:text-4xl font-bold text-ink mt-2 mb-3">社團成員</h1>
    <p class="text-clay mb-10 max-w-2xl text-[15px]">
      來自電機系、資工系、工設系等不同科系，每個人都帶著獨特的專長和興趣，共同為推廣開源文化而努力。
    </p>

    <!-- Year Tabs -->
    <div class="flex flex-wrap gap-2 mb-10">
      <button
        v-for="year in years"
        :key="year.value"
        @click="selectedYear = year"
        class="px-4 py-1.5 text-sm font-display font-medium rounded-md transition-all duration-200"
        :class="selectedYear.value === year.value
          ? 'bg-ink text-paper'
          : 'text-clay border border-chalk hover:border-ink hover:text-ink'"
      >
        {{ year.name }}
      </button>
    </div>

    <!-- Member Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="member in members[selectedYear.value]"
        :key="member.name + member.title"
        class="hover-lift bg-paper-warm rounded-xl p-5 border border-chalk/60"
      >
        <div class="flex gap-4">
          <div class="shrink-0 w-14 h-14 rounded-md overflow-hidden bg-fog">
            <img v-if="member.image" :src="member.image" :alt="member.name" class="w-full h-full object-cover" loading="lazy" />
            <div v-else class="w-full h-full flex items-center justify-center text-xl">🐧</div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline gap-2 flex-wrap">
              <h3 class="font-display font-semibold text-ink text-[15px]">{{ member.name }}</h3>
              <span class="text-[11px] text-sand">{{ member.title }}</span>
            </div>
            <a v-if="member.ig" :href="'https://www.instagram.com/' + member.ig" target="_blank"
              class="text-[11px] text-rust hover:underline">@{{ member.ig }}</a>
            <p v-if="member.desc" class="mt-1.5 text-[13px] text-clay leading-relaxed line-clamp-2">{{ member.desc }}</p>
            <div v-if="member.tags.length" class="mt-1.5 flex flex-wrap gap-1">
              <span v-for="tag in member.tags" :key="tag"
                class="px-1.5 py-0.5 text-[10px] bg-fog text-clay rounded-sm">#{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
