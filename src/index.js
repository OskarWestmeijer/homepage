import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Values from './components/Values';
import Projects from './components/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/values" element={<Values />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
