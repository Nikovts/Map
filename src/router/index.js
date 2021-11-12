import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage.vue';
import StaticTaskPreviewPage from '../views/StaticTaskPreviewPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/setup',
    name: 'StaticTaskPreviewPage',
    component: StaticTaskPreviewPage,
  },
  {
    path: '/how',
    name: 'How',
    component: StaticTaskPreviewPage,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
