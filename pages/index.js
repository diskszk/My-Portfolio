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
        <div className={utilStyles.viewFirst_contants}>
          <h1>Portfolio Site</h1>
          {/* <h1>Daisuke Suzuki's Portfolio Site</h1> */}
          <p>Thanks for visiting!</p>
          <div className={utilStyles.buttonContainer}>
            <Link href="/profile">
              <a className={utilStyles.viewFirst_button}>Profile</a>
            </Link>
            <Link href="/works">
              <a className={utilStyles.viewFirst_button}>Works</a>
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