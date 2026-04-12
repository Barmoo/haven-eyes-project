import React from 'react';
import Navbar from './components/navbar'
import Hero from './components/hero'
import Feature from './components/feature'
import Product from './components/product'
import Footer from './components/footer'
import Offer from './components/offer'
import Service from './components/service'
import Contact from './components/contact'
import About from './components/about'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Product />
      <Offer />
      <Service />
      <Footer />
      <Contact />
      <About />
      
    </div>
     )
};
export default App