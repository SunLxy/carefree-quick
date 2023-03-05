import styled, { createGlobalStyle, css } from 'styled-components';
import { TipsProps } from './../tips';
export const ToptipsGlobalStyle = createGlobalStyle`
  #c-toptips-root {
    position: fixed;
    z-index: 6666;
    font-size: 14px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transition: all 300ms;
  }
`;

export const ToptipsBase = styled.div<{ type: TipsProps['type'] }>`
  position: sticky;
  top: 0px;
  width: 13.6em;
  font-size: 16px;
  color: #000;
  margin-top: 10px;
  border-radius: 3px;
  padding: 5px;
  font-size: 14px;
  transition: all 300ms;
  display: flex;
  justify-content: flex-start;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: 0 0;
    border: 1px solid transform;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    box-sizing: border-box;
  }
  ${(props) => {
    const { type } = props;
    if (type === 'success') {
      return css`
        background-color: #f6ffed;
        ::after {
          border-color: #b7eb8f;
        }
      `;
    } else if (type === 'info') {
      return css`
        background-color: #e6f4ff;
        ::after {
          border-color: #91caff;
        }
      `;
    } else if (type === 'error') {
      return css`
        background-color: #fff1f0;
        ::after {
          border-color: #ffa39e;
        }
      `;
    } else if (type === 'warn') {
      return css`
        background-color: #fffbe6;
        ::after {
          border-color: #ffe58f;
        }
      `;
    } else {
      return '';
    }
  }}
`;
export const ToptipsBaseIcon = styled.div`
  width: 21px;
  text-align: left;
  padding-top: 2px;
`;

export const ToptipsBaseContent = styled.div`
  flex: 1;
`;
