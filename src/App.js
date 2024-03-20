import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Stories from './components/Stories';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header /> 
        <main>
          <Routes> 
            <Route path="/" element={<Home />} index />
            <Route path="/home" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;