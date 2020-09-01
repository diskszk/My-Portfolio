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

// 記事の見た目
const Post = ({ postData }) => {

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="page works-post">
        <h1>{postData.name}</h1>
        <div className="blank-middle" />
        <div className="works-post-link">
          <div className="works-post-image-area">
            <a href={postData.siteUrl} target="_blank" rel="noopener noreferrer">
              <img src={postData.image} alt={postData.id}/>
            </a>
          </div>
          <div className="works-post-github">
            <a href={postData.gitRepo} target="_blank" rel="noopener noreferrer">
              <p>GitHubリポジトリはこちら</p>
              <img className="github" src="/images/icons/GitHub-Mark-64px.png" />
            </a>
          </div>
        </div>
        <div className="works-post-content">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <Link href="/works" >
          <a className="works-post-back">
           もどる
          </a>
        </Link>
      </article> 
    </Layout>
  );
}
export default Post;
