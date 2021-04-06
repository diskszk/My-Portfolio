import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Home from "../components/home/Home";

const Index = () => {
  const webHookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || "";
  console.log(webHookUrl);  

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home />
    </Layout>
  );
};

export default Index;
