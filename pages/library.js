import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Contents from '../components/common/Contents';


const Library = () => {
  return (
    <Layout>
      <Head>
        <title>ライブラリ | {siteTitle}</title>
      </Head>

      <article className="page library">
        <h1>Library</h1>
        <p>いままで読んだ本を紹介します。</p>
        {/* <Contents
          datas={datas}
        /> */}
      </article>
    </Layout>
  );
}

export default Library;