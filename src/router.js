import VueRouter from 'vue-router';

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/Main.vue')
    },
    {
      path: '/film/:itemTitle',
      name: 'film',
      component: () => import('./components/Video-item.vue')
    },
    {
      path: '/serial/:itemTitle',
      name: 'serial',
      component: () => import('./components/Video-item.vue')
    }
  ],
  mode: 'history'
})