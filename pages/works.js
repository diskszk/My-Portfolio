import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import Link from 'next/link';

const Works = () => {
  return (
    <Layout>
      <Head>
        <title>作品集 | {siteTitle}</title>
      </Head>
      <h1>Works</h1>
      <div>
        ・計算機
        ・掲示板
      </div>
    </Layout>
  );
}

export default Works;