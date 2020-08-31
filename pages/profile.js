import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import MyIcon from "../components/common/MyIcon";
import Info from "../components/profile/Info";
import AccountInfoContainer from '../components/profile/AccountInfoContainer';

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
        <div className="blank-middle" />
        <h1>Accounts</h1>
        <AccountInfoContainer />
      </article>
    </Layout>
  );
}

export default Profile;