import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Books from '../components/library/Books';

const Library = () => {
  return (
    <Layout>
      <Head>
        <title>ライブラリ | {siteTitle}</title>
      </Head>

      <article className="page library">
        <h1>Library</h1>
        <p>いままで読んだ本を紹介します。</p>
        <Books />
      </article>
    </Layout>
  );
}

// getServerSideProps はNextに依存した方法なので今回は不採用
// export const getServerSideProps: GetServerSideProps = async () => {

//   // const fetchBookData = async (bookInfo: type.BookInfo): Promise<type.Response> => {
//   // const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookInfo.isbnCode;
//   const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:9784003101032'
//   const res = await fetch(url, { method: 'GET' });
//   const json: type.Response = await res.json();

//   const title = json.items[0].volumeInfo.title;
//   console.log(`title: ${title}`);
//   // return json;
//   // }
//   return { props: { title } };
// }
// type Props = {
//   title: string;
// }

export default Library;