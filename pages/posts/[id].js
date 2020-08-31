import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

import Link from 'next/link';

export const getStaticPaths = async () => {

  // {params: {id: '${hogehoge} } を複数内包した配列を受けとる
  const paths = getAllPostIds();

  // fallback: false とすることで存在しないURLにアクセスしたとき404画面を返す
  return {
    paths, 
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

const Post = ({ postData }) => {

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="page">
        {postData.title}
        <br />
        {postData.id}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Link href="/works">
          <a>
           もどる
          </a>
        </Link>
      </article> 
    </Layout>
  );
}
export default Post;
