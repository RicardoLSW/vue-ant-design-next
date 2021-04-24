import { createRouter, createWebHashHistory } from 'vue-router'
import { asyncRouterMap } from '../config/router.config'

export default createRouter({
  history: createWebHashHistory(),
  routes: asyncRouterMap
})
