import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import SeoJsonLd from "@/components/seo/SeoJsonLd";
import Hero from "@/components/home/Hero";
import DoctorProfile from "@/components/home/DoctorProfile";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import AppointmentSection from "@/components/home/AppointmentSection";

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
      <div className="bg-primary text-primary-foreground py-3 px-4 text-sm">
        <div className="container mx-auto">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <i className="fas fa-star text-secondary text-xs"></i>
                  <i className="fas fa-star text-secondary text-xs"></i>
                  <i className="fas fa-star text-secondary text-xs"></i>
                  <i className="fas fa-star text-secondary text-xs"></i>
                  <i className="fas fa-star text-secondary text-xs"></i>
                </div>
                <span className="text-xs font-medium">Google Verified Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.facebook.com/hospitalsudiksha/" 
                  className="text-primary-foreground hover:text-secondary transition-colors"
                  data-testid="facebook-link"
                  onClick={() => trackEvent('social_click', 'facebook', 'topbar')}
                >
                  <i className="fab fa-facebook text-sm"></i>
                </a>
                <a 
                  href="https://www.instagram.com/hospitalsudiksha/" 
                  className="text-primary-foreground hover:text-secondary transition-colors"
                  data-testid="instagram-link"
                  onClick={() => trackEvent('social_click', 'instagram', 'topbar')}
                >
                  <i className="fab fa-instagram text-sm"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+919117217024" 
                className="flex items-center hover:underline"
                data-testid="topbar-phone"
                onClick={() => trackEvent('click_to_call', 'contact', 'topbar')}
              >
                <i className="fas fa-phone mr-2"></i>
                +91 9117217024
              </a>
              <a 
                href="mailto:hospitalsudiksha@gmail.com" 
                className="flex items-center hover:underline"
                data-testid="topbar-email"
                onClick={() => trackEvent('click_to_call', 'contact', 'topbar')}
              >
                <i className="fas fa-envelope mr-2"></i>
                hospitalsudiksha@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <i className="fas fa-star text-secondary text-xs"></i>
                  <i className="fas fa-star text-secondary text-xs"></i>
                  <i className="fas fa-star text-secondary text-xs"></i>
                  <i className="fas fa-star text-secondary text-xs"></i>
                  <i className="fas fa-star text-secondary text-xs"></i>
                </div>
                <span className="text-xs font-medium">Google Verified Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.facebook.com/hospitalsudiksha/" 
                  className="text-primary-foreground hover:text-secondary transition-colors"
                  data-testid="facebook-link"
                  onClick={() => trackEvent('social_click', 'facebook', 'topbar')}
                >
                  <i className="fab fa-facebook text-sm"></i>
                </a>
                <a 
                  href="https://www.instagram.com/hospitalsudiksha/" 
                  className="text-primary-foreground hover:text-secondary transition-colors"
                  data-testid="instagram-link"
                  onClick={() => trackEvent('social_click', 'instagram', 'topbar')}
                >
                  <i className="fab fa-instagram text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Hero />

      {/* Emergency Quick Actions */}
      <section className="bg-destructive text-destructive-foreground py-4">
        <div className="container mx-auto px-4">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center">
                <i className="fas fa-exclamation-triangle text-xl mr-2"></i>
                <span className="font-semibold text-sm">24/7 Emergency Eye Care Available</span>
              </div>
              <div className="flex flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+919117217024" 
                  className="bg-white text-destructive px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center min-w-32 h-12 flex items-center justify-center"
                  data-testid="emergency-call"
                  onClick={handleEmergencyCall}
                >
                  Emergency Call
                </a>
                <a 
                  href="https://wa.me/919117217024?text=Emergency%20eye%20care%20needed" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center min-w-32 h-12 flex items-center justify-center"
                  data-testid="emergency-whatsapp"
                  onClick={handleEmergencyWhatsApp}
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center">
              <i className="fas fa-exclamation-triangle text-2xl mr-3"></i>
              <span className="font-semibold">24/7 Emergency Eye Care Available</span>
            </div>
            <div className="flex space-x-4">
              <a 
                href="tel:+919117217024" 
                className="bg-white text-destructive px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                data-testid="emergency-call"
                onClick={handleEmergencyCall}
              >
                Emergency Call
              </a>
              <a 
                href="https://wa.me/919117217024?text=Emergency%20eye%20care%20needed" 
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

      {/* Specialized Mental Health & Eye Care */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="mb-6">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Our Specialties</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Specialized Mental Health & Eye Care
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Sudiksha Hospital provides expert care in neuropsychiatry and ophthalmology with experienced specialists and modern medical facilities in Rajendranagar, Patna.
              </p>
            </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Ophthalmology & Eye Care Card */}
            <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="/images/ophthalmology-examination-room.png"
                  alt="Ophthalmology examination room" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gray-200 border border-foreground rounded-lg px-3 py-1 flex items-center">
                    <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center mr-2">
                      <i className="fas fa-eye text-white text-xs"></i>
                    </div>
                    <span className="text-sm font-medium text-foreground">Featured Specialty</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  Ophthalmology & Eye Care
                </h3>
                <p className="text-muted-foreground mb-6">
                  Complete eye care solutions including cataract treatment, oculoplasty, cornea care, glaucoma management, and pediatric eye care.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Cataract Treatment & Surgeries</span>
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Oculoplasty & Eyelid Surgery</span>
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Cornea Care & Management</span>
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Glaucoma Diagnosis</span>
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Pediatric Eye Care</span>
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Eye Injury Management</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="font-semibold text-foreground">Dr. Priyanka Sharma</div>
                  <div className="text-sm text-muted-foreground">Senior Consultant Ophthalmologist</div>
                  <div className="text-sm text-muted-foreground">MS (Ophthalmology) - KGMC Lucknow</div>
                  <div className="text-sm text-muted-foreground">Former Senior Resident, NMCH Patna</div>
                  <div className="text-sm text-muted-foreground">11 Years Experience</div>
                </div>
                
                <Link 
                  href="/services"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Mental Health & Neuropsychiatry Card */}
            <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gray-200 border border-foreground rounded-lg px-3 py-1 flex items-center">
                    <div className="bg-foreground w-6 h-6 rounded-full flex items-center justify-center mr-2">
                      <i className="fas fa-brain text-white text-xs"></i>
                    </div>
                    <span className="text-sm font-medium text-foreground">Core Specialty</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  Mental Health & Neuropsychiatry
                </h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive mental healthcare with holistic treatment approach, combining advanced psychiatric treatment with therapy and counseling for long-term healing.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Anxiety, Depression & Stress</span>
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Child & Adolescent Psychiatry</span>
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">De-addiction Therapy</span>
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Memory & Cognitive Disorders</span>
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Family Counseling</span>
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-star text-foreground mr-2"></i>
                    <span className="text-sm text-foreground">Neuropsychiatric Disorders</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="font-semibold text-foreground">Dr. Vinay Kumar</div>
                  <div className="text-sm text-muted-foreground">Neuropsychiatrist & Mental Health Specialist</div>
                  <div className="text-sm text-muted-foreground">MD (Psychiatry) - MGIMS Sevagram</div>
                  <div className="text-sm text-muted-foreground">PGDCFT, MIPS, CHRE (UK) | Former NIMHANS, Bengaluru</div>
                  <div className="text-sm text-muted-foreground">11+ Years Experience</div>
                </div>
                
                <Link 
                  href="/services"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DoctorProfile />
      <ServicesGrid />
      <AppointmentSection />
      <Testimonials />

      {/* Infrastructure */}
      <section className="bg-accent/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Our Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized facilities designed for comprehensive eye care and mental health services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-eye text-primary text-2xl"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-2">Eye Care Facilities</h4>
              <p className="text-muted-foreground">Modern operating theaters, slit lamp examination rooms, and specialized pediatric eye care areas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-blue-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-2">Mental Health Center</h4>
              <p className="text-muted-foreground">Private consultation rooms, therapy spaces, and comfortable family counseling areas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-primary text-2xl"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-2">Safety & Security</h4>
              <p className="text-muted-foreground">24/7 security surveillance, emergency backup systems, and wheelchair accessible facilities</p>
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
              World Sight Day 2025 - Protect Your Vision
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
                href="tel:+919117217024" 
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
