import { BrowserWindow } from 'electron';
// 创建 BrowserWindow 窗口集合
export class BrowserWindowStore {
  // 当前的win窗口
  win?: BrowserWindow;
  /** window 窗口 */
  winList: Map<string, BrowserWindow> = new Map([]);
  /** 当前获取焦点的 window 窗口 */
  winKey?: string;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  // 存储 BrowserWindow 窗口
  setWin(name: string, win: BrowserWindow) {
    this.winList.set(name, win);
  }
  // 根据存储的名字取 BrowserWindow 窗口
  getWin(name: string) {
    return this.winList.get(name);
  }
  // 创建 BrowserWindow 窗口
  createBrowserWindow(options: Electron.BrowserWindowConstructorOptions, name?: string) {
    const newOptions: Electron.BrowserWindowConstructorOptions = {
      width: 800,
      height: 600,
      center: true, //是否在屏幕居中
      maximizable: true, // 最大化
      minimizable: true, // 全屏
      resizable: true, //窗口可改变大小
      ...(options || {}),
      webPreferences: {
        // 多线程
        nodeIntegrationInWorker: true,
        nodeIntegration: true,
        contextIsolation: false,
        ...(options.webPreferences || {}),
      },
    };
    const win = new BrowserWindow({
      ...newOptions,
    });
    if (name) {
      this.setWin(name, win);
    }
    return win;
  }
  /** 做窗口监听，当获取窗口焦点的时候进行判断当前是那个窗口(部分需要在单独窗口进行操作) */
  addListener(win: BrowserWindow, winKey: string) {
    win.addListener('focus', () => {
      if (winKey !== this.winKey) {
        this.winKey === winKey;
      }
    });
  }
}
