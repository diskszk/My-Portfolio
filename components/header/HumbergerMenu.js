import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CodeIcon from '@material-ui/icons/Code';   
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmailIcon from '@material-ui/icons/Email';

import HeaderMenuItem from './HeaderMenuItem';
import {pages} from '../layout';

const HumbergerMenu = () => {


  const sideMenus = ["Home", "Profile", "Works", "Studies"];

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
        <ul className="humberger-menu-sidemenu">
          <li>
            {/* close icon */}
            <IconButton>
              <label htmlFor="menu">
                <ArrowBackIosIcon />
              </label>
            </IconButton>
          </li>
          <li>
            <HomeIcon />
            <HeaderMenuItem page={pages.home} />
          </li>
          <li>
            <AccountBoxIcon />
            <HeaderMenuItem page={pages.profile} />
          </li>
          <li>
            <CodeIcon />
            <HeaderMenuItem page={pages.works} />
          </li>
          <li>
            <MenuBookIcon />
            <HeaderMenuItem page={pages.studies} />
          </li>
          <li>
            <EmailIcon />
            <HeaderMenuItem page={pages.contact} />
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default HumbergerMenu; 