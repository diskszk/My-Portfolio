import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = ` Daizuke Suzukiのポートフォリオサイト`;

const Layout = ({ children, home }) => {
  return (
    <div>
      <Head>
        {/* ファビコン,メタ情報等を書いていく */}
      </Head>

      {/* Home画面ではheaderを非表示 */}
      {!home && (
      <header>
        <div>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </div>
        <div>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </header>
      )}
      <main>{children}</main>
    </div>
  );
}

export default Layout;