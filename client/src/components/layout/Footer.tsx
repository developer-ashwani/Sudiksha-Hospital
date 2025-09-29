import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    trackEvent('social_click', 'engagement', platform);
  };

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/images/logo.png" 
                alt="Sudiksha Hospital Logo" 
                className="w-10 h-10 rounded-lg mr-3 object-contain"
              />
              <div>
                <h3 className="text-xl font-heading font-bold text-primary">Sudiksha Hospital</h3>
                <p className="text-sm opacity-75">Excellence in Eye Care</p>
              </div>
            </div>
            <p className="text-sm opacity-75 mb-4">
              Leading healthcare provider in Patna, specializing in comprehensive eye care and neuropsychiatry services with advanced technology and expert medical professionals.
            </p>
            <div className="flex space-x-3">
              <button 
                className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors"
                data-testid="social-facebook"
                onClick={() => handleSocialClick('facebook')}
              >
                <i className="fab fa-facebook text-primary"></i>
              </button>
              <button 
                className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors"
                data-testid="social-instagram"
                onClick={() => handleSocialClick('instagram')}
              >
                <i className="fab fa-instagram text-primary"></i>
              </button>
              <button 
                className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors"
                data-testid="social-youtube"
                onClick={() => handleSocialClick('youtube')}
              >
                <i className="fab fa-youtube text-primary"></i>
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/doctors" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors">Our Doctors</a></li>
              <li><a href="/services" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors">Services</a></li>
              <li><a href="/contact" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/blog" className="opacity-75 hover:opacity-100 hover:text-primary transition-colors">Health Blog</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Medical Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="opacity-75">Cataract Surgery</span></li>
              <li><span className="opacity-75">LASIK Surgery</span></li>
              <li><span className="opacity-75">Retinal Treatment</span></li>
              <li><span className="opacity-75">Glaucoma Care</span></li>
              <li><span className="opacity-75">Psychiatric Consultation</span></li>
              <li><span className="opacity-75">Emergency Eye Care</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-2 flex-shrink-0"></i>
                <span className="opacity-75">1st Floor, Above IDBI Bank, Arya Kumar Road, Rajendranagar, Patna – 800016</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-primary mr-2"></i>
                <a 
                  href="tel:+917970838322" 
                  className="opacity-75 hover:opacity-100 hover:text-primary transition-colors"
                  data-testid="footer-phone"
                  onClick={() => trackEvent('click_to_call', 'contact', 'footer')}
                >
                  +91 79708 38322
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <a 
                  href="mailto:hospitalsudiksha@gmail.com" 
                  className="opacity-75 hover:opacity-100 hover:text-primary transition-colors"
                  data-testid="footer-email"
                >
                  hospitalsudiksha@gmail.com
                </a>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg mt-4">
                <p className="text-primary font-medium text-xs">24/7 Emergency Services Available</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75 mb-4 md:mb-0">
              © 2024 Sudiksha Hospital. All rights reserved. | 
              <a href="/privacy" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-primary transition-colors ml-1">Terms of Service</a>
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm opacity-75">Powered by</span>
              <span className="text-primary font-semibold">Healthcare Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
