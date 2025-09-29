import { trackEvent } from "@/lib/analytics";

export default function ServicesGrid() {
  const handleServiceLearnMore = (serviceName: string) => {
    trackEvent('service_learn_more', 'engagement', serviceName);
  };

  const eyeServices = [
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
  ];

  const neuropsychiatryServices = [
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
    }
  ];

  return (
    <section className="bg-accent/30 py-16 px-4" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Our Medical Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare services with specialized departments for complete patient care
          </p>
        </div>
        
        {/* Eye Care Services (Priority) */}
        <div className="mb-12">
          <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">Eye Care Specialists</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eyeServices.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-primary text-xl`}></i>
                </div>
                <h4 className="text-xl font-heading font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <button 
                  className="text-primary font-medium hover:underline"
                  data-testid={`learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleServiceLearnMore(service.title)}
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Neuropsychiatry Services */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-blue-600 mb-8 text-center">Neuropsychiatry Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neuropsychiatryServices.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-blue-600 text-xl`}></i>
                </div>
                <h4 className="text-xl font-heading font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <button 
                  className="text-blue-600 font-medium hover:underline"
                  data-testid={`learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleServiceLearnMore(service.title)}
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
