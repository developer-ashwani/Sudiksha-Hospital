import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { trackEvent } from "@/lib/analytics";

interface AppointmentConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  appointmentData: {
    appointmentId: string;
    name: string;
    phone: string;
    email?: string;
    doctor: string;
    service: string;
    date: string;
    time: string;
    concern: string;
    previousPatient: boolean;
    preferredContact: string;
  };
}

export function AppointmentConfirmation({ isOpen, onClose, appointmentData }: AppointmentConfirmationProps) {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    trackEvent('print_appointment', 'engagement', 'confirmation_modal');
    
    // Create a printable version
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Appointment Confirmation - ${appointmentData.appointmentId}</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              .header { text-align: center; margin-bottom: 30px; }
              .details { margin: 20px 0; }
              .detail-row { margin: 10px 0; display: flex; }
              .label { font-weight: bold; width: 150px; }
              .value { flex: 1; }
              .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Sudiksha Hospital</h1>
              <h2>Appointment Confirmation</h2>
              <p>Appointment ID: ${appointmentData.appointmentId}</p>
            </div>
            <div class="details">
              <div class="detail-row">
                <div class="label">Patient Name:</div>
                <div class="value">${appointmentData.name}</div>
              </div>
              <div class="detail-row">
                <div class="label">Phone:</div>
                <div class="value">${appointmentData.phone}</div>
              </div>
              ${appointmentData.email ? `
              <div class="detail-row">
                <div class="label">Email:</div>
                <div class="value">${appointmentData.email}</div>
              </div>
              ` : ''}
              <div class="detail-row">
                <div class="label">Doctor:</div>
                <div class="value">${appointmentData.doctor === 'dr-priyanka' ? 'Dr. Priyanka Sharma (Ophthalmologist)' : 
                  appointmentData.doctor === 'dr-vinay' ? 'Dr. Vinay Kumar (Neuropsychiatrist)' : 'Any Available Doctor'}</div>
              </div>
              <div class="detail-row">
                <div class="label">Service:</div>
                <div class="value">${appointmentData.service === 'eye-care' ? 'Eye Care & Ophthalmology' :
                  appointmentData.service === 'mental-health' ? 'Mental Health & Psychiatry' :
                  appointmentData.service === 'general' ? 'General Consultation' : 'Emergency Consultation'}</div>
              </div>
              <div class="detail-row">
                <div class="label">Date:</div>
                <div class="value">${new Date(appointmentData.date).toLocaleDateString('en-IN', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</div>
              </div>
              <div class="detail-row">
                <div class="label">Time:</div>
                <div class="value">${appointmentData.time}</div>
              </div>
              <div class="detail-row">
                <div class="label">Concern:</div>
                <div class="value">${appointmentData.concern}</div>
              </div>
              <div class="detail-row">
                <div class="label">Previous Patient:</div>
                <div class="value">${appointmentData.previousPatient ? 'Yes' : 'No'}</div>
              </div>
              <div class="detail-row">
                <div class="label">Contact Method:</div>
                <div class="value">${appointmentData.preferredContact === 'phone' ? 'Phone Call' :
                  appointmentData.preferredContact === 'whatsapp' ? 'WhatsApp' : 'Email'}</div>
              </div>
            </div>
            <div class="footer">
              <p>Please arrive 15 minutes before your appointment time.</p>
              <p>For any changes, call us at +91 9117217024</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    }
    setIsPrinting(false);
  };

  const handleWhatsApp = () => {
    const message = `Hi, I've booked an appointment (ID: ${appointmentData.appointmentId}) for ${appointmentData.service} with ${appointmentData.doctor} on ${appointmentData.date} at ${appointmentData.time}. Please confirm.`;
    const whatsappUrl = `https://wa.me/919117217024?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    trackEvent('whatsapp_confirmation', 'engagement', 'confirmation_modal');
  };

  const handleCall = () => {
    window.open('tel:+919117217024', '_self');
    trackEvent('call_confirmation', 'engagement', 'confirmation_modal');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-center">
            Appointment Confirmed! 🎉
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Your appointment has been successfully booked
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Appointment ID */}
          <div className="text-center">
            <Badge variant="outline" className="text-lg px-4 py-2">
              Appointment ID: {appointmentData.appointmentId}
            </Badge>
          </div>

          {/* Appointment Details */}
          <div className="bg-accent/50 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold mb-4">Appointment Details</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Patient Name</p>
                <p className="font-medium">{appointmentData.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <p className="font-medium">{appointmentData.phone}</p>
              </div>
              {appointmentData.email && (
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{appointmentData.email}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-muted-foreground">Preferred Contact</p>
                <p className="font-medium capitalize">{appointmentData.preferredContact}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Doctor</p>
                  <p className="font-medium">
                    {appointmentData.doctor === 'dr-priyanka' ? 'Dr. Priyanka Sharma (Ophthalmologist)' : 
                     appointmentData.doctor === 'dr-vinay' ? 'Dr. Vinay Kumar (Neuropsychiatrist)' : 
                     'Any Available Doctor'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service Type</p>
                  <p className="font-medium">
                    {appointmentData.service === 'eye-care' ? 'Eye Care & Ophthalmology' :
                     appointmentData.service === 'mental-health' ? 'Mental Health & Psychiatry' :
                     appointmentData.service === 'general' ? 'General Consultation' : 'Emergency Consultation'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">
                    {new Date(appointmentData.date).toLocaleDateString('en-IN', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{appointmentData.time}</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-muted-foreground">Concern Description</p>
              <p className="font-medium">{appointmentData.concern}</p>
            </div>

            {appointmentData.previousPatient && (
              <div className="flex items-center text-sm text-primary">
                <i className="fas fa-check-circle mr-2"></i>
                <span>Previous Patient</span>
              </div>
            )}
          </div>

          {/* Next Steps */}
          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">What's Next?</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <i className="fas fa-phone text-primary mr-3 mt-1"></i>
                <span>We'll contact you via {appointmentData.preferredContact} within 30 minutes to confirm your appointment</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-primary mr-3 mt-1"></i>
                <span>Please arrive 15 minutes before your scheduled time</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-id-card text-primary mr-3 mt-1"></i>
                <span>Bring a valid ID and any relevant medical records</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-primary mr-3 mt-1"></i>
                <span>For any changes, call us at +91 9117217024</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleWhatsApp}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Send WhatsApp
            </Button>
            <Button 
              onClick={handleCall}
              variant="outline"
              className="flex-1"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Us
            </Button>
            <Button 
              onClick={handlePrint}
              variant="outline"
              className="flex-1"
              disabled={isPrinting}
            >
              <i className="fas fa-print mr-2"></i>
              {isPrinting ? 'Printing...' : 'Print'}
            </Button>
          </div>

          <div className="text-center">
            <Button onClick={onClose} variant="ghost">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
