import { createRouter, createWebHashHistory } from 'vue-router';
import Option from '../views/Option.vue';
import CompositionA from '../views/CompositionA.vue';

const routes = [
  {
    path: '/',
    name: 'Option',
    component: Option,
  },
  {
    path: '/composition',
    name: 'Composition',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    component: CompositionA,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
