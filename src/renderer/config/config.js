/*
 * @Author: your name
 * @Date: 2019-11-07 18:09:10
 * @LastEditTime: 2019-11-07 18:19:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /electron-antd-demo/src/renderer/config/config.js
 */
const cwd = process.cwd();

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
      component: './index',
    },
  ],
};
