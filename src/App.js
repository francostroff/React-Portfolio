// import logo from './images/logo.png';
import React from "react";
import Wrapper from "./components/Wrapper";
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavTabs from './components/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from './components/Footer';

function App() {
  return (
    <Wrapper>
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      <Footer />
      <div> 
   </div>
  </div>
 </Router>
  </Wrapper>
  );
}
export default App;
