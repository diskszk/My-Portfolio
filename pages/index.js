import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.viewFirst}>
        <div className={utilStyles.transitions}>
          <h1>Portforio Site</h1>
          <div>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
            <Link href="/works">
              <a>Works</a>
            </Link>
          </div>
        </div>
        <img
          src="/images/first-view.jpg"
          alt="First View"
        />
      </div>
    </Layout>
  );

}

export default Home;