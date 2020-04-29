import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router, //ES6增强写法，键值一致时可省写
  render: h => h(App),
}).$mount('#app')
