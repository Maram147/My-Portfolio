
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-White">
                Maram Mahmoud
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Exiceted to create projects using React
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Quick Links
              </h4>
              <div className="space-y-2">
                {[
                  { label: 'about', id: 'about' },
                  { label: 'skills', id: 'skills' },
                  { label: 'projects', id: 'projects' },
                  { label: 'experience', id: 'experience' },
                  { label: 'contact', id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                contact me
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div>mahmoudmaram002@gmail.com</div>
                <div>+201021579696</div>
                <div> Egypt,Qena</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-3 border-white ">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                <span>©made by Maram Mahmoud</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
