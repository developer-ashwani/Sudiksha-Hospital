import { useState } from "react";
import { Link, useLocation } from "wouter";
import { trackEvent } from "@/lib/analytics";
import AppointmentForm from "@/components/home/AppointmentForm";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleBookAppointment = () => {
    trackEvent('book_appointment', 'conversion', 'header');
    setIsAppointmentModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/doctors", label: "Doctors" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" }
  ];

  return (
    <header className="bg-card shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Sudiksha Hospital Logo" 
              className="w-12 h-12 rounded-lg mr-3 object-contain"
            />
            <div>
              <h1 className="text-xl font-heading font-bold text-primary">Sudiksha Hospital</h1>
              <p className="text-xs text-muted-foreground">Mental Health & Eye Care</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`text-foreground hover:text-primary transition-colors ${
                  location === item.href ? 'text-primary font-medium' : ''
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <button 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="header-book-button"
              onClick={handleBookAppointment}
            >
              Book Appointment
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={toggleMobileMenu}
            data-testid="mobile-menu-toggle"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={`text-foreground hover:text-primary transition-colors py-2 ${
                    location === item.href ? 'text-primary font-medium' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
              <button 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-4"
                data-testid="mobile-book-button"
                onClick={() => {
                  handleBookAppointment();
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Appointment
              </button>
            </nav>
          </div>
        )}
      </div>
      
      {/* Appointment Modal */}
      <AppointmentForm 
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        selectedDoctor="any"
      />
    </header>
  );
}
