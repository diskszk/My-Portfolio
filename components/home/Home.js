import FirstView from './FirsrView';
import Contents from '../common/Contents';
import { datas } from './ContentsDatas';

const Home = () => {
  return (
    <article>
      <FirstView />
      <div className="blank-middle" />
      <Contents 
        datas={datas}
      />
    </article>
  );
}

export default Home;