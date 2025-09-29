import { trackEvent } from "@/lib/analytics";

export default function DoctorProfile() {
  const handleBookDrPriyanka = () => {
    trackEvent('book_dr_priyanka', 'conversion', 'doctor_profile');
  };

  const handleBookDrVinay = () => {
    trackEvent('book_dr_vinay', 'conversion', 'doctor_profile');
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
        
        {/* Dr. Priyanka Sharma - Featured */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/images/dr-priyanka-sharma.png"
                alt="Dr. Priyanka Sharma - Chief Ophthalmologist" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <div className="bg-primary text-primary-foreground inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                Chief Ophthalmologist
              </div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Dr. Priyanka Sharma</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Board-certified ophthalmologist with over 15 years of experience in comprehensive eye care, cataract surgery, and advanced vision correction procedures.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Specializations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cataract Surgery</li>
                    <li>• Retinal Disorders</li>
                    <li>• Glaucoma Treatment</li>
                    <li>• LASIK Surgery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Qualifications</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• MBBS, MS Ophthalmology</li>
                    <li>• Fellowship in Vitreoretinal Surgery</li>
                    <li>• Member, All India Ophthalmological Society</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
                  data-testid="profile-book-dr-priyanka"
                  onClick={handleBookDrPriyanka}
                >
                  <i className="fas fa-calendar-plus mr-2"></i>
                  Book Dr. Priyanka
                </button>
                <a 
                  href="https://wa.me/917970838322?text=I%20would%20like%20to%20consult%20with%20Dr.%20Priyanka%20Sharma" 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  data-testid="profile-whatsapp-dr-priyanka"
                  onClick={handleWhatsAppDrPriyanka}
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dr. Vinay Kumar */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <img 
                src="/images/dr-vinay-kumar.png" 
                alt="Dr. Vinay Kumar - Neuropsychiatrist" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:col-span-2">
              <div className="bg-blue-100 text-blue-800 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                Neuropsychiatrist
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Dr. Vinay Kumar</h3>
              <p className="text-muted-foreground mb-6">
                Experienced neuropsychiatrist specializing in mental health disorders, neurological conditions, and comprehensive psychiatric care with a holistic approach to treatment.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Specializations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Depression & Anxiety</li>
                    <li>• Bipolar Disorder</li>
                    <li>• Schizophrenia</li>
                    <li>• Neurological Disorders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 12+ Years Clinical Experience</li>
                    <li>• MBBS, MD Psychiatry</li>
                    <li>• Certified in CBT & DBT</li>
                  </ul>
                </div>
              </div>
              
              <button 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                data-testid="profile-book-dr-vinay"
                onClick={handleBookDrVinay}
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
