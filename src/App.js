import React from 'react';
import Navbar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './components/Hero';
import Promo from './components/Promo';
import Reviews from './components/Reviews';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
     <>
     <ParallaxProvider>
     <Navbar />
     <Hero />
     <Promo />
     <Reviews />
     <Banner />
     <Menu />
     <Footer />
     </ParallaxProvider>
     </>
  )
}

export default App;