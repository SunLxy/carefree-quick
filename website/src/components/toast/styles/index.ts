import styled, { createGlobalStyle, css } from 'styled-components';
export const ToastGlobalStyle = createGlobalStyle`
  #c-toast-root {
    position: fixed;
    z-index: 5500;
    font-size: 14px;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    border-radius: 12px;
    box-sizing: border-box;
  }
`;

export const ToastBase = styled.div`
  padding: 12px 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 13.6em;
  min-height: 13.6em;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.9);
  background-color: #4c4c4c;
`;

export const ToastIconBase = styled.div<{ onlyIcon?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 8px;
  ${(props) => {
    const { onlyIcon } = props;
    if (onlyIcon) {
      return css`
        svg {
          width: 50px;
          height: 50px;
        }
      `;
    } else {
      return css``;
    }
  }}
`;

export const ToastContentBase = styled.div``;
