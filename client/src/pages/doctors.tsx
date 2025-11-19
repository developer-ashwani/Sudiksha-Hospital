import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import DoctorProfile from "@/components/home/DoctorProfile";
import AppointmentForm from "@/components/home/AppointmentForm";

export default function Doctors() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<'dr-priyanka' | 'dr-vinay' | 'any'>('any');

  const handleBookDrPriyanka = () => {
    trackEvent('book_dr_priyanka', 'conversion', 'doctors_page');
    setSelectedDoctor('dr-priyanka');
    setIsAppointmentModalOpen(true);
  };

  const handleBookDrVinay = () => {
    trackEvent('book_dr_vinay', 'conversion', 'doctors_page');
    setSelectedDoctor('dr-vinay');
    setIsAppointmentModalOpen(true);
  };

  return (
    <div>
      <DoctorProfile />
      <div className="container mx-auto px-4 py-16">   
          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Need Help Choosing the Right Doctor?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team can help you find the right specialist for your condition. Contact us for personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919117217024" 
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  data-testid="call-guidance"
                  onClick={() => trackEvent('click_to_call', 'contact', 'doctors_cta')}
                >
                  Call for Guidance
                </a>
                <a 
                  href="https://wa.me/919117217024?text=I%20need%20help%20choosing%20the%20right%20doctor" 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  data-testid="whatsapp-guidance"
                  onClick={() => trackEvent('whatsapp_guidance', 'contact', 'doctors_cta')}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
       
        
        {/* Appointment Modal */}
        <AppointmentForm 
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
          selectedDoctor={selectedDoctor}
        />
      </div>
    </div>
  );
}
