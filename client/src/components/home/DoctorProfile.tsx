import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import AppointmentForm from "@/components/home/AppointmentForm";
import { useTranslation } from "@/hooks/use-translation";

export default function DoctorProfile() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<'dr-priyanka' | 'dr-vinay' | 'any'>('any');
  const { t } = useTranslation();

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
            {t("home.doctors.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("home.doctors.description")}
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
                {t("home.doctors.drPriyanka.title")}
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{t("home.doctors.drPriyanka.name")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("home.doctors.drPriyanka.description")}
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{t("home.doctors.drPriyanka.areasOfExpertise")}</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• {t("home.specialties.ophthalmology.cataractTreatment")}</li>
                  <li>• {t("home.specialties.ophthalmology.oculoplasty")}</li>
                  <li>• {t("home.specialties.ophthalmology.corneaCare")}</li>
                  <li>• {t("home.specialties.ophthalmology.glaucomaDiagnosis")}</li>
                  <li>• {t("home.specialties.ophthalmology.pediatricEyeCare")}</li>
                  <li>• {t("home.specialties.ophthalmology.eyeInjuryManagement")}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{t("home.doctors.drPriyanka.educationExperience")}</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• {t("home.doctors.drPriyanka.mbbs")}</li>
                  <li>• {t("home.doctors.drPriyanka.kgmc")}</li>
                  <li>• {t("home.doctors.drPriyanka.nmch")}</li>
                  <li>• {t("home.doctors.drPriyanka.experience")}</li>
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
                {t("home.doctors.drPriyanka.bookConsultation")}
              </button>
              <a 
                href="https://wa.me/919117217024?text=I%20would%20like%20to%20consult%20with%20Dr.%20Priyanka%20Sharma" 
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center text-sm"
                data-testid="profile-whatsapp-dr-priyanka"
                onClick={handleWhatsAppDrPriyanka}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                {t("common.whatsapp")}
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
                {t("home.doctors.drVinay.title")}
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{t("home.doctors.drVinay.name")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("home.doctors.drVinay.description")}
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{t("home.doctors.drVinay.areasOfSpecialization")}</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• {t("home.specialties.mentalHealth.anxietyDepression")}</li>
                  <li>• {t("home.specialties.mentalHealth.deAddiction")}</li>
                  <li>• {t("home.specialties.mentalHealth.childAdolescent")}</li>
                  <li>• {t("home.specialties.mentalHealth.memoryCognitive")}</li>
                  <li>• {t("home.specialties.mentalHealth.familyCounseling")}</li>
                  <li>• {t("home.specialties.mentalHealth.neuropsychiatric")}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{t("home.doctors.drVinay.educationExperience")}</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• {t("home.doctors.drVinay.mbbsMd")}</li>
                  <li>• {t("home.doctors.drVinay.pgdcft")}</li>
                  <li>• {t("home.doctors.drVinay.nimhans")}</li>
                  <li>• {t("home.doctors.drVinay.experience")}</li>
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
                {t("home.doctors.drVinay.bookConsultation")}
              </button>
              <a 
                href="https://wa.me/919117217024?text=I%20would%20like%20to%20consult%20with%20Dr.%20Vinay%20Kumar" 
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center text-sm"
                data-testid="profile-whatsapp-dr-vinay"
                onClick={() => trackEvent('whatsapp_dr_vinay', 'contact', 'doctor_profile')}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                {t("common.whatsapp")}
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
