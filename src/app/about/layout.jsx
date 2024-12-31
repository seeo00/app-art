import React from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';

const AboutLayout = ({ children }) => {
  return (
    <>
      <Header type="type2" />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default AboutLayout;
