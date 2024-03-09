import { createRouter, createWebHashHistory } from 'vue-router'

import routes from '../constants/routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
