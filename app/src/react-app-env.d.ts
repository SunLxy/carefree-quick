import * as Electron from 'electron';

declare let VERSION: string;

declare global {
  interface Window {
    electron?: typeof Electron;
    platform?: string;
  }
}
