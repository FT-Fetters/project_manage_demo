import Vue from 'vue'
import VueRouter from 'vue-router'
import FormCustom from '../components/FormCustom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FormCustom',
    component: FormCustom
  }
]

const router = new VueRouter({
  routes
})

export default router
