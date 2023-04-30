import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Bannermsg from './Bannermsg';
import Services from './Services';
import Products from './Products';
import Footer from './Footer';
import FAQs from './FAQs';

function App() {
  return (
    <div>
        <Nav />
        <Banner />
        <Bannermsg />
        <Services />
        <Products />
        <FAQs />
        <Footer />
    </div>
  )
}

export default App