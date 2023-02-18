import styled from 'styled-components';
import { ListItemType } from '../../interface';

const ListItemWarp = styled.div``;
interface ListItemProps {
  rowItem: ListItemType;
}

function ListItem(props: ListItemProps) {
  return <ListItemWarp></ListItemWarp>;
}
export default ListItem;
