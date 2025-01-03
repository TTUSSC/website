# 在 Vue 3 使用 Font Awesome 的 Icon

在 Vue 3 中使用 Font Awesome 的 Icon 可以透過 yarn 安裝官方的 packages。

```shell
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-brands-svg-icons
yarn add @fortawesome/vue-fontawesome@latest-3
```

接著在 `main.js` 中引入 `@fortawesome/vue-fontawesome`

```js
// ...

const app = createApp(App)

// ...

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

```

要使用 icon 的時候，引入 `@fortawesome/fontawesome-svg-core` 以及對應的 icon component，並使用 `@fortawesome/vue-fontawesome` 的 `library.add()` 引入 component 就可以在 Vue 3 中使用了。

```vue
<script setup>
/* import icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
</script>

<template>
<font-awesome-icon :icon="['fas', 'house']" />
<font-awesome-icon :icon="['fas', 'phone']" />
<font-awesome-icon :icon="['fas', 'user-secret']" />
</template>
```
