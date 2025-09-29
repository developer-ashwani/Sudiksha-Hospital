import { trackEvent } from "@/lib/analytics";

export default function StickyContactBar() {
  const handleCall = () => {
    trackEvent('click_to_call', 'contact', 'sticky_bar');
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_contact', 'contact', 'sticky_bar');
  };

  const handleBook = () => {
    trackEvent('book_appointment', 'conversion', 'sticky_bar');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card shadow-lg border-t z-40 md:hidden">
      <div className="grid grid-cols-3 gap-1">
        <a 
          href="tel:+917970838322" 
          className="flex flex-col items-center justify-center p-3 hover:bg-accent/50 transition-colors"
          data-testid="sticky-call"
          onClick={handleCall}
        >
          <i className="fas fa-phone text-primary text-lg mb-1"></i>
          <span className="text-xs font-medium">Call</span>
        </a>
        <a 
          href="https://wa.me/917970838322?text=I%20would%20like%20to%20book%20an%20appointment" 
          className="flex flex-col items-center justify-center p-3 hover:bg-accent/50 transition-colors"
          data-testid="sticky-whatsapp"
          onClick={handleWhatsApp}
        >
          <i className="fab fa-whatsapp text-green-600 text-lg mb-1"></i>
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <button 
          className="flex flex-col items-center justify-center p-3 hover:bg-accent/50 transition-colors"
          data-testid="sticky-book"
          onClick={handleBook}
        >
          <i className="fas fa-calendar-plus text-secondary text-lg mb-1"></i>
          <span className="text-xs font-medium">Book</span>
        </button>
      </div>
    </div>
  );
}
