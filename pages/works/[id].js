import Head from "next/head";
import Layout from "../../components/layout";
import { getAllWorkIds, getWorkData } from "../../lib/works";

import Link from "next/link";

export const getStaticPaths = async () => {
  // {params: {id: '${hogehoge} } を複数内包した配列を受けとる
  const paths = getAllWorkIds();

  // fallback: false とすることで存在しないURLにアクセスしたとき404画面を返す
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const workData = await getWorkData(params.id);
  return {
    props: {
      workData,
    },
  };
};

// 記事の見た目
const Work = ({ workData }) => {
  return (
    <Layout>
      <Head>
        <title>{workData.title}</title>
      </Head>
      <article className="page works-post">
        <h1>{workData.name}</h1>
        <div className="blank-middle" />
        <div className="works-post-link">
          <div className="works-post-image-area">
            <a
              href={workData.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src={workData.image} alt={workData.id}/> */}
            </a>
          </div>
          <div className="works-post-github">
            <a
              href={workData.gitRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>GitHubリポジトリはこちら</p>
              <img
                className="github"
                src="/images/icons/GitHub-Mark-64px.png"
              />
            </a>
          </div>
        </div>
        <div className="works-post-content">
          <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
        </div>
        <Link href="/works">
          <a className="works-post-back">もどる</a>
        </Link>
      </article>
    </Layout>
  );
};
export default Work;
