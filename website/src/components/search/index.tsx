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
  onSearch: () => void;
  item: { type?: string; keyword?: string };
  onChange: (item: { type?: string; keyword?: string }) => void;
}

const Search = (props: SearchProps) => {
  const { item, onSearch = () => {}, className = '', onChange, ...rest } = props;

  const onValuesChanges = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    onChange({ [field]: event.target.value });
  };

  return (
    <SearchWarp className={`c-search ${className}`} {...rest}>
      <SelectBase value={item.type || ''} onChange={(event) => onValuesChanges(event, 'type')} options={dictType} />
      <SearchInput
        placeholder="请输入查询值"
        value={item.keyword || ''}
        onChange={(event) => onValuesChanges(event, 'keyword')}
      />
      <SearchButton onClick={() => onSearch()}>查询</SearchButton>
    </SearchWarp>
  );
};

export default Search;
