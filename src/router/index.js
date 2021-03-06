import Vue from 'vue'
import Router from 'vue-router'

const welcome = r => require.ensure([], () => r(require('../views/welcome')), 'welcome');
const register = r => require.ensure([], () => r(require('../views/register')), 'register');
const chooseLocation = r => require.ensure([], () => r(require('../views/chooseLocation')), 'chooseLocation');


const baseIndex = r => require.ensure([], () => r(require('../views/baseIndex')), 'baseIndex');
const home = r => require.ensure([], () => r(require('../views/home/home')), 'home');
const company = r => require.ensure([], () => r(require('../views/company/company')), 'company');
const articles = r => require.ensure([], () => r(require('../views/article/articles')), 'articles');
const mine = r => require.ensure([], () => r(require('../views/mine/mine')), 'mine');


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/baseIndex',
      name: 'baseIndex',
      component: baseIndex,
      redirect: '/baseIndex/home',
      children: [
        {
          path: '/baseIndex/home',
          name: 'home',
          component: home,
        },
        {
          path: '/baseIndex/company',
          name: 'company',
          component: company,
        },
        {
          path: '/baseIndex/articles',
          name: 'articles',
          component: articles,
        },
        {
          path: '/baseIndex/mine',
          name: 'mine',
          component: mine,
        }
      ]
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/chooseLocation',
      name: 'chooseLocation',
      component: chooseLocation,
    },
    {
      path: '*',
      name: 'welcome',
      component: welcome,
    }
  ]
})
