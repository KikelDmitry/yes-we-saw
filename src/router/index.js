import { createRouter, createWebHistory } from 'vue-router'
// import AppList from '../views/AppList.vue';
import AddMoviePage from '../views/AddMoviePage.vue';

const routes = [
  {
    path: '/',
    name: 'Add movie',
    component: AddMoviePage,
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/AppList.vue')
  },
  {
    path: '/stat',
    name: 'Statistics',
    component: () => import('../views/AppStat.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'is-active',
  linkExactActiveClass: '',
  routes
})

export default router
