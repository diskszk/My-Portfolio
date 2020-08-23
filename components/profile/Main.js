import MyIcon from '../MyIcon';
import Info from './Info';


const Main = () => {
  return (
    <article className="profile">
      <MyIcon />
      <h2>Profile</h2>
      <div className="blank-middle" />
      <Info />
    </article>
  );
}

export default Main;