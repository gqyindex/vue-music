import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

// 登录接口
export const getLogin = (data) => {
  // return axios.get(`/login/cellphone?phone=${phone}&password=${password}`)
  return axios.get('/login/cellphone',{params:data})
};

export const getCode = (data) => {
  return axios.get('/captcha/sent',{params:data})
};

//注册接口
export const getRegister = (data) => {
  return axios.get('/register/cellphone',{params:data})
};

//获取每日推荐的歌单
/*export const playList  = () => {
  return axios.get('/recommend/resource')
};*/

//新碟上架
export const hearIAM = (data) => {
  return axios.get('/top/album',{params:data})
};

// 获取新碟的详情
export const hearIAMdetail = (data) => {
  return axios.get('/album',{params:data})
};

// 根据id获取某一首歌曲的播放音频
export const songAudio = (data) => {
  return axios.get('/song/url',{params:data})
};

//根据id获取某一首歌曲的歌词
export const songLyric = (data) => {
  return axios.get('/lyric',{params:data})
};
