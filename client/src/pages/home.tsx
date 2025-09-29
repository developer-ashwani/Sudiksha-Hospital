import { trackEvent } from "@/lib/analytics";
import SeoJsonLd from "@/components/seo/SeoJsonLd";
import Hero from "@/components/home/Hero";
import DoctorProfile from "@/components/home/DoctorProfile";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import AppointmentForm from "@/components/home/AppointmentForm";

export default function Home() {
  const handleEmergencyCall = () => {
    trackEvent('emergency_call', 'contact', 'emergency_banner');
  };

  const handleEmergencyWhatsApp = () => {
    trackEvent('emergency_whatsapp', 'contact', 'emergency_banner');
  };

  return (
    <>
      <SeoJsonLd />
      
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+917970838322" 
              className="flex items-center hover:underline"
              data-testid="topbar-phone"
              onClick={() => trackEvent('click_to_call', 'contact', 'topbar')}
            >
              <i className="fas fa-phone mr-2"></i>
              +91 79708 38322
            </a>
            <a 
              href="mailto:hospitalsudiksha@gmail.com" 
              className="flex items-center hover:underline"
              data-testid="topbar-email"
            >
              <i className="fas fa-envelope mr-2"></i>
              hospitalsudiksha@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <i className="fas fa-star text-secondary mr-1"></i>
              <span className="text-xs">Google Business Verified</span>
            </div>
            <button 
              className="bg-secondary text-secondary-foreground px-4 py-1 rounded-md font-medium hover:bg-secondary/90 transition-colors"
              data-testid="topbar-book-button"
              onClick={() => trackEvent('book_appointment', 'conversion', 'topbar')}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <Hero />

      {/* Emergency Quick Actions */}
      <section className="bg-destructive text-destructive-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <i className="fas fa-exclamation-triangle text-2xl mr-3"></i>
              <span className="font-semibold">24/7 Emergency Eye Care Available</span>
            </div>
            <div className="flex space-x-4">
              <a 
                href="tel:+917970838322" 
                className="bg-white text-destructive px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                data-testid="emergency-call"
                onClick={handleEmergencyCall}
              >
                Emergency Call
              </a>
              <a 
                href="https://wa.me/917970838322?text=Emergency%20eye%20care%20needed" 
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                data-testid="emergency-whatsapp"
                onClick={handleEmergencyWhatsApp}
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Sudiksha Hospital?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine advanced technology with compassionate care to provide the best eye treatment in Patna
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <i className="fas fa-microscope text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Advanced Technology</h3>
              <p className="text-muted-foreground">State-of-the-art equipment for precise diagnosis and treatment</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <i className="fas fa-user-md text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Expert Specialists</h3>
              <p className="text-muted-foreground">Board-certified doctors with years of specialized experience</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <i className="fas fa-clock text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-muted-foreground">Round-the-clock emergency eye care services</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <i className="fas fa-heart text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Compassionate Care</h3>
              <p className="text-muted-foreground">Patient-centered approach with personalized treatment plans</p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
      <DoctorProfile />
      <ServicesGrid />
      <Testimonials />

      {/* Infrastructure */}
      <section className="bg-accent/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              State-of-the-Art Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern medical equipment and comfortable facilities for comprehensive patient care
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Modern hospital operating room with advanced medical equipment" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Advanced Medical Technology</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Latest OCT Imaging</h4>
                    <p className="text-muted-foreground text-sm">High-resolution retinal scanning for precise diagnosis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Phacoemulsification System</h4>
                    <p className="text-muted-foreground text-sm">Advanced cataract surgery with micro-incisions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-semibold mb-1">LASIK Excimer Laser</h4>
                    <p className="text-muted-foreground text-sm">Precision laser vision correction technology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Digital EEG System</h4>
                    <p className="text-muted-foreground text-sm">Advanced neurological monitoring equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-primary text-2xl"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-2">Sterile Environment</h4>
              <p className="text-muted-foreground">HEPA-filtered operation theaters with laminar airflow</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-wifi text-primary text-2xl"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-2">Digital Records</h4>
              <p className="text-muted-foreground">Electronic health records for seamless care coordination</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-ambulance text-primary text-2xl"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-2">Emergency Ready</h4>
              <p className="text-muted-foreground">24/7 emergency services with rapid response capability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awareness Banner */}
      <section className="bg-gradient-to-r from-blue-500/10 to-pink-500/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              <i className="fas fa-eye text-primary mr-3"></i>
              World Sight Day 2024 - Protect Your Vision
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Regular eye check-ups can prevent 80% of vision loss. Book your comprehensive eye examination today and protect your precious sight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="free-screening-button"
                onClick={() => trackEvent('free_screening', 'campaign', 'awareness_banner')}
              >
                Free Eye Screening
              </button>
              <a 
                href="tel:+917970838322" 
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                data-testid="call-info-button"
                onClick={() => trackEvent('click_to_call', 'contact', 'awareness_banner')}
              >
                Call for Information
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
