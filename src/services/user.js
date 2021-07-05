/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-18 10:33:22
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-07-05 16:16:05
 */
// 这里就不搞请求封装了
import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://conduit.productionready.io',
});

export const signUp = (data) => { 
  return instance.post('/users', {
    user: data
  })
}

export const signIn = (data) => { 
  return instance.post('/users/login',{
    user: data
  })
}