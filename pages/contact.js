import { useState, useCallback } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from "../components/layout";
import ContactForms from '../components/contact/ContactForms';
import Modal from '../components/common/Modal'

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  });

  const openModal = useCallback((message) => {
    setMessage(message);
    setIsModalOpen(true);
  });

  // 入力した内容をスラックに飛ばす
  return (
    <Layout>
      <Head>
        <title>コンタクト | {siteTitle}</title>
      </Head>
      <Modal
        isModalOpsn={isModalOpen}
        closeModal={closeModal}
        message={message}
      />
      <article className="page contact">
        <h1>Contact</h1>
        <div className="blank-middle" />
        <ContactForms 
          isModalOpsn={isModalOpen}
          openModal={openModal}
        />
      </article>
    </Layout>
  );
}

export default Contact;