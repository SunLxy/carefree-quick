import { app } from 'electron';
import * as path from 'path';
import { BrowserWindowStore } from './tools/BrowserWindow';

export class Main extends BrowserWindowStore {
  constructor() {
    super();
    app.on('ready', this.init.bind(this));
  }
  init() {
    const mainWindow = this.createBrowserWindow(
      {
        webPreferences: {
          preload: path.join(__dirname, './preload.js'),
        },
      },
      'main',
    );
    this.win = mainWindow;
    if (process.env.NODE_ENV === 'development') {
      mainWindow.loadURL('http://localhost:3000');
    } else {
      mainWindow.loadFile(path.join(__dirname, '../website/build/index.html'));
    }
  }
}
new Main();
