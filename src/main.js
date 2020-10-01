import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**
 * 中文Element-UI
 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

/**
 * global css
 */
import '@/assets/style.css' 
import '@/styles/index.scss'

import '@/icons' // icon

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
