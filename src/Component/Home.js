import React from 'react';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Copyright from './Component/Copyright';
import Banner from './Banner';
import Blog from './Blog';
const Home = () => {
    return (
       <>
      <Banner></Banner>
      <Main></Main>
      <Blog></Blog>
      <Footer></Footer>
      <Copyright></Copyright>
    
    </>
    );
};

export default Home;