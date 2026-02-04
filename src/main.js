import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// GLOBAL CSS

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

createApp(App)
  .use(router)
  .mount('#app')
