import React from 'react';
import styled from 'styled-components';
import Button from '@/components/button';

interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onChange?: (page: number, pageSize: number) => void;
}
const PaginationWarp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;

const Pre = styled(Button)``;
const Next = styled(Button)``;
const Conter = styled.span`
  margin: 0px 15px;
`;

const Pagination = (props: PaginationProps) => {
  const { page, pageSize, total, onChange } = props;
  if (!total) {
    return <React.Fragment />;
  }
  const sumPage = Math.ceil(total / pageSize);
  const onPre = () => onChange && onChange(page - 1, pageSize);
  const onNext = () => onChange && onChange(page + 1, pageSize);
  return (
    <PaginationWarp>
      <Pre size="sm" onClick={onPre} disabled={page === 1}>
        上一页
      </Pre>
      <Conter>
        {page}/{sumPage}
      </Conter>
      <Next size="sm" onClick={onNext} disabled={page === sumPage || total === 0}>
        下一页
      </Next>
    </PaginationWarp>
  );
};
export default Pagination;
