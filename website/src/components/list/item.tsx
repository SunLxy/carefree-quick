import styled from 'styled-components';
import { ListItemType } from '../../interface';

const ListItemWarp = styled.div`
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
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
}

function ListItem(props: ListItemProps) {
  return (
    <ListItemWarp>
      <ListItemTitle>标题</ListItemTitle>
      <ListItemBody>内容</ListItemBody>
      <ListItemFooter>
        <ListItemLabel>标签</ListItemLabel>
        <ListItemTime>2022-12-12 12:12:12</ListItemTime>
      </ListItemFooter>
    </ListItemWarp>
  );
}
export default ListItem;
