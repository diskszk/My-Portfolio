import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import Contents from '../components/common/Contents';
import { getSortedWorksData } from '../lib/works';

export const getStaticProps = async () => {
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allWorksData
    }
  }
}

const Works = ({ allWorksData }) => {
  const datas = allWorksData;

  return (
    <Layout>
      <Head>
        <title>作品集 | {siteTitle}</title>
      </Head>
      <article className="page works">
        <h1>Works</h1>
        <p>制作物を紹介します。</p>
        <Contents
          datas={datas}
        />
      </article>
    </Layout>
  );
}

export default Works;