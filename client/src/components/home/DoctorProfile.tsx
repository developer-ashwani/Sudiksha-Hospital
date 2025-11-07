import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import AppointmentForm from "@/components/home/AppointmentForm";

export default function DoctorProfile() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<'dr-priyanka' | 'dr-vinay' | 'any'>('any');

  const handleBookDrPriyanka = () => {
    trackEvent('book_dr_priyanka', 'conversion', 'doctor_profile');
    setSelectedDoctor('dr-priyanka');
    setIsAppointmentModalOpen(true);
  };

  const handleBookDrVinay = () => {
    trackEvent('book_dr_vinay', 'conversion', 'doctor_profile');
    setSelectedDoctor('dr-vinay');
    setIsAppointmentModalOpen(true);
  };

  const handleWhatsAppDrPriyanka = () => {
    trackEvent('whatsapp_dr_priyanka', 'contact', 'doctor_profile');
  };

  return (
    <section className="py-16 px-4" id="doctors">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Meet Our Specialists
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our experienced doctors are dedicated to providing exceptional healthcare with advanced treatment options
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dr. Priyanka Sharma */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <img 
                src="/images/dr-priyanka-sharma.png"
                alt="Dr. Priyanka Sharma - Chief Ophthalmologist" 
                className="rounded-xl shadow-lg w-32 h-32 object-cover mx-auto mb-4"
              />
              <div className="bg-primary text-primary-foreground inline-block px-3 py-1 rounded-full text-sm font-medium mb-3">
                Consultant Ophthalmologist
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Dr. Priyanka Sharma</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Consultant at Sudiksha Hospital with 11 years of experience in comprehensive ophthalmology, advanced eye surgeries, and community eye care.
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Areas of Expertise</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Cataract Treatment & Surgeries</li>
                  <li>• Oculoplasty & Eyelid Surgery</li>
                  <li>• Cornea Care & Management</li>
                  <li>• Glaucoma Diagnosis</li>
                  <li>• Pediatric Eye Care</li>
                  <li>• Eye Injury Management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Education & Experience</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• MBBS, MS (Ophthalmology)</li>
                  <li>• KGMC, Lucknow Graduate</li>
                  <li>• Former Senior Resident, NMCH Patna</li>
                  <li>• 11 Years Clinical Experience</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-3">
              <button 
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center text-sm"
                data-testid="profile-book-dr-priyanka"
                onClick={handleBookDrPriyanka}
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Book Consultation
              </button>
              <a 
                href="https://wa.me/919117217024?text=I%20would%20like%20to%20consult%20with%20Dr.%20Priyanka%20Sharma" 
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center text-sm"
                data-testid="profile-whatsapp-dr-priyanka"
                onClick={handleWhatsAppDrPriyanka}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp
              </a>
            </div>
          </div>
          
          {/* Dr. Vinay Kumar */}
          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <img 
                src="/images/dr-vinay-kumar.png" 
                alt="Dr. Vinay Kumar - Neuropsychiatrist" 
                className="rounded-xl shadow-lg w-32 h-32 object-cover mx-auto mb-4"
              />
              <div className="bg-blue-100 text-blue-800 inline-block px-3 py-1 rounded-full text-sm font-medium mb-3">
                Consultant Neuropsychiatrist
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Dr. Vinay Kumar</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Consultant Neuropsychiatrist with 11+ years of experience, former NIMHANS Bengaluru psychiatrist specializing in comprehensive mental healthcare with holistic treatment approach.
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Areas of Specialization</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Anxiety, Depression & Stress</li>
                  <li>• De-addiction Therapy</li>
                  <li>• Child & Adolescent Psychiatry</li>
                  <li>• Memory & Cognitive Disorders</li>
                  <li>• Family Counseling</li>
                  <li>• Neuropsychiatric Disorders</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Education & Experience</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• MBBS, MD (Psychiatry) - MGIMS Sevagram</li>
                  <li>• PGDCFT, MIPS, CHRE (UK)</li>
                  <li>• Former NIMHANS, Bengaluru</li>
                  <li>• 11+ Years Experience</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-3">
              <button 
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center text-sm"
                data-testid="profile-book-dr-vinay"
                onClick={handleBookDrVinay}
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Book Consultation
              </button>
              <a 
                href="https://wa.me/919117217024?text=I%20would%20like%20to%20consult%20with%20Dr.%20Vinay%20Kumar" 
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center text-sm"
                data-testid="profile-whatsapp-dr-vinay"
                onClick={() => trackEvent('whatsapp_dr_vinay', 'contact', 'doctor_profile')}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Appointment Modal */}
      <AppointmentForm 
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        selectedDoctor={selectedDoctor}
      />
    </section>
  );
}
