import styled from 'styled-components';
import { utc2beijing } from '@/utils';
import { AnswerItemType } from '../../interface';

const ListItemWarp = styled.div`
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 5px;
  & + & {
    margin-top: 15px;
  }
`;
const ListItemBody = styled.div`
  font-size: 12px;
  padding: 5px 8px;
  box-sizing: border-box;
`;

const ListItemTime = styled.div`
  color: #ccc;
  font-size: 12px;
  text-align: right;
`;

interface ListItemProps {
  rowItem: AnswerItemType;
}

function ListItem(props: ListItemProps) {
  const { rowItem } = props;
  return (
    <ListItemWarp>
      <ListItemBody>{rowItem.content}</ListItemBody>
      <ListItemTime>创建时间：{rowItem.createTime && utc2beijing(rowItem.createTime)}</ListItemTime>
    </ListItemWarp>
  );
}
export default ListItem;
