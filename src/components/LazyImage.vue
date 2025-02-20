<template>
  <div class="image-wrapper" :class="className" :style="{
    width: width,
    height: height,
    position: position
  }">
    <img :src="loaded ? src : (blurhashDataURL || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==')" 
      :class="{ 'loaded': loaded }" 
      @load="onLoad" 
      :alt="alt"
      loading="lazy"
      :style="{ 
        'object-fit': fit, 
        'transition-duration': transitionDuration,
        'filter': loaded ? 'blur(0)' : 'blur(20px)',
        'background-color': 'white'
      }" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import decodeBlurHash from '@/utils/decodeBlurHash';

export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    fit: {
      type: String,
      default: 'cover'
    },
    blurhashWidth: {
      type: Number,
      default: 32
    },
    blurhashHeight: {
      type: Number,
      default: 32
    },
    blurhash: {
      type: String,
      default: '' // 在這裡設定你的硬編碼 BlurHash
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: 'auto'
    },
    position: {
      type: String,
      default: 'relative'
    },
    className: {
      type: String,
      default: ''
    },
    transitionDuration: {
      type: String,
      default: '0.5s'
    }
  },
  setup(props) {
    const loaded = ref(false);
    const blurhashDataURL = ref('');

    const onLoad = () => {
      loaded.value = true;
    };

    onMounted(() => {
      if (props.blurhash) {
        blurhashDataURL.value = decodeBlurHash(props.blurhash, props.blurhashWidth, props.blurhashHeight);
      }
    });

    return { loaded, onLoad, blurhashDataURL };
  },
};
</script>

<style scoped>
.image-wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
  opacity: 0.6;
}

img.loaded {
  opacity: 1;
  transform: scale(1);
}
</style>