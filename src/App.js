import React from 'react';
import Experience from './components/Experience';
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Topbar from './components/Topbar';
import Contact from './components/Contact';
import Footer from './components/Footer';

import "./Style/App.css";


const App = () => {
  return (
    <>
    <Header/>
    <Topbar/>
    <Intro/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
