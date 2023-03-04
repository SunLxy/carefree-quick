import styled from 'styled-components';
import React, { PropsWithoutRef, forwardRef } from 'react';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const InputBase = styled.input<InputProps>`
  border: 1px solid #ccc;
  height: 35px;
  box-sizing: border-box;
  padding: 0 8px;
  font-size: 14px;
  color: #bbb;
  width: 100%;
  border-radius: 3px;
  ::placeholder {
    color: #ccc;
    font-size: 14px;
  }
  :active,
  :focus {
    outline: none;
    border-color: #87d068;
  }
`;

const Input = forwardRef<HTMLInputElement, PropsWithoutRef<InputProps>>((props, ref) => {
  return <InputBase {...props} ref={ref} />;
});
export default Input;
