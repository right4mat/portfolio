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

  const [refHome, inViewHome, entryHome] = useInView({
    /* Optional options */
    threshold: 0.75,
  })
  const [refAbout, inViewAbout, entryAbout] = useInView({
    /* Optional options */
    threshold: 0.75,
  })
  const [refProjects, inViewProjects, entryProjects] = useInView({
    /* Optional options */
    threshold: 0.25,
  })
  const [refContact, inViewContact, entryContact] = useInView({
    /* Optional options */
    threshold: 0.75,
  })
  console.log(inViewProjects)
  return (
    <div className="App">
      <LandingPage inView={refHome}/>
      <Nav home={inViewHome} about={inViewAbout} projects={inViewProjects} contact={inViewContact} />
      <About inView={refAbout}/>      
      <Projects inView={refProjects}/>
      <Contact inView={refContact}/>
      <Socials/>
      
    </div>
  );
}

export default App;
