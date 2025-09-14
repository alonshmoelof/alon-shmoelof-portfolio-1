import React from 'react';

const servicesData = [
  {
    title: 'Pre-Production',
    description: 'Concept development, AI-assisted storyboarding, scriptwriting, and project planning',
  },
  {
    title: 'Production',
    description: 'Professional filming, lighting, audio recording, and on-set direction',
  },
  {
    title: 'Post-Production',
    description: 'AI-enhanced video editing, color grading, motion graphics, and sound design',
  },
];

const ServicesSection = () => {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      {servicesData.map((service, index) => (
        <div key={index} className="text-center p-6">
          <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
          <p className="text-gray-300">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;