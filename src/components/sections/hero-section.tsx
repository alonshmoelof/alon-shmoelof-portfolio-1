import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-background-tertiary">
      <iframe
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[177.78vh] h-screen md:w-full md:h-full"
        src="https://www.youtube.com/embed/JDWNsz6lPWU?autoplay=1&mute=1&loop=1&playlist=JDWNsz6lPWU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center text-text-primary">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Alon Shmoelof
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-[672px] mx-auto mb-12 leading-relaxed">
            From concept to final cut, I handle every aspect of production with meticulous attention to detail
          </p>
          <div className="flex justify-center">
            <a href="#portfolio" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;