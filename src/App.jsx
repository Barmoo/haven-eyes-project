import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Feature from './components/feature';
import Product from './components/product';
import Footer from './components/footer';
import Offer from './components/offer';
import Service from './components/service';
import Contact from './components/contact';
import About from './components/about';

const HomePage = () => (
  <>
    <Hero />
    <Feature />
    <Product />
    <Offer />
    <Service />
  </>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;