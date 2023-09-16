import React from 'react';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
