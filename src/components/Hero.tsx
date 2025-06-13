import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"></div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-96 h-96 bg-pink-300/30 dark:bg-pink-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
                  Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse-slow">
                  Alex Thompson
                </span>
              </h1>
              
              <div className="mb-8">
                <p className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                  Full Stack Developer & UI/UX Designer
                </p>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                  Passionate about creating beautiful, functional digital experiences 
                  that make a difference. I transform ideas into reality through code and design.
                </p>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>

              {/* Enhanced CTA Button */}
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
              >
                <span className="mr-2">Get to know me</span>
                <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
              </button>
            </div>

            {/* Enhanced 3D Scene */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-cyan-400/10 to-pink-500/10 dark:from-cyan-400/20 dark:to-pink-500/20 rounded-full blur-2xl animate-float"></div>
                <ThreeScene className="relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;