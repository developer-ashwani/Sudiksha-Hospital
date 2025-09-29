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
                  Chief Ophthalmologist
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Dr. Priyanka Sharma</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Board-certified ophthalmologist with over 15 years of experience in comprehensive eye care, cataract surgery, and advanced vision correction procedures.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Specializations</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Cataract Surgery</li>
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Retinal Disorders</li>
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Glaucoma Treatment</li>
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>LASIK Surgery</li>
                      <li className="flex items-center"><i className="fas fa-check text-primary mr-2"></i>Pediatric Ophthalmology</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Qualifications</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center"><i className="fas fa-graduation-cap text-primary mr-2"></i>MBBS, MS Ophthalmology</li>
                      <li className="flex items-center"><i className="fas fa-graduation-cap text-primary mr-2"></i>Fellowship in Vitreoretinal Surgery</li>
                      <li className="flex items-center"><i className="fas fa-certificate text-primary mr-2"></i>Member, All India Ophthalmological Society</li>
                      <li className="flex items-center"><i className="fas fa-award text-primary mr-2"></i>Excellence Award in Eye Care</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6 p-4 bg-card rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">Surgeries</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
                    data-testid="book-dr-priyanka"
                    onClick={handleBookDrPriyanka}
                  >
                    <i className="fas fa-calendar-plus mr-2"></i>
                    Book Dr. Priyanka
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
                  Neuropsychiatrist
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Dr. Vinay Kumar</h2>
                <p className="text-muted-foreground mb-6">
                  Experienced neuropsychiatrist specializing in mental health disorders, neurological conditions, and comprehensive psychiatric care with a holistic approach to treatment.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Specializations</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>Depression & Anxiety</li>
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>Bipolar Disorder</li>
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>Schizophrenia</li>
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>Neurological Disorders</li>
                      <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i>Addiction Treatment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Experience & Credentials</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center"><i className="fas fa-graduation-cap text-blue-600 mr-2"></i>MBBS, MD Psychiatry</li>
                      <li className="flex items-center"><i className="fas fa-certificate text-blue-600 mr-2"></i>Certified in CBT & DBT</li>
                      <li className="flex items-center"><i className="fas fa-clock text-blue-600 mr-2"></i>12+ Years Clinical Experience</li>
                      <li className="flex items-center"><i className="fas fa-users text-blue-600 mr-2"></i>2000+ Patients Treated</li>
                    </ul>
                  </div>
                </div>
                
                <button 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                  data-testid="book-dr-vinay"
                  onClick={handleBookDrVinay}
                >
                  <i className="fas fa-calendar-plus mr-2"></i>
                  Book Consultation
                </button>
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
