import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/mock';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import RotatingShapes from '../RotatingShapes';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black"
    >
      {/* 3D Rotating Shapes Background */}
      <RotatingShapes />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Available Badge */}
            {personalInfo.availableForWork && (
              <Badge
                variant="outline"
                className="mb-6 border-amber-500 text-amber-500 bg-amber-500/10 hover:bg-amber-500/20 px-4 py-2 text-sm font-medium inline-flex items-center"
              >
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                AVAILABLE FOR WORK
              </Badge>
            )}

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-amber-500 inline-block hover:scale-105 transition-transform">
                {personalInfo.name}
              </span>
            </h1>

            {/* Role */}
            <h2 className="text-2xl md:text-4xl font-light text-gray-700 dark:text-gray-300 mb-6">
              {personalInfo.role}
            </h2>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg transition-all transform hover:scale-105"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => scrollToSection('#projects')}
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-8 py-6 text-lg transition-all transform hover:scale-105"
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="https://github.com/ASHIFRZA18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-black transition-all transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashifrza/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-black transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-black transition-all transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image with 3D Effect */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-amber-500 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-amber-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-amber-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-amber-500 hover:text-amber-400 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;