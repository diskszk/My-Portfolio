import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import Link from 'next/link';
import Home from '../components/home/Home';
// import Contents from '../components/home/Contents';


const Main = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home />
    </Layout>
  );
}

export default Main;