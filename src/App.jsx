import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import PromoBar from './components/promoBar';
import Hero from './components/hero';
import OctBanner from './components/octBanner';
import TrustSignals from './components/trustSignals';
import Feature from './components/feature';
import Product from './components/product';
import Testimonials from './components/testimonials';
import Offer from './components/offer';
import FAQ from './components/faq';
import FinalCta from './components/finalCta';
import StickyCtaButton from './components/stickyCtaButton';
import Footer from './components/footer';
import Service from './components/service';
import Contact from './components/contact';
import About from './components/about';
import Glasses from './components/glasses';


const HomePage = () => (
  <>
    <Hero />
    <OctBanner />
    <TrustSignals />
    <Feature />
    <Product />
    <Testimonials />
    <Offer />
    <FAQ />
    <FinalCta />
  </>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <PromoBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/glasses" element={<Glasses />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
      <StickyCtaButton />
    </div>
  );
};

export default App;