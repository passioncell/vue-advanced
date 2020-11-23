import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  // URL에서 # 제거(페이지 스택 사용)
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // beforeEnter: (to, from, next) => {
      //   next();
      // },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
    },
    {
      path: '/item/:id',
      component: ItemView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/user/:id',
      component: UserView
    }
  ]
});