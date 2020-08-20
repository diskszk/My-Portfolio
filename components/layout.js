import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const siteTitle = `Daizuke Suzukiのポートフォリオサイト`;

const Layout = ({ children, home }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ファビコン,メタ情報等を書いていく */}
      </Head>
      <header className={styles.header}>
        <div className={styles.navigation_nemu}>
          <IconButton className={styles.humbergerMenu}>
            <label>
              <MenuIcon />
            </label>
          </IconButton>
        </div>
        <div className={styles.header_top}>
          <Link href="/">
            <a>My Portfolio</a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;