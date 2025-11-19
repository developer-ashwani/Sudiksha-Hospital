import { useState } from "react";
import { Link, useLocation } from "wouter";
import { trackEvent } from "@/lib/analytics";
import AppointmentForm from "@/components/home/AppointmentForm";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/hooks/use-translation";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const handleBookAppointment = () => {
    trackEvent('book_appointment', 'conversion', 'header');
    setIsAppointmentModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageToggle = () => {
    changeLanguage(language === 'en' ? 'hi' : 'en');
  };

  const navItems = [
    { href: "/", label: t("common.home") },
    { href: "/doctors", label: t("common.doctors") },
    { href: "/services", label: t("common.services") },
    { href: "/contact", label: t("common.contact") },
    { href: "/blog", label: t("common.blog") }
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
              <h1 className="text-xl font-heading font-bold text-primary">{t("header.hospitalName")}</h1>
              <p className="text-xs text-muted-foreground">{t("header.tagline")}</p>
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
            {/* Language Toggle */}
            <button
              onClick={handleLanguageToggle}
              className="flex items-center gap-1 px-3 py-2 rounded-lg border border-border hover:bg-accent transition-colors"
              aria-label="Toggle language"
            >
              <span className={`text-sm font-medium ${language === 'en' ? 'text-primary' : 'text-muted-foreground'}`}>EN</span>
              <span className="text-muted-foreground">|</span>
              <span className={`text-sm font-medium ${language === 'hi' ? 'text-primary' : 'text-muted-foreground'}`}>HI</span>
            </button>
            <button 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="header-book-button"
              onClick={handleBookAppointment}
            >
              {t("header.bookAppointment")}
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
              {/* Language Toggle - Mobile */}
              <button
                onClick={() => {
                  handleLanguageToggle();
                }}
                className="flex items-center justify-center gap-1 px-4 py-3 rounded-lg border border-border hover:bg-accent transition-colors mt-4"
                aria-label="Toggle language"
              >
                <span className={`text-sm font-medium ${language === 'en' ? 'text-primary' : 'text-muted-foreground'}`}>EN</span>
                <span className="text-muted-foreground">|</span>
                <span className={`text-sm font-medium ${language === 'hi' ? 'text-primary' : 'text-muted-foreground'}`}>HI</span>
              </button>
              <button 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-4"
                data-testid="mobile-book-button"
                onClick={() => {
                  handleBookAppointment();
                  setIsMobileMenuOpen(false);
                }}
              >
                {t("header.bookAppointment")}
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
