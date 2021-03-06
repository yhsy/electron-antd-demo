/*
 * @Author: your name
 * @Date: 2019-11-07 18:09:10
 * @LastEditTime: 2019-11-08 13:51:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /electron-antd-demo/src/main/main.ts
 */
import * as path from 'path';
import * as url from 'url';
import { app, BrowserWindow } from 'electron';
import setApplicationMenu from './utils/menu';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    // 无框窗口
    frame: false,
    // 窗口标题栏的样式
    titleBarStyle: 'hidden'
  });

  setApplicationMenu();

  global.title = '全局标题';

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:8000/#/');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, './dist/renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
