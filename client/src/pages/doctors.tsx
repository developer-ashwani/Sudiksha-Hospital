import { trackEvent } from "@/lib/analytics";

export default function Doctors() {
  const handleBookDrPriyanka = () => {
    trackEvent('book_dr_priyanka', 'conversion', 'doctors_page');
  };

  const handleBookDrVinay = () => {
    trackEvent('book_dr_vinay', 'conversion', 'doctors_page');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Meet Our Expert Doctors
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our experienced medical professionals are dedicated to providing exceptional healthcare with advanced treatment options and compassionate care.
          </p>
        </div>

        <div className="space-y-16">
          {/* Dr. Priyanka Sharma - Featured */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
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
                  Senior Consultant Ophthalmologist
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Dr. Priyanka Sharma</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Senior Consultant at Sudiksha Hospital with 11 years of experience in comprehensive ophthalmology, advanced eye surgeries, and community eye care. Former Senior Resident at NMCH Patna.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Areas of Expertise</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Cataract Treatment & Surgeries</li>
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Oculoplasty & Eyelid Surgery</li>
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Cornea Care & Management</li>
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Glaucoma Diagnosis</li>
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Pediatric Eye Care</li>
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Eye Injury Management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Education & Experience</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center"><i className="fas fa-graduation-cap text-primary mr-2"></i>MBBS, MS (Ophthalmology)</li>
                      <li className="flex items-center"><i className="fas fa-university text-primary mr-2"></i>KGMC, Lucknow Graduate</li>
                      <li className="flex items-center"><i className="fas fa-hospital text-primary mr-2"></i>Former Senior Resident, NMCH Patna</li>
                      <li className="flex items-center"><i className="fas fa-clock text-primary mr-2"></i>11 Years Clinical Experience</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6 p-4 bg-card rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-primary">11+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Eye Surgeries</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center text-sm"
                    data-testid="book-dr-priyanka"
                    onClick={handleBookDrPriyanka}
                  >
                    <i className="fas fa-calendar-plus mr-2"></i>
                    Book Consultation
                  </button>
                  <a 
                    href="https://wa.me/917970838322?text=I%20would%20like%20to%20consult%20with%20Dr.%20Priyanka%20Sharma" 
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                    data-testid="whatsapp-dr-priyanka"
                    onClick={() => trackEvent('whatsapp_dr_priyanka', 'contact', 'doctors_page')}
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
                  Neuropsychiatrist & Mental Health Specialist
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Dr. Vinay Kumar</h2>
                <p className="text-muted-foreground mb-6">
                  Neuropsychiatrist with 11+ years of experience, former NIMHANS Bengaluru psychiatrist specializing in comprehensive mental healthcare with holistic treatment approach. Expert in de-addiction therapy and family counseling.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Areas of Specialization</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>Anxiety, Depression & Stress</li>
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>De-addiction Therapy</li>
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>Child & Adolescent Psychiatry</li>
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>Memory & Cognitive Disorders</li>
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>Family Counseling</li>
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>Neuropsychiatric Disorders</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Education & Experience</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center"><i className="fas fa-graduation-cap text-blue-600 mr-2"></i>MBBS, MD (Psychiatry) - MGIMS Sevagram</li>
                      <li className="flex items-center"><i className="fas fa-certificate text-blue-600 mr-2"></i>PGDCFT, MIPS, CHRE (UK)</li>
                      <li className="flex items-center"><i className="fas fa-hospital text-blue-600 mr-2"></i>Former NIMHANS, Bengaluru</li>
                      <li className="flex items-center"><i className="fas fa-clock text-blue-600 mr-2"></i>11+ Years Experience</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6 p-4 bg-card rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-primary">11+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">2000+</div>
                    <div className="text-sm text-muted-foreground">Patients Treated</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    data-testid="book-dr-vinay"
                    onClick={handleBookDrVinay}
                  >
                    <i className="fas fa-calendar-plus mr-2"></i>
                    Book Consultation
                  </button>
                  <a 
                    href="https://wa.me/917970838322?text=I%20would%20like%20to%20consult%20with%20Dr.%20Vinay%20Kumar" 
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                    data-testid="whatsapp-dr-vinay"
                    onClick={() => trackEvent('whatsapp_dr_vinay', 'contact', 'doctors_page')}
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Need Help Choosing the Right Doctor?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team can help you find the right specialist for your condition. Contact us for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+917970838322" 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="call-guidance"
                onClick={() => trackEvent('click_to_call', 'contact', 'doctors_cta')}
              >
                Call for Guidance
              </a>
              <a 
                href="https://wa.me/917970838322?text=I%20need%20help%20choosing%20the%20right%20doctor" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                data-testid="whatsapp-guidance"
                onClick={() => trackEvent('whatsapp_guidance', 'contact', 'doctors_cta')}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
