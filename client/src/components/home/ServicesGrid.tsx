import { trackEvent } from "@/lib/analytics";

export default function ServicesGrid() {
  const handleServiceLearnMore = (serviceName: string) => {
    trackEvent('service_learn_more', 'engagement', serviceName);
  };

  const eyeServices = [
    {
      icon: "fas fa-cut",
      title: "Cataract Treatment & Surgeries",
      description: "Advanced phacoemulsification and surgical techniques for cataract removal",
      features: ["Phacoemulsification surgery", "Premium IOL implants", "Micro-incision techniques", "Quick recovery"]
    },
    {
      icon: "fas fa-eye",
      title: "Oculoplasty & Eyelid Surgery",
      description: "Eyelid and orbital surgery, tear duct procedures for cosmetic and functional improvement",
      features: ["Eyelid reconstruction", "Tear duct surgery", "Orbital procedures", "Cosmetic enhancement"]
    },
    {
      icon: "fas fa-tint",
      title: "Cornea Care & Management",
      description: "Comprehensive treatment for degenerative, infectious, and traumatic corneal conditions",
      features: ["Corneal transplants", "Infection treatment", "Trauma management", "Degenerative care"]
    },
    {
      icon: "fas fa-search",
      title: "Glaucoma Diagnosis",
      description: "Early detection and comprehensive management of glaucoma conditions",
      features: ["Pressure monitoring", "OCT imaging", "Laser therapy", "Surgical intervention"]
    },
    {
      icon: "fas fa-child",
      title: "Pediatric Eye Care",
      description: "Specialized eye care for children including squint correction and refractive errors",
      features: ["Squint correction", "Refractive error treatment", "Childhood screening", "Pediatric surgery"]
    },
    {
      icon: "fas fa-first-aid",
      title: "Eye Injury Management",
      description: "Emergency and surgical care for ocular trauma and injuries",
      features: ["Emergency treatment", "Trauma surgery", "Injury assessment", "Rehabilitation care"]
    }
  ];

  const neuropsychiatryServices = [
    {
      icon: "fas fa-heart",
      title: "Anxiety, Depression & Stress",
      description: "Comprehensive treatment for mood disorders with holistic approach",
      features: ["Individual therapy", "Medication management", "CBT & DBT approaches", "Stress management"]
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "De-addiction Therapy",
      description: "Specialized rehabilitation programs for addiction recovery",
      features: ["Detoxification programs", "Counseling sessions", "Group therapy", "Relapse prevention"]
    },
    {
      icon: "fas fa-child",
      title: "Child & Adolescent Psychiatry",
      description: "Specialized mental health care for young patients",
      features: ["ADHD treatment", "Behavioral therapy", "Family counseling", "School interventions"]
    },
    {
      icon: "fas fa-memory",
      title: "Memory & Cognitive Disorders",
      description: "Assessment and treatment of cognitive impairments and memory issues",
      features: ["Dementia care", "Cognitive assessment", "Memory training", "Family support"]
    },
    {
      icon: "fas fa-users",
      title: "Family Counseling",
      description: "Clinical family therapy and relationship counseling services",
      features: ["Family therapy", "Couples counseling", "Parenting support", "Communication skills"]
    },
    {
      icon: "fas fa-brain",
      title: "Neuropsychiatric Disorders",
      description: "Treatment for complex neurological and psychiatric conditions",
      features: ["Epilepsy management", "Seizure disorders", "Complex cases", "Multidisciplinary care"]
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
        
        {/* Eye Care Services - Dr. Priyanka Sharma */}
        <div className="mb-12">
          <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">Eye Care Services - Dr. Priyanka Sharma</h3>
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
        
        {/* Mental Health Services - Dr. Vinay Kumar */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-blue-600 mb-8 text-center">Mental Health Services - Dr. Vinay Kumar</h3>
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
