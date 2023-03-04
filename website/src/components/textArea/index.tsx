import styled from 'styled-components';
import React, { PropsWithoutRef, forwardRef } from 'react';

interface TextAreaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

const TextAreaBase = styled.textarea<TextAreaProps>`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  padding: 10px;
  min-width: 100%;
  max-width: 100%;
  color: #aaa;
  min-height: 50px;
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

const TextArea = forwardRef<HTMLTextAreaElement, PropsWithoutRef<TextAreaProps>>((props, ref) => {
  return <TextAreaBase {...props} ref={ref} />;
});
export default TextArea;
