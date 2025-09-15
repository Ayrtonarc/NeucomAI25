import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import SaaS from './components/SaaS';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import PrivacyNotice from './components/PrivacyNotice';
import Footer from './components/Footer';

// Estilos globales para fuente minimalista
const globalStyle = {
  fontFamily: 'Inter, sans-serif'
};

const App = () => (
  <div style={globalStyle}>
    <Navbar />
    <main>
      <Header />
      <Features />
      <SaaS />
      <Testimonials />
      <FAQ />
      <Contact />
      <PrivacyNotice />
    </main>
    <Footer />
  </div>
);

export default App;
