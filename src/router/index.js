import { createRouter, createWebHashHistory } from 'vue-router'
import { asyncRoute } from '../config/router.config'

export default createRouter({
  history: createWebHashHistory(),
  routes: asyncRoute,
})
