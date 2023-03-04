import styled from 'styled-components';
import { useState } from 'react';
import { dictType } from '@/utils/dict';
import Button from '../button';
import Select from '../select';
import Input from '../input';

const SearchWarp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  box-sizing: border-box;
`;

const SearchInput = styled(Input)`
  height: 35px;
  width: 70%;
  padding: 0 17px;
  font-size: 18px;
  border-left: 0px;
  border-right: 0px;
  text-align: center;
  border-radius: 0px;
`;

const SelectBase = styled(Select)`
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
`;

const SearchButton = styled(Button)`
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  height: 35px;
  border: 1px solid #ccc;
  background: none;
  width: 100px;
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
  onSearch?: (item: { type: string; keyword: string }) => void;
}

const Search = (props: SearchProps) => {
  const { onSearch = () => {}, className = '', ...rest } = props;
  const [current, setCurrent] = useState<string>('');
  const [type, setType] = useState('');

  return (
    <SearchWarp className={`c-search ${className}`} {...rest}>
      <SelectBase value={type} onChange={(event) => setType(event.target.value)} options={dictType} />
      <SearchInput placeholder="请输入查询值" value={current} onChange={(event) => setCurrent(event.target.value)} />
      <SearchButton onClick={() => onSearch({ type, keyword: current })}>查询</SearchButton>
    </SearchWarp>
  );
};

export default Search;
