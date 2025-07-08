
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 border-t border-border">
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
                مطور Full Stack متحمس لإنشاء حلول رقمية مبتكرة وتطبيقات ويب عالية الجودة.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                روابط سريعة
              </h4>
              <div className="space-y-2">
                {[
                  { label: 'نبذة عني', id: 'about' },
                  { label: 'المهارات', id: 'skills' },
                  { label: 'المشاريع', id: 'projects' },
                  { label: 'الخبرة', id: 'experience' },
                  { label: 'التواصل', id: 'contact' }
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
                معلومات التواصل
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div>ahmed@example.com</div>
                <div>+966 50 123 4567</div>
                <div>الرياض، السعودية</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>© {currentYear} جميع الحقوق محفوظة. صُنع بـ</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>في السعودية</span>
                <button
                onClick={scrollToTop}
                className="p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-200 hover:scale-110"
                title="العودة للأعلى"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
              </div>

      
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
