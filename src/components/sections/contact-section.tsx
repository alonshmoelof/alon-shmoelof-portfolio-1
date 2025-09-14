import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, type LucideIcon } from 'lucide-react';

interface ContactInfo {
  Icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}

interface SocialLink {
  Icon: LucideIcon;
  href: string;
  label: string;
}

const contactInfo: ContactInfo[] = [
  {
    Icon: Mail,
    title: "Email",
    value: "Alonshmoelof@gmail.com",
    href: "mailto:Alonshmoelof@gmail.com"
  },
  {
    Icon: Phone,
    title: "Phone",
    value: "+972544305556",
    href: "tel:+972544305556"
  },
  {
    Icon: MapPin,
    title: "Location",
    value: "Tel-aviv area",
  }
];

const socialLinks: SocialLink[] = [
  { Icon: Facebook, href: "https://www.facebook.com/alonsh", label: "Facebook" },
  { Icon: Instagram, href: "https://www.instagram.com/alonshmoelof/", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/alon-shmoelof/", label: "LinkedIn" }
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-background-primary py-20 text-text-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-16">
          Ready to bring your vision to life? Let's discuss your next video project and
          create something amazing together.
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-12">
          Let's Start a Conversation
        </h3>

        <div className="mb-16">
          <div className="inline-flex flex-col items-start space-y-8">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-center gap-6">
                <div className="bg-primary rounded-full p-4 flex-shrink-0">
                  <item.Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-text-primary">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-base text-text-secondary hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base text-text-secondary">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h4 className="text-xl font-semibold text-text-primary mb-6">Follow My Work</h4>
        <div className="flex justify-center gap-4">
          {socialLinks.map((social) => (
            <a 
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="bg-card p-3 rounded-lg text-text-secondary hover:text-primary hover:bg-destructive/10 transition-all duration-300"
            >
              <social.Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;