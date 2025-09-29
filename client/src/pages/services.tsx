import { trackEvent } from "@/lib/analytics";

export default function Services() {
  const handleServiceInquiry = (service: string) => {
    trackEvent('service_inquiry', 'services', service);
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

        {/* Eye Care Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Eye Care Specialists</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-eye",
                title: "Comprehensive Eye Exam",
                description: "Complete eye health assessment with advanced diagnostic technology",
                features: ["Visual acuity testing", "Intraocular pressure measurement", "Retinal examination", "Prescription evaluation"]
              },
              {
                icon: "fas fa-cut",
                title: "Cataract Surgery",
                description: "Advanced phacoemulsification with premium IOL options",
                features: ["Micro-incision surgery", "Premium lens implants", "Same-day procedure", "Quick recovery"]
              },
              {
                icon: "fas fa-tint",
                title: "Glaucoma Treatment",
                description: "Early detection and management of glaucoma",
                features: ["OCT imaging", "Pressure monitoring", "Laser therapy", "Surgical options"]
              },
              {
                icon: "fas fa-crosshairs",
                title: "LASIK Surgery",
                description: "Advanced laser vision correction for clear sight",
                features: ["Bladeless LASIK", "Custom wavefront", "Quick procedure", "Rapid recovery"]
              },
              {
                icon: "fas fa-microscope",
                title: "Retinal Services",
                description: "Diagnosis and treatment of retinal disorders",
                features: ["Diabetic retinopathy", "Macular degeneration", "Retinal detachment", "Vitrectomy surgery"]
              },
              {
                icon: "fas fa-glasses",
                title: "Pediatric Eye Care",
                description: "Specialized eye care for children and adolescents",
                features: ["Childhood vision screening", "Strabismus treatment", "Amblyopia therapy", "Pediatric surgery"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <button 
                  className="text-primary font-medium hover:underline"
                  data-testid={`learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleServiceInquiry(service.title)}
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Neuropsychiatry Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-blue-600 mb-8 text-center">Neuropsychiatry Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-brain",
                title: "Depression & Anxiety",
                description: "Comprehensive treatment for mood disorders",
                features: ["Individual therapy", "Medication management", "CBT & DBT approaches", "Family counseling"]
              },
              {
                icon: "fas fa-user-md",
                title: "Bipolar Disorder",
                description: "Specialized care for mood stabilization",
                features: ["Mood stabilizers", "Psychoeducation", "Regular monitoring", "Crisis intervention"]
              },
              {
                icon: "fas fa-head-side-virus",
                title: "Neurological Disorders",
                description: "Treatment for various neurological conditions",
                features: ["Epilepsy management", "Migraine treatment", "Dementia care", "Movement disorders"]
              },
              {
                icon: "fas fa-puzzle-piece",
                title: "Schizophrenia Care",
                description: "Comprehensive treatment for psychotic disorders",
                features: ["Antipsychotic therapy", "Social skills training", "Family support", "Long-term care"]
              },
              {
                icon: "fas fa-smoking-ban",
                title: "Addiction Treatment",
                description: "Evidence-based addiction recovery programs",
                features: ["Detoxification", "Counseling therapy", "Support groups", "Relapse prevention"]
              },
              {
                icon: "fas fa-child",
                title: "Child Psychiatry",
                description: "Mental health care for children and adolescents",
                features: ["ADHD treatment", "Autism spectrum care", "Behavioral therapy", "Parent counseling"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-blue-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <button 
                  className="text-blue-600 font-medium hover:underline"
                  data-testid={`learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleServiceInquiry(service.title)}
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Services */}
        <div className="bg-destructive/10 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <i className="fas fa-exclamation-triangle text-destructive text-4xl mb-4"></i>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              24/7 Emergency Services
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We provide round-the-clock emergency care for urgent eye conditions and psychiatric emergencies.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-left">
                <h4 className="font-semibold text-foreground mb-2">Eye Emergencies</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sudden vision loss</li>
                  <li>• Eye injuries and trauma</li>
                  <li>• Severe eye pain</li>
                  <li>• Retinal detachment</li>
                  <li>• Chemical burns</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground mb-2">Psychiatric Emergencies</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Suicidal ideation</li>
                  <li>• Psychotic episodes</li>
                  <li>• Severe anxiety attacks</li>
                  <li>• Drug overdose</li>
                  <li>• Manic episodes</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+917970838322" 
                className="bg-destructive text-destructive-foreground px-8 py-3 rounded-lg font-semibold hover:bg-destructive/90 transition-colors"
                data-testid="emergency-call"
                onClick={() => trackEvent('emergency_call', 'emergency', 'services_page')}
              >
                Emergency Call
              </a>
              <a 
                href="https://wa.me/917970838322?text=Emergency%20medical%20assistance%20needed" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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
                onClick={() => trackEvent('book_appointment', 'conversion', 'services_cta')}
              >
                Book Appointment
              </button>
              <a 
                href="tel:+917970838322" 
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
    </div>
  );
}
