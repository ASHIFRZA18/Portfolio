import React from "react";
import "./App.css";
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Skills from './components/home/Skills';
import Experience from './components/home/Experience';
import Projects from './components/home/Projects';
import Blog from './components/home/Blog';
import Contact from './components/home/Contact';
import CustomCursor from './components/CustomCursor';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <ThemeProvider>
      <div className="App bg-black dark:bg-black text-white dark:text-white overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
