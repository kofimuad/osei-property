import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Teams from './components/Teams';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Teams />
      <About />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
