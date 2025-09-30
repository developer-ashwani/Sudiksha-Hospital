import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  const handleBookAppointment = () => {
    trackEvent('book_appointment', 'conversion', 'hero');
  };

  const handleOurSpecialists = () => {
    trackEvent('our_specialists', 'navigation', 'hero');
  };

  const handleConsultDrPriyanka = () => {
    trackEvent('consult_dr_priyanka', 'conversion', 'hero');
  };

  const handleConsultDrVinay = () => {
    trackEvent('consult_dr_vinay', 'conversion', 'hero');
  };

  const handleEyeCareExcellence = () => {
    trackEvent('eye_care_excellence', 'navigation', 'hero_cards');
  };

  const handleMentalHealthCare = () => {
    trackEvent('mental_health_care', 'navigation', 'hero_cards');
  };

  const handleExpertSpecialists = () => {
    trackEvent('expert_specialists', 'navigation', 'hero_cards');
  };

  const handlePatientCenteredCare = () => {
    trackEvent('patient_centered_care', 'navigation', 'hero_cards');
  };

  return (
    <section className="bg-gray-50 py-16 px-4" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl">Trusted Care for</div>
              <div className="text-4xl sm:text-5xl lg:text-6xl text-primary">Mental Health & Eye Health</div>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Sudiksha Hospital specializes in comprehensive mental health and eye care services with expert neuropsychiatrists and ophthalmologists in Rajendranagar, Patna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12">
              <button 
                className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                data-testid="hero-book-appointment"
                onClick={handleBookAppointment}
              >
                <i className="fas fa-clock mr-2 sm:mr-3"></i>
                Book Appointment
              </button>
              <button 
                className="bg-white border-2 border-foreground text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                data-testid="hero-our-specialists"
                onClick={handleOurSpecialists}
              >
                <i className="fas fa-eye mr-2 sm:mr-3"></i>
                Our Specialists
              </button>
            </div>
          </div>

          {/* Right Column - Doctor Cards */}
          <div className="space-y-4 lg:space-y-6 order-2">
            {/* Dr. Priyanka Sharma Card */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="/images/dr-priyanka-sharma.png"
                      alt="Dr. Priyanka Sharma - Ophthalmologist" 
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center">
                      <i className="fas fa-eye text-xs"></i>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-base mb-1">Dr. Priyanka Sharma</h3>
                    <p className="text-primary font-medium text-xs mb-1">Senior Consultant Ophthalmologist</p>
                    <p className="text-muted-foreground text-xs mb-3">MBBS, MS (Ophthalmology) - KGMC Lucknow</p>
                  </div>
                </div>
                <div className="flex gap-1 flex-wrap mb-4">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Cataract Surgery</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Oculoplasty</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Glaucoma</span>
                </div>
                <button 
                  className="w-full bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors"
                  data-testid="consult-dr-priyanka"
                  onClick={handleConsultDrPriyanka}
                >
                  Consult
                </button>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="/images/dr-priyanka-sharma.png"
                      alt="Dr. Priyanka Sharma - Ophthalmologist" 
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center">
                      <i className="fas fa-eye text-sm"></i>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-lg mb-1">Dr. Priyanka Sharma</h3>
                    <p className="text-primary font-medium text-sm mb-1">Senior Consultant Ophthalmologist</p>
                    <p className="text-muted-foreground text-sm mb-3">MBBS, MS (Ophthalmology) - KGMC Lucknow</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Cataract Surgery</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Oculoplasty</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Glaucoma</span>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button 
                      className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors flex-shrink-0"
                      data-testid="consult-dr-priyanka"
                      onClick={handleConsultDrPriyanka}
                    >
                      Consult
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Vinay Kumar Card */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="/images/dr-vinay-kumar.png"
                      alt="Dr. Vinay Kumar - Neuropsychiatrist" 
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 bg-foreground text-background w-6 h-6 rounded-full flex items-center justify-center">
                      <i className="fas fa-brain text-xs"></i>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-base mb-1">Dr. Vinay Kumar</h3>
                    <p className="text-primary font-medium text-xs mb-1">Neuropsychiatrist & Mental Health Specialist</p>
                    <p className="text-muted-foreground text-xs mb-3">MD (Psychiatry) - MGIMS | PGDCFT, MIPS, CHRE (UK)</p>
                  </div>
                </div>
                <div className="flex gap-1 flex-wrap mb-4">
                  <span className="bg-gray-100 text-foreground px-2 py-1 rounded text-xs">Depression & Anxiety</span>
                  <span className="bg-gray-100 text-foreground px-2 py-1 rounded text-xs">De-addiction</span>
                  <span className="bg-gray-100 text-foreground px-2 py-1 rounded text-xs">Child Psychiatry</span>
                </div>
                <button 
                  className="w-full bg-gray-100 text-foreground px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                  data-testid="consult-dr-vinay"
                  onClick={handleConsultDrVinay}
                >
                  Consult
                </button>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="/images/dr-vinay-kumar.png"
                      alt="Dr. Vinay Kumar - Neuropsychiatrist" 
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 bg-foreground text-background w-7 h-7 rounded-full flex items-center justify-center">
                      <i className="fas fa-brain text-sm"></i>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-lg mb-1">Dr. Vinay Kumar</h3>
                    <p className="text-primary font-medium text-sm mb-1">Neuropsychiatrist & Mental Health Specialist</p>
                    <p className="text-muted-foreground text-sm mb-3">MD (Psychiatry) - MGIMS | PGDCFT, MIPS, CHRE (UK)</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-gray-100 text-foreground px-2 py-1 rounded text-xs">Depression & Anxiety</span>
                      <span className="bg-gray-100 text-foreground px-2 py-1 rounded text-xs">De-addiction</span>
                      <span className="bg-gray-100 text-foreground px-2 py-1 rounded text-xs">Child Psychiatry</span>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button 
                      className="bg-gray-100 text-foreground px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors flex-shrink-0"
                      data-testid="consult-dr-vinay"
                      onClick={handleConsultDrVinay}
                    >
                      Consult
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {/* Eye Care Excellence Card */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-eye text-primary text-xl"></i>
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">Eye Care Excellence</h3>
              <p className="text-muted-foreground text-sm">Comprehensive ophthalmology services including cataract, Oculoplasty, and retinal care</p>
            </div>
            <button 
              className="w-full bg-gray-200 text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
              onClick={handleEyeCareExcellence}
            >
              Access Now
            </button>
          </div>

          {/* Mental Health Care Card */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-4">
              <div className="bg-gray-200 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-brain text-foreground text-xl"></i>
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">Mental Health Care</h3>
              <p className="text-muted-foreground text-sm">Expert neuropsychiatry services for depression, anxiety, and addiction recovery</p>
            </div>
            <button 
              className="w-full bg-gray-200 text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
              onClick={handleMentalHealthCare}
            >
              Access Now
            </button>
          </div>

          {/* Expert Specialists Card */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-medal text-primary text-xl"></i>
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">Expert Specialists</h3>
              <p className="text-muted-foreground text-sm">Highly qualified doctors with experience from premier institutions</p>
            </div>
            <button 
              className="w-full bg-gray-200 text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
              onClick={handleExpertSpecialists}
            >
              Access Now
            </button>
          </div>

          {/* Patient-Centered Care Card */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-4">
              <div className="bg-gray-200 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-users text-foreground text-xl"></i>
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">Patient-Centered Care</h3>
              <p className="text-muted-foreground text-sm">Compassionate approach with personalized treatment plans</p>
            </div>
            <button 
              className="w-full bg-gray-200 text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
              onClick={handlePatientCenteredCare}
            >
              Access Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
