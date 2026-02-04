import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// CSS imports (these are fine)
import '@/assets/css/plugins/bootstrap.css'
import '@/assets/css/plugins/font-awesome.css'
import '@/assets/css/plugins/linear-icons.css'
import '@/assets/css/plugins/animations.css'
import '@/assets/css/plugins/jquery.animatedheadline.css'
import '@/assets/css/plugins/magnific-popup.css'
import '@/assets/css/plugins/simplebar.css'

import '@/assets/css/style-dark.css'
import '@/assets/css/style-demo.css'
import '@/assets/css/blue-color.css'

const app = createApp(App)

router.afterEach(() => {
  setTimeout(() => {
    if (window.initTemplate) {
      window.initTemplate()
    }
  }, 100)
})

app.use(router).mount('#app')
