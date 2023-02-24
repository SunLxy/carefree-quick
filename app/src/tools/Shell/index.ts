import { XtermServer } from 'carefree-xterm-server';
import { app } from 'electron';
// 重写命令环境指向
const newPATH = [process.env.PATH, '/usr/local/bin'].join(':');
process.env.PATH = newPATH;

export class InitShell {
  server?: XtermServer;
  constructor() {
    this.initWss();
    app.on('before-quit', () => {
      /**退出之前，关闭所有进程*/
      if (this.server) {
        this.server.killAll();
      }
    });
  }

  initWss() {
    this.server = new XtermServer();
  }
}
