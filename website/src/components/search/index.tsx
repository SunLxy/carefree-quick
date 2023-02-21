import styled from 'styled-components';
import { useState } from 'react';

const SearchWarp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 35px;
  height: 35px;
  width: 88%;
  box-sizing: border-box;
  padding: 0 17px;
  font-size: 18px;
  color: #bbb;
  text-align: center;
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

interface SearchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
}

const Search = (props: SearchProps) => {
  const { value = '', onChange, className = '', ...rest } = props;
  const [current, setCurrent] = useState(value);

  const newCurrentValue = Reflect.has(props, value) ? value : current;

  const onValueChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
    if (!Reflect.has(props, value)) {
      setCurrent(newValue);
    }
  };

  return (
    <SearchWarp className={`c-search ${className}`} {...rest}>
      <SearchInput
        placeholder="请输入查询值"
        value={newCurrentValue}
        onChange={(event) => onValueChange(event.target.value)}
      />
    </SearchWarp>
  );
};

export default Search;
