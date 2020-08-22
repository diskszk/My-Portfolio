import Link from 'next/link';
import HumbergerMenu from './HumbergerMenu';

const Header = () => {
  return (
    <header>
      <HumbergerMenu />
      <div className="header-top">
        <Link href="/">
          <a>My Portfolio</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;