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
  console.log(data)
  // return axios.get('/top/album?offset=0&limit=20')
  return axios.get('/top/album',{params:data})
};
