import Head from 'next/head';
import Header from './header/Header';
import Footer from './footer/Footer';

export const siteTitle = `Daizuke Suzukiのポートフォリオサイト`;

export const pages = {
  home: {
    contents: "Home",
    path: "/"
  },
  profile: {
    contents: "Profile",
    path: "/profile"
  },
  works: {
    contents: "Works",
    path: "/works"
  },
  studies: {
    contents: "Studies",
    path: "#"
  },
  contact: {
    contents: "Contact",
    path: "/contact"
  }
}

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ファビコン,メタ情報等を書いていく */}
      </Head>
      <Header />
      <main>{children}</main>
      <div className="blank-middle" />
      <Footer />
    </>
  );
}

export default Layout;