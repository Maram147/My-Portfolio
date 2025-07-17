import React from 'react';
import { Heart, ArrowUp,Mail ,Phone ,MapPin} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-tr from-background to-muted text-foreground border-t border-border shadow-inner">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-extrabold text-primary mb-4">Maram Mahmoud</h3>
            <p className="text-muted-foreground leading-relaxed">
              Excited to create modern, interactive projects using React.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Experience', id: 'experience' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Me</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className='flex item-center gap-2'> <Mail /> mahmoudmaram002@gmail.com</li>
              <li className='flex item-center gap-2'> <Phone />+20 102 157 9696</li>
              <li className='flex item-center gap-2'> <MapPin />Egypt, Qena</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative pt-6 border-t border-border flex flex-col items-center gap-3">
          <span className="text-sm text-muted-foreground">
            © {currentYear} Made by Maram Mahmoud
          </span>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group bg-primary/10 hover:bg-primary text-primary hover:scale-105 hover:shadow-lg transition-all duration-300 p-2 rounded-full"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
