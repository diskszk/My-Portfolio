import Head from 'next/head';
import Layout, { siteTitle } from "../components/layout";
import ContactForms from '../components/contact/ContactForms';


const Contact = () => {

  // 入力フォームの作成-material ui
  // 入力した内容をスラックに飛ばす
  
  return (
    <Layout>
      <Head>
        <title>コンタクト | {siteTitle}</title>
      </Head>
      <article className="page contact">
        
        <div className="blank-middle" />
        <div className="blank-middle" />
        <h1>Contact</h1>
        <div className="blank-middle" />
        <ContactForms />
        <div className="blank-middle" />
        <div className="blank-middle" />
      </article>
    </Layout>
  );
}

export default Contact;