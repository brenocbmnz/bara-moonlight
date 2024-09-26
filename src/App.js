import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArrowContext } from './ArrowContext';
import Header from './components/Header';
import Arrow from './components/ArrowComponent';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Aegenwulfs from './components/Aegenwulfs';
import Belmorn from './components/Belmorn';
import Rokayas from './components/Rokayas';
import './App.css';

function App() {
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  return (
    <ArrowContext.Provider value={{ isArrowVisible, setIsArrowVisible }}>
      <BrowserRouter> 
        <div className="App">
          <Header /> 
          <Arrow />
          <main>
            <Routes> 
              <Route path="/" element={<Home />} index />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/the-aegenwulfs" element={<Aegenwulfs />} />
              <Route path="/belmorn" element={<Belmorn />} />
              <Route path="/rokayas" element={<Rokayas />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ArrowContext.Provider>
  );
}

export default App;