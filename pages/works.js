import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import Link from 'next/link';
import UnderEdit from '../components/UnderEdit';

const Works = () => {
  return (
    <Layout>
      <Head>
        <title>作品集 | {siteTitle}</title>
      </Head>
      <h1>Works</h1>
      <UnderEdit />
    </Layout>
  );
}

export default Works;