import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import Home from "../pages/index"
import Personalize from "../pages/personalized/presonlize"
import Newsong from "../pages/newsong/newsong"
import DJprogram from "../pages/djprogram/djprogram"
import Recommend from "../pages/recommend/recommend"
import '../assets/style/base.css'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'',
      component:Home,
      children:[
        {
          path:'/personalized',
          name:'personalize',
          component:Personalize
        }
      ]
    },
    {
      path:'',
      component:Home,
      children: [
        {
          path:'/newsong',
          name:'newsong',
          component:Newsong
        }
      ]
    },
    {
      path:'',
      component:Home,
      children: [
        {
          path:'/djprogram',
          name:'djprogram',
          component:DJprogram
        }
      ]
    },
    {
      path:'',
      component:Home,
      children: [
        {
          path:'/recommend',
          name:'recommend',
          component:Recommend
        }
      ]
    }
  ]
})
