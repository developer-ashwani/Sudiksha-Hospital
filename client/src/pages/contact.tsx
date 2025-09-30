import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const handleDirectionsClick = () => {
    trackEvent('get_directions', 'navigation', 'contact_page');
  };

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
    trackEvent('faq_toggle', 'engagement', faqId);
  };

  const faqs = [
    {
      id: "insurance",
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans including government health schemes like CGHS, ECHS, and Ayushman Bharat. We also work with private insurance providers. Please call us to verify your specific coverage before your appointment."
    },
    {
      id: "cataract-prep",
      question: "How do I prepare for cataract surgery?",
      answer: "Before cataract surgery, you'll need a comprehensive eye exam, medical clearance, and pre-operative measurements. We'll provide detailed preparation instructions including dietary restrictions and medication guidelines during your consultation. The surgery is typically done as an outpatient procedure."
    },
    {
      id: "lasik-pain",
      question: "Is LASIK surgery painful?",
      answer: "LASIK is virtually painless. We use numbing eye drops, and most patients only experience slight pressure during the procedure. The entire surgery takes about 15 minutes per eye. Recovery is quick with minimal discomfort, and most patients return to normal activities within 24-48 hours."
    },
    {
      id: "psychiatric-consultation",
      question: "What should I expect during my psychiatric consultation?",
      answer: "Your first consultation with Dr. Vinay Kumar will include a detailed discussion of your symptoms, medical history, and concerns. The session typically lasts 45-60 minutes. Dr. Kumar will develop a personalized treatment plan which may include therapy, medication, or a combination of both based on your specific needs."
    },
    {
      id: "emergency-care",
      question: "Do you offer emergency eye care services?",
      answer: "Yes, we provide 24/7 emergency eye care for conditions like sudden vision loss, eye injuries, severe pain, retinal detachment, or chemical burns. Call our emergency line immediately at +91 79708 38322 for urgent eye problems."
    },
    {
      id: "appointment-booking",
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling us at +91 79708 38322, sending a WhatsApp message, or using our online appointment form. We offer same-day appointments for urgent cases and typically respond to booking requests within 30 minutes."
    },
    {
      id: "first-visit",
      question: "What should I bring for my first visit?",
      answer: "Please bring a valid ID, insurance cards, list of current medications, previous medical records related to your condition, and any existing eyeglasses or contact lenses. Arrive 15 minutes early to complete registration."
    },
    {
      id: "costs",
      question: "What are the consultation fees?",
      answer: "Consultation fees vary by specialty. Eye consultations start from ₹500, and psychiatric consultations from ₹800. We offer package deals for regular treatments. Insurance coverage and payment plans are available. Call us for detailed pricing information."
    },
    {
      id: "follow-up",
      question: "How often do I need follow-up visits?",
      answer: "Follow-up frequency depends on your condition and treatment. Post-surgery patients typically need follow-ups at 1 day, 1 week, and 1 month. Chronic conditions may require monthly or quarterly visits. We'll provide a personalized follow-up schedule."
    },
    {
      id: "telemedicine",
      question: "Do you offer telemedicine consultations?",
      answer: "Yes, we offer video consultations for follow-up visits, medication adjustments, and non-emergency consultations. Initial consultations for new patients are typically done in-person for proper examination. Contact us to schedule a virtual appointment."
    }
  ];

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
                <p><strong>Specialties:</strong> Cataract, Oculoplasty, Retinal Care, Glaucoma</p>
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

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our services, treatments, and hospital policies
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <button 
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                  onClick={() => toggleFaq(faq.id)}
                  data-testid={`faq-toggle-${faq.id}`}
                >
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  <i className={`fas fa-chevron-${expandedFaq === faq.id ? 'up' : 'down'} text-muted-foreground flex-shrink-0`}></i>
                </button>
                {expandedFaq === faq.id && (
                  <div className="p-6 pt-0 border-t">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions Section */}
          <div className="mt-16 text-center">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our team is here to help you with any questions about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+917970838322" 
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  data-testid="faq-call-us"
                  onClick={() => trackEvent('click_to_call', 'contact', 'faq_cta')}
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Us
                </a>
                <a 
                  href="https://wa.me/917970838322?text=I%20have%20a%20question%20about%20your%20services" 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  data-testid="faq-whatsapp"
                  onClick={() => trackEvent('whatsapp_question', 'contact', 'faq_cta')}
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp Us
                </a>
                <a 
                  href="mailto:hospitalsudiksha@gmail.com" 
                  className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  data-testid="faq-email"
                  onClick={() => trackEvent('email_question', 'contact', 'faq_cta')}
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
