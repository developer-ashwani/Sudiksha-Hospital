import { Link } from "wouter";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import AppointmentForm from "@/components/home/AppointmentForm";
import { eyeServices, neuropsychiatryServices } from "@/lib/services";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
   const { t } = useTranslation();
  const { language } = useLanguage();
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<'dr-priyanka' | 'dr-vinay' | 'any'>('any');

  const handleServiceInquiry = (service: string) => {
    trackEvent('service_inquiry', 'services', service);
  };

  const handleBookAppointment = () => {
    trackEvent('book_appointment', 'conversion', 'services_cta');
    setIsAppointmentModalOpen(true);
  };

   const handleServiceLearnMore = (serviceName: string) => {
    trackEvent('service_learn_more', 'engagement', serviceName);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Medical Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare services with specialized departments for complete patient care
          </p>
        </div>

        {/* Eye Care Services - Dr. Priyanka Sharma */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Eye Care Services - Dr. Priyanka Sharma</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eyeServices.map((service, index) => (
                      <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="overflow-hidden rounded-lg mb-4">
                          <img
                            src={service.icon}
                            alt={service.title}
                            className="w-full h-48 sm:h-56 md:h-64 object-cover block"
                              />
                        </div>
                        <h4 className="text-xl font-heading font-semibold mb-3">{service.title}</h4>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="text-primary font-medium hover:underline"
                  data-testid={`learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleServiceLearnMore(service.title)}
                >
                  {t("common.learnMore")} →
                </Link>
              </div>
                       ))}
          </div>
        </div>

        {/* Mental Health Services - Dr. Vinay Kumar */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-blue-600 mb-8 text-center">Mental Health Services - Dr. Vinay Kumar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {neuropsychiatryServices.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                 <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover block"
                  />
            </div>
                <h4 className="text-xl font-heading font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <Link 
                  href="/services"
                  className="text-blue-600 font-medium hover:underline"
                  data-testid={`learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleServiceLearnMore(service.title)}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Services */}
        <div className="bg-white rounded-2xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-exclamation-triangle text-white text-2xl"></i>
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              24/7 Emergency Services
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              We provide round-the-clock emergency care for urgent eye conditions and psychiatric emergencies.
            </p>
            <div className="grid md:grid-cols-2 gap-16 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-foreground mb-6">Eye Emergencies</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li>• Sudden vision loss</li>
                  <li>• Eye injuries and trauma</li>
                  <li>• Severe eye pain</li>
                  <li>• Retinal detachment</li>
                  <li>• Chemical burns</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-foreground mb-6">Psychiatric Emergencies</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li>• Suicidal ideation</li>
                  <li>• Psychotic episodes</li>
                  <li>• Severe anxiety attacks</li>
                  <li>• Drug overdose</li>
                  <li>• Manic episodes</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+919117217024" 
                className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
                data-testid="emergency-call"
                onClick={() => trackEvent('emergency_call', 'emergency', 'services_page')}
              >
                Emergency Call
              </a>
              <a 
                href="https://wa.me/919117217024?text=Emergency%20medical%20assistance%20needed" 
                className="bg-green-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
                data-testid="emergency-whatsapp"
                onClick={() => trackEvent('emergency_whatsapp', 'emergency', 'services_page')}
              >
                WhatsApp Emergency
              </a>
            </div>
          </div>
        </div>

        {/* Book Appointment CTA */}
        <div className="text-center">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Ready to Schedule Your Appointment?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our medical team is ready to provide you with the best possible care. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="book-appointment-cta"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </button>
              <a 
                href="tel:+919117217024" 
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                data-testid="call-services"
                onClick={() => trackEvent('click_to_call', 'contact', 'services_cta')}
              >
                Call Us
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
    </div>
  );
}
