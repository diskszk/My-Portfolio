import Head from 'next/head';
import Header from './header/Header';
import Footer from './footer/Footer';

export const siteTitle = `Daizuke Suzukiのポートフォリオサイト`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ファビコン,メタ情報等を書いていく */}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;