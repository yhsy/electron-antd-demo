/*
 * @Author: your name
 * @Date: 2019-11-07 18:09:10
 * @LastEditTime: 2019-11-08 10:20:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /electron-antd-demo/src/renderer/config/config.js
 */
const cwd = process.cwd();
const path = require('path');

export default {
  history: 'hash',
  outputPath: `../../dist/renderer`,
  publicPath: './',
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        // 桌面应用名称
        title: 'electron-antd-demo',
        dll: true,
        routes: {
          exclude: [],
        },
        hardSource: false,
        routes: {
          exclude: [/components/],
        },
      },
    ],
  ],
  routes: [
    {
      path: '/',
      component: './home',
    },
    {
      path: '/list',
      component: './list',
    },
  ],
  // 配置路径的别名
  alias: {
    '@': path.resolve(__dirname, 'src/renderer/'),
    'Utils': path.resolve(__dirname, 'src/renderer/utils/'),
    'Assets': path.resolve(__dirname, 'src/renderer/assets/')
  }
};
