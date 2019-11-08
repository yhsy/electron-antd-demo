/*
 * @Author: your name
 * @Date: 2019-11-07 19:05:46
 * @LastEditTime: 2019-11-08 11:12:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /electron-antd-demo/src/renderer/utils/request.ts
 */
import { extend } from 'umi-request';
// 路由控制跳转
// import router from 'umi/router';
import { message } from 'antd';

const errorHandler = error => {
  if (error.code) {
    // 请求接口成功,返回有错误
    const msg = error.message;
    message.error(msg);
  } else {
    // console.log(error);
    message.error('请求失败,请重试');
    // console.log(JSON.stringify(error))
  }
  return false;
};

/**
 * 配置request请求时的默认参数
 */

const request = extend({
  // 默认错误处理
  errorHandler,
  // 默认请求是否带上cookie (omit-省略不传,include-携带cookie)
  credentials: 'omit',
  // 请求接口统一加"/api"前缀
  prefix: '/api',
  // credentials: 'include',
});

// 请求拦截配置
// request拦截器
// request.interceptors.request.use((options) => {
//   return options;
// });

// response拦截器
// 请求成功,返回的错误统一处理
request.interceptors.response.use(async response => {
  // console.log(response)
  const data = await response.clone().json();
  // console.log(typeof data.status)
  if (data.status !== 200) {
    // message.error(data.msg)
    // 错误提示抛出去(errorHandler处理)
    return Promise.reject(data || 'error');
  }
  return response;
});

export default request;
