import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HeaderMenuItem from './HeaderMenuItem';
import HomeIcon from '@material-ui/icons/Home';

const HumbergerMenu = () => {
  return (
    <div className="humberger-menu">
      <input id="menu" type="checkbox" />
      <IconButton className="humberger-menu-icon">
        <label htmlFor="menu">
          <MenuIcon />
        </label>
      </IconButton>
      <label htmlFor="menu" className="humberger-menu-back"></label>
      <aside>
        <ul >
          <li>
            {/* close icon */}
            <IconButton>
              <label htmlFor="menu">
                <ArrowBackIosIcon />
              </label>
            </IconButton>
          </li>
          <HeaderMenuItem content="Home" path="/" />
          <HeaderMenuItem content="Profile" path="/profile" />
          <HeaderMenuItem content="Works" path="/works" />
        </ul>
        {/* <Footer /> */}
      </aside>
    </div>
  );
}

export default HumbergerMenu; 