import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import { getEyeServices, getNeuropsychiatryServices } from "@/lib/services";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesGrid() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const eyeServices = getEyeServices(language);
  const neuropsychiatryServices = getNeuropsychiatryServices(language);

  const handleServiceLearnMore = (serviceName: string) => {
    trackEvent('service_learn_more', 'engagement', serviceName);
  };

  return (
    <section className="bg-accent/30 py-16 px-4" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            {t("home.services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("home.services.description")}
          </p>
        </div>
        
        {/* Eye Care Services - Dr. Priyanka Sharma */}
        <div className="mb-12">
          <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">{t("home.services.eyeCareServices")}</h3>
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
        <div>
          <h3 className="text-2xl font-heading font-bold text-blue-600 mb-8 text-center">{t("home.services.mentalHealthServices")}</h3>
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
      </div>
    </section>
  );
}
