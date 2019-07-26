import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import Home from "../pages/index"
// import Personalize from "../pages/personalized/presonlize"
import mvList from "../pages/hotList/mvList"
import singerList from "../pages/hotList/singerList"
import songList from "../pages/hotList/songList"
import likeList from "../pages/myInfo/likeList"
import likeMusic from "../pages/myInfo/likeMusic"
import personInfo from "../pages/myInfo/personInfo"
import songRecored from "../pages/myInfo/songRecord"
import album from "../pages/newthing/album"
import hearIAM from "../pages/newthing/hearIAM"
import newMV from "../pages/newthing/newMV"
import newSong from "../pages/newthing/newsong"
import hitMusic from "../pages/recommend/hitMusic"
import personalFM from "../pages/recommend/personalFM"
import playlist from "../pages/recommend/playlist"
import yunData from "../pages/yunFile/yunData"
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
          path:'/mvList',
          name:'mvList',
          component:mvList
        },
        {
          path:'/singerList',
          name:'singerList',
          component:singerList
        },
        {
          path:'/songList',
          name:'songList',
          component:songList
        }
      ]
    },
    {
      path:'',
      component:Home,
      children: [
        {
          path:'/likeList',
          name:'likeList',
          component:likeList
        },
        {
          path:'/likeMusic',
          name:'likeMusic',
          component:likeMusic
        },
        {
          path:'/personInfo',
          name:'personInfo',
          component:personInfo
        },
        {
          path:'/songRecored',
          name:songRecored,
          component:songRecored
        }
      ]
    },
    {
      path:'',
      component:Home,
      children: [
        {
          path:'/album',
          name:'album',
          component:album
        },
        {
          path:'/hearIAM',
          name:'hearIAM',
          component:hearIAM
        },
        {
          path:'/newMV',
          name:'newMV',
          component:newMV
        },
        {
          path:'/newSong',
          name:'newSong',
          component:newSong
        }
      ]
    },
    {
      path:'',
      component:Home,
      children: [
        {
          path:'/hitMusic',
          name:'hitMusic',
          component:hitMusic
        },
        {
          path:'/personalFM',
          name:personalFM,
          component:personalFM
        },
        {
          path:'/playlist',
          name:playlist,
          component:playlist
        }
      ]
    },
    {
      path:'',
      component:Home,
      children: [
        {
          path:'/yunData',
          name:yunData,
          component:yunData
        }
      ]
    }
  ]
})
