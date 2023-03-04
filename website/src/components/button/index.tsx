import styled, { css } from 'styled-components';
import React, { PropsWithoutRef } from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: 'sm' | 'none' | 'lg';
}

const ButtonBase = styled.button<ButtonProps>`
  height: 30px;
  box-sizing: border-box;
  font-size: 14px;
  padding-left: 20px;
  padding-right: 20px;
  ${(props) => {
    const { size } = props;
    if (size === 'sm') {
      return css`
        height: 25px;
        font-size: 12px;
        padding-left: 15px;
        padding-right: 15px;
      `;
    } else if (size === 'lg') {
      return css`
        height: 40px;
        font-size: 16px;
        padding-left: 20px;
        padding-right: 20px;
      `;
    }
    return css``;
  }}
`;

const Button = React.forwardRef<HTMLButtonElement, PropsWithoutRef<ButtonProps>>((props, ref) => {
  return <ButtonBase {...props} ref={ref} />;
});
export default Button;
