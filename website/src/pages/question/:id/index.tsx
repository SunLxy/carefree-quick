import { useParams } from 'react-router-dom';
const Index = () => {
  const params = useParams();
  console.log('params', params);
  return <div>question info</div>;
};
export default Index;
