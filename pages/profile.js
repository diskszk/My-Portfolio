import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import Link from 'next/link';

const Profile = () => {
  console.log("Profile");
  return (
    <Layout>
      <Head>
        <title>プロフィール | {siteTitle}</title>
      </Head>
      <h1>プロフィール</h1>
      <ul>
        <li>茨城県出身</li>
        <li>大卒</li>
        <li>25歳</li>
      </ul>
    </Layout>
  );
}

export default Profile;