import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Socials from './components/Socials';
import { useInView } from 'react-intersection-observer';

function App() {

  return (
    <div className="App">
      <LandingPage />
      <Nav />
      <About />      
      <Projects />
      <Contact />
      <Socials/>
      
    </div>
  );
}

export default App;
