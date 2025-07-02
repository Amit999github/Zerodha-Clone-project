import './App.css'
import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';
import ProductPage from './landing_page/products/ProductPage';
import NotFound from './landing_page/NotFound/NotFound';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
