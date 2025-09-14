import React from 'react';
import { Bolt } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="relative bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Alon Shmoelof</h3>
        <p className="text-slate-400 mb-6">
          Made with ❤️ for visual storytelling & AI innovation
        </p>
        <p className="text-sm text-slate-500">
          © 2025 Alon Shmoelof. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;