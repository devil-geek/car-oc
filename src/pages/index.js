import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import About from '../components/about';
import Portfolio from '../components/portfolio';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`, 'javascript', 'css', 'sass', 'electron', 'dev']} />
    <Header />
    <About />
    <Portfolio />
  </Layout>
);

export default IndexPage;
