import React from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
