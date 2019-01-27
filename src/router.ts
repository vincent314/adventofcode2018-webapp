import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/day4',
      name: 'day4',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Day4.vue'),
    },
    {
      path: '/day6',
      name: 'day6',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Day6.vue'),
      props: {
        part: 1
      }

    },
    {
      path: '/day6part2',
      name: 'day6Part2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Day6.vue'),
      props: {
        part: 2,
        threshold: 10000
      }
    },
    {
      path: '/day7',
      name: 'day7',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Day7.vue')
    },
    {
      path: '/day9',
      name: 'day9',
      component: () => import(/* webpackChunkName: "about" */ './views/Day9.vue')
    }
  ],
});
