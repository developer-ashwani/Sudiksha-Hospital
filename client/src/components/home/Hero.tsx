import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  const handleBookDrPriyanka = () => {
    trackEvent('book_dr_priyanka', 'conversion', 'hero');
  };

  const handleCallNow = () => {
    trackEvent('click_to_call', 'contact', 'hero');
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
              Patna's Trusted Ophthalmologist — 
              <span className="text-primary"> Dr. Priyanka Sharma</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Expert eye care with advanced technology and compassionate treatment. Over 15 years of experience in comprehensive ophthalmology, cataract surgery, and vision correction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                data-testid="hero-book-dr-priyanka"
                onClick={handleBookDrPriyanka}
              >
                <i className="fas fa-calendar-plus mr-3"></i>
                Book Dr. Priyanka
              </button>
              <a 
                href="tel:+917970838322" 
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors flex items-center justify-center"
                data-testid="hero-call-now"
                onClick={handleCallNow}
              >
                <i className="fas fa-phone mr-3"></i>
                Call Now
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Surgeries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/images/dr-priyanka-sharma.png"
              alt="Dr. Priyanka Sharma - Ophthalmologist" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <i className="fas fa-award text-secondary text-2xl"></i>
                <div>
                  <div className="font-semibold">Board Certified</div>
                  <div className="text-sm text-muted-foreground">Ophthalmologist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
