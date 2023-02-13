/// <reference types="react-scripts" />

import * as Electron from 'electron';

declare var VERSION: string;

declare global {
  interface Window {
    electron?: typeof Electron
    platform?: string;
  }
}
