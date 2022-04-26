import Vue from 'vue'
import App from './App.vue'
import router from './router'
import formCreate from '@form-create/element-ui'
import './plugins/element.js'

Vue.use(formCreate)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
