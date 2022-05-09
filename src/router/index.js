import { createRouter, createWebHistory } from 'vue-router';
import NewMoviePage from '@/views/NewMoviePage.vue';
import MoviesListPage from '@/views/MoviesListPage.vue';
import MoviesStatsPage from '@/views/MoviesStatsPage.vue';

const routes = [
  {
    path: '/',
    name: 'New movie',
    component: NewMoviePage
  },
  {
    path: '/movies',
    name: 'Movies list',
    component: MoviesListPage
    // component: () => import('../views/MoviesListPage.vue')
  },
  {
    path: '/stats',
    name: 'Movies statistics',
    component: MoviesStatsPage
    // component: () => import('../views/MoviesStatsPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'is-active',
  linkExactActiveClass: '',
  routes
})

export default router
