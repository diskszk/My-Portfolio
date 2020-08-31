import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import Contents from '../components/common/Contents';
import UnderEdit from '../components/UnderEdit';
// import { datas } from "../components/works/WorksDatas";
import { getSortedPostsData } from '../lib/posts';

// export async function getStaticProps() {
export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

const Works = ({ allPostsData }) => {
  const datas = allPostsData;

  return (
    <Layout>
      <Head>
        <title>作品集 | {siteTitle}</title>
      </Head>
      <article className="page works">
        <h1>Works</h1>
        <p>いままで作成した作品を紹介します。</p>
        <Contents
          datas={datas}
        />
      </article>
    </Layout>
  );
}

export default Works;