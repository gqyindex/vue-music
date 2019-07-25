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
