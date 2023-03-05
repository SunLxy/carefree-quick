import { Tips, TipsProps } from './tips';
import { Portal } from './../portal';
import Recat from 'react';
import { createGlobalStyleDOM } from '@/utils/createGlobalStyleDOM';
import { ToptipsGlobalStyle } from './styles';

export interface ToptipsBaseProps {
  text?: Recat.ReactNode;
  type: TipsProps['type'];
  timeout?: number;
}
let isCreateGlobalStyleDOM = false;

const ToptipsBase = (props: ToptipsBaseProps) => {
  const { text = '', type, timeout = 3000 } = props;
  if (!isCreateGlobalStyleDOM) {
    isCreateGlobalStyleDOM = true;
    /**把全局样式进行挂载*/
    createGlobalStyleDOM(ToptipsGlobalStyle);
  }
  const dom = new Portal();
  dom.setOptions({
    id: 'c-toptips-root',
    children: <Tips type={type}>{text}</Tips>,
    timeout,
  });
  dom.show();
  return dom;
};

export const Toptips = {
  success: (text: Recat.ReactNode, timeout = 3000) => ToptipsBase({ type: 'success', text, timeout }),
  info: (text: Recat.ReactNode, timeout = 3000) => ToptipsBase({ type: 'info', text, timeout }),
  error: (text: Recat.ReactNode, timeout = 3000) => ToptipsBase({ type: 'error', text, timeout }),
  warn: (text: Recat.ReactNode, timeout = 3000) => ToptipsBase({ type: 'warn', text, timeout }),
};
