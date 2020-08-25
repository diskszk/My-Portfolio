import FirstView from './FirsrView';
import Contents from './Contents';

const Home = () => {
  return (
    <article>
      <FirstView />
      <div className="blank-middle" />
      <Contents />
    </article>
  );
}

export default Home;