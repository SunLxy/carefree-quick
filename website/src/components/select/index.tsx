import styled from 'styled-components';
import React, { PropsWithoutRef, forwardRef, useMemo } from 'react';

interface SelectProps
  extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options?: { label: React.ReactNode; value: number | string }[];
  isAll?: boolean;
}
const SelectOptionBase = styled.option``;

const SelectBase = styled.select<SelectProps>`
  border: 1px solid #ccc;
  min-width: 100px;
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
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

const Select = forwardRef<HTMLSelectElement, PropsWithoutRef<SelectProps>>((props, ref) => {
  const { options = [], isAll = true, ...rest } = props;
  const optionRender = useMemo(() => {
    return options.map((item, key) => {
      return (
        <SelectOptionBase key={key} value={item.value}>
          {item.label}
        </SelectOptionBase>
      );
    });
  }, [options]);
  return (
    <SelectBase {...rest} ref={ref}>
      {isAll && <SelectOptionBase>全部</SelectOptionBase>}
      {optionRender}
    </SelectBase>
  );
});
export default Select;
