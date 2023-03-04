import styled from 'styled-components';
import { ListItemType } from '../../interface';
import { utc2beijing } from '@/utils';

const ListItemWarp = styled.div`
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
  & + & {
    margin-top: 15px;
  }
`;
const ListItemTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden; //超出的隐藏
  text-overflow: ellipsis; //省略号
  white-space: nowrap; //强制一行显示
  border-bottom: 1px solid #eee;
  padding: 5px 8px;
  box-sizing: border-box;
`;
const ListItemBody = styled.div`
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 这里是超出几行省略 */
  overflow: hidden;
  font-size: 14px;
  padding: 5px 8px;
  box-sizing: border-box;
`;
const ListItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding: 5px 8px;
`;
const ListItemLabel = styled.div``;
const ListItemTime = styled.div`
  color: #ccc;
`;

interface ListItemProps {
  rowItem: ListItemType;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

function ListItem(props: ListItemProps) {
  const { onClick, rowItem } = props;
  return (
    <ListItemWarp onDoubleClick={onClick}>
      <ListItemTitle>{rowItem.title}</ListItemTitle>
      <ListItemBody>{rowItem.content}</ListItemBody>
      <ListItemFooter>
        <ListItemLabel>{rowItem.type}</ListItemLabel>
        <ListItemTime>创建时间：{rowItem.createTime && utc2beijing(rowItem.createTime)}</ListItemTime>
      </ListItemFooter>
    </ListItemWarp>
  );
}
export default ListItem;
