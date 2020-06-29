import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
