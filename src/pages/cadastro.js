import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const SubscribePage = () => (
  <Layout>
    <SEO title="Cadastre-se" />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSe_VDTPLNl-JUu87fb3OLsh7Ly8FBLwWM_YvhoITJ8cPrLe5g/viewform?embedded=true"
      width="640"
      height="2247"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Cadastre-se"
      style={{ maxWidth: '100vw', margin: '3rem auto' }}
    >
      Carregando…
    </iframe>
  </Layout>
);

export default SubscribePage;
