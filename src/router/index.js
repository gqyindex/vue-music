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
import songRecord from "../pages/myInfo/songRecord"
import album from "../pages/newthing/album"
import hearIAM from "../pages/newthing/hearIAM"
import IAMdetail from "../pages/newthing/IAMdetail"
import singer from "../pages/newthing/singer"
import songAudios from "../pages/newthing/songAudio"
import newMV from "../pages/newthing/newMV"
import newSong from "../pages/newthing/newsong"
import singerMV from "../pages/newthing/singleMV"
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
          path:'/songRecord',
          name:'songRecord',
          component:songRecord
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
        },
        {
          path:'/IAMdetail',
          name:'IAMdetail',
          component:IAMdetail
        },
        {
          path:'/songAudios',
          name:'songAudios',
          component:songAudios
        },
        {
          path:'/singer',
          name:'singer',
          component:singer
        },
        {
          path:'/singerMV',
          name:'singerMV',
          component:singerMV
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
