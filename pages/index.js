import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import Link from 'next/link';
import Contents from '../components/home/Contents';

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
    path: "#"
  }
}


const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="view-first">
        <div className="view-first-contents">
          <h1>Portfolio Site</h1>
          <p>Thanks for visiting!</p>
        </div>
        <img
          src="/images/first-view.jpg"
          alt="First View"
        />
      </div>
      <div className="blank-middle" />
      <Contents />
    </Layout>
  );

}

export default Home;