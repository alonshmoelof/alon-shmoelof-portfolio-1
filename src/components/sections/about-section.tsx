import { Award, Clock, Film, Users } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Film className="w-12 h-12 text-accent-red mx-auto mb-4" />,
      value: "600+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="w-12 h-12 text-accent-red mx-auto mb-4" />,
      value: "99+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-12 h-12 text-accent-red mx-auto mb-4" />,
      value: "10+",
      label: "Awards Won",
    },
    {
      icon: <Clock className="w-12 h-12 text-accent-red mx-auto mb-4" />,
      value: "15+",
      label: "Years Experience",
    },
  ];

  const services = [
    {
      title: "Pre-Production",
      description:
        "Concept development, AI-assisted storyboarding, scriptwriting, and project planning",
    },
    {
      title: "Production",
      description: "Professional filming, lighting, audio recording, and on-set direction",
    },
    {
      title: "Post-Production",
      description:
        "AI-enhanced video editing, color grading, motion graphics, and sound design",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent-red mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-text-primary mb-6">
              Passionate About Visual Excellence & AI Innovation
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              With over 15 years of experience in video production and post-production, I specialize in creating compelling visual narratives that captivate audiences and deliver powerful messages using cutting-edge AI tools and traditional techniques.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              My expertise spans across commercial videos, documentaries, music videos, and digital content creation. I combine technical proficiency with creative vision and AI-powered tools to bring stories to life through the power of video.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Crafting compelling narratives through innovative video production, AI-enhanced editing, and post-production excellence
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg hover:bg-slate-600 transition-colors duration-300">
                {stat.icon}
                <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">{stat.value}</div>
                <div className="text-text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6">
              <h4 className="text-xl font-bold text-text-primary mb-4">{service.title}</h4>
              <p className="text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;