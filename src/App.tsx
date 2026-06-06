import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white selection:bg-brand-primary/20 selection:text-brand-dark">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Specialties />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
