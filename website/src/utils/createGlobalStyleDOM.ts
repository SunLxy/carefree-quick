import { Portal } from '@/components/portal';
import { createElement } from 'react';
import { GlobalStyleComponent, DefaultTheme } from 'styled-components';
export const createGlobalStyleDOM = (styleDOM: GlobalStyleComponent<{}, DefaultTheme>) => {
  const globalStyle = new Portal();
  globalStyle.setOptions({
    id: 'global-style-c-root',
    children: createElement(styleDOM),
    timeout: 0,
  });
  /**进行挂载*/
  globalStyle.show();
};
