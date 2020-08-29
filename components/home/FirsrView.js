import MyIcon from "../common/MyIcon";

const FirstView = () => {
  return (
      <div className="view-first">
        <div className="view-first-contents">
          <h1>  My Portfolio Site</h1>
          <MyIcon />
          <p>Thanks for visiting!</p>
        </div>
        <img
          className="home-background-image"
          src="/images/first-view.jpg"
          alt="First View"
        />
      </div>
  );
}

export default FirstView;