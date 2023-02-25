import { app, dialog } from 'electron';
import * as path from 'path';
import { startServer } from 'carefree-quick-server';
import { BrowserWindowStore } from './tools/BrowserWindow';

export class Main extends BrowserWindowStore {
  constructor() {
    super();
    app.on('ready', this.init.bind(this));
  }
  async init() {
    const mainWindow = this.createBrowserWindow(
      {
        webPreferences: {
          preload: path.join(__dirname, './preload.js'),
        },
      },
      'main',
    );
    const result = await startServer();
    if (result === true) {
      this.win = mainWindow;
      // if (process.env.NODE_ENV === 'development') {
      //   mainWindow.loadURL('http://localhost:3000');
      // } else {
      mainWindow.loadFile(path.join(__dirname, './../website/index.html'));
      mainWindow.webContents.openDevTools();
      // }
    } else {
      dialog.showErrorBox('服务启动错误提示', JSON.stringify(result));
    }
  }
}
new Main();
