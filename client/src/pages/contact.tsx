import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const handleDirectionsClick = () => {
    trackEvent('get_directions', 'navigation', 'contact_page');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Contact Sudiksha Hospital
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conveniently located in Rajendranagar, Patna with easy access and parking facilities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marker-alt text-primary text-4xl mb-4"></i>
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Google Maps integration would be embedded here</p>
                <button 
                  className="mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="directions-button"
                  onClick={handleDirectionsClick}
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-primary text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-semibold mb-1">Hospital Address</h3>
                    <p className="text-muted-foreground">
                      1st Floor, Above IDBI Bank<br />
                      Near Pramod Laddu Bhandar<br />
                      Arya Kumar Road, Rajendranagar<br />
                      Patna – 800016, Bihar
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-phone text-primary text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-semibold mb-1">Phone Numbers</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="tel:+917970838322" 
                        className="hover:text-primary transition-colors"
                        data-testid="contact-phone"
                        onClick={() => trackEvent('click_to_call', 'contact', 'contact_page')}
                      >
                        +91 79708 38322
                      </a><br />
                      <span className="text-sm">Available 24/7 for emergencies</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-envelope text-primary text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-semibold mb-1">Email Address</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="mailto:hospitalsudiksha@gmail.com" 
                        className="hover:text-primary transition-colors"
                        data-testid="contact-email"
                      >
                        hospitalsudiksha@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-clock text-primary text-xl mt-1 mr-4"></i>
                  <div>
                    <h3 className="font-semibold mb-1">Hospital Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                      <p className="text-destructive font-medium">Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="tel:+917970838322" 
                  className="bg-primary text-primary-foreground p-3 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
                  data-testid="quick-call"
                  onClick={() => trackEvent('click_to_call', 'contact', 'quick_actions')}
                >
                  <i className="fas fa-phone mb-1 block"></i>
                  Call Now
                </a>
                <a 
                  href="https://wa.me/917970838322?text=I%20would%20like%20to%20book%20an%20appointment%20at%20Sudiksha%20Hospital" 
                  className="bg-green-600 text-white p-3 rounded-lg text-center font-medium hover:bg-green-700 transition-colors"
                  data-testid="quick-whatsapp"
                  onClick={() => trackEvent('whatsapp_contact', 'contact', 'quick_actions')}
                >
                  <i className="fab fa-whatsapp mb-1 block"></i>
                  WhatsApp
                </a>
                <button 
                  className="bg-secondary text-secondary-foreground p-3 rounded-lg text-center font-medium hover:bg-secondary/90 transition-colors col-span-2"
                  data-testid="directions-action"
                  onClick={handleDirectionsClick}
                >
                  <i className="fas fa-directions mb-1 block"></i>
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Department Contact Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            Department Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-eye text-primary text-2xl mr-3"></i>
                <h3 className="text-xl font-heading font-semibold">Ophthalmology Department</h3>
              </div>
              <div className="space-y-3">
                <p><strong>Head of Department:</strong> Dr. Priyanka Sharma</p>
                <p><strong>Specialties:</strong> Cataract, LASIK, Retinal Care, Glaucoma</p>
                <p><strong>OPD Timings:</strong> Mon-Sat 9:00 AM - 6:00 PM</p>
                <button 
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  data-testid="book-ophthalmology"
                  onClick={() => trackEvent('book_department', 'conversion', 'ophthalmology')}
                >
                  Book Eye Consultation
                </button>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-brain text-blue-600 text-2xl mr-3"></i>
                <h3 className="text-xl font-heading font-semibold">Neuropsychiatry Department</h3>
              </div>
              <div className="space-y-3">
                <p><strong>Head of Department:</strong> Dr. Vinay Kumar</p>
                <p><strong>Specialties:</strong> Depression, Anxiety, Bipolar, Neurological Disorders</p>
                <p><strong>OPD Timings:</strong> Mon-Sat 10:00 AM - 7:00 PM</p>
                <button 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  data-testid="book-neuropsychiatry"
                  onClick={() => trackEvent('book_department', 'conversion', 'neuropsychiatry')}
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-destructive/10 rounded-2xl p-8 text-center">
          <i className="fas fa-exclamation-triangle text-destructive text-4xl mb-4"></i>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Emergency Contact
          </h2>
          <p className="text-muted-foreground mb-6">
            For medical emergencies, call us immediately. Our emergency team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+917970838322" 
              className="bg-destructive text-destructive-foreground px-8 py-3 rounded-lg font-semibold hover:bg-destructive/90 transition-colors"
              data-testid="emergency-contact-call"
              onClick={() => trackEvent('emergency_call', 'emergency', 'contact_page')}
            >
              <i className="fas fa-phone mr-2"></i>
              Emergency Call
            </a>
            <a 
              href="https://wa.me/917970838322?text=EMERGENCY%20-%20I%20need%20immediate%20medical%20assistance" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              data-testid="emergency-contact-whatsapp"
              onClick={() => trackEvent('emergency_whatsapp', 'emergency', 'contact_page')}
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Emergency WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
