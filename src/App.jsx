import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import PromoBar from './components/promoBar';
import Hero from './components/hero';
import OctBanner from './components/octBanner';
import TrustSignals from './components/trustSignals';
import Feature from './components/feature';
import Product from './components/product';
import Testimonials from './components/testimonials';
import FAQ from './components/faq';
import FinalCta from './components/finalCta';
import StickyCtaButton from './components/stickyCtaButton';
import Footer from './components/footer';
import Service from './components/service';
import Contact from './components/contact';
import About from './components/about';
import Glasses from './components/glasses';
import Payment from './components/payment';


const HomePage = () => (
  <>
    <Hero />
    <OctBanner />
    <TrustSignals />
    <Feature />
    <Product />
    <Testimonials />
    <FAQ />
    <FinalCta />
  </>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const navbarOffset = 96;
        const top = element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

const App = () => {
  return (
    <div className="min-h-screen">
      <PromoBar />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/glasses" element={<Glasses />} />
        <Route path="/services" element={<Service />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
      <StickyCtaButton />
    </div>
  );
};

export default App;