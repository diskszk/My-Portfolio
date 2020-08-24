import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import MyIcon from "../components/MyIcon";
import Info from "../components/profile/Info";

const Profile = () => {
  return (
    <Layout>
      <Head>
        <title>プロフィール | {siteTitle}</title>
      </Head>
        <article className="page profile">
        <MyIcon />
        <h1>Profile</h1>
        <div className="blank-middle" />
        <Info />
      </article>
    </Layout>
  );
}

export default Profile;