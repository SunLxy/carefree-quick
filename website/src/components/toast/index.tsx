import { Portal } from './../portal';
import Recat from 'react';
import { Toasts } from './toast';
import { ToastGlobalStyle } from './styles';
import { createGlobalStyleDOM } from '@/utils/createGlobalStyleDOM';

export interface ToastBaseProps {
  text?: Recat.ReactNode;
  type: 'success' | 'info' | 'error' | 'warn';
  timeout?: number;
}
let dom: Portal;
const ToastBase = (props: ToastBaseProps) => {
  const { text = '', type, timeout = 3000 } = props;
  if (!dom) {
    /**把全局样式进行挂载*/
    createGlobalStyleDOM(ToastGlobalStyle);
    dom = new Portal();
  }
  dom.setOptions({
    id: 'c-toast-root',
    children: <Toasts type={type}>{text}</Toasts>,
    timeout,
  });
  dom.show();
  return dom;
};
export const Toast = {
  success: (text?: Recat.ReactNode, timeout = 3000) => ToastBase({ type: 'success', text, timeout }),
  info: (text?: Recat.ReactNode, timeout = 3000) => ToastBase({ type: 'info', text, timeout }),
  error: (text?: Recat.ReactNode, timeout = 3000) => ToastBase({ type: 'error', text, timeout }),
  warn: (text?: Recat.ReactNode, timeout = 3000) => ToastBase({ type: 'warn', text, timeout }),
};
