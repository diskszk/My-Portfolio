import FirstView from './FirsrView';
import Contents from './Contents';

const Home = () => {
  return (
    <main>
      <FirstView />
      <div className="blank-middle" />
      <Contents />
    </main>
  );
}

export default Home;