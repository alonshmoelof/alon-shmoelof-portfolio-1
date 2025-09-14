import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="cta" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Want to see more?</h3>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm always excited to take on new challenges and create amazing video content. Let's discuss your next project!
        </p>
        {/* Change Button to anchor link for working navigation */}
        <Button
          asChild
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-7 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_10px_20px_rgba(220,38,38,0.25)]"
        >
          <a href="#contact" aria-label="Get In Touch">Get In Touch</a>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;