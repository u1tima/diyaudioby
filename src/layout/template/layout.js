import React from 'react';
import Wrapper from '../wrapper/wrapper';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Main from '../main/main';
import Footer from '../footer/footer';

const Layout = (props) => {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
