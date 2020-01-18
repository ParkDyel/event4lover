import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/test',
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "one" */ '../views/Test.vue'),
  },
  {
    path: '/present',
    name: 'present',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "one" */ '../views/Present.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "one" */ '../views/Admin'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
