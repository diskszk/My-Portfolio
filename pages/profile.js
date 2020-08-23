import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import Main from "../components/profile/Main";

const Profile = () => {
  return (
    <Layout>
      <Head>
        <title>プロフィール | {siteTitle}</title>
      </Head>
      <Main />
    </Layout>
  );
}

export default Profile;