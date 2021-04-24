import { BasicLayout } from '../layouts/index'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/home',
    meta: { title: '首页' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: { title: 'Home' }
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('../views/Test.vue'),
        meta: { title: 'Test' }
      }
    ]
  }
]

export const constantRouterMap = []
