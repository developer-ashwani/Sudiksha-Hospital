import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AppointmentConfirmation } from "@/components/ui/appointment-confirmation";

const appointmentSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid Indian phone number"),
  email: z.string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  doctor: z.enum(["dr-priyanka", "dr-vinay", "any"], {
    required_error: "Please select a preferred doctor"
  }),
  service: z.enum(["eye-care", "mental-health", "general", "emergency"], {
    required_error: "Please select a service type"
  }),
  date: z.string()
    .min(1, "Please select a preferred date")
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Please select a future date"),
  time: z.string()
    .min(1, "Please select a preferred time"),
  concern: z.string()
    .min(10, "Please describe your concern in detail (minimum 10 characters)")
    .max(500, "Description must be less than 500 characters"),
  previousPatient: z.boolean().default(false),
  preferredContact: z.enum(["phone", "whatsapp", "email"], {
    required_error: "Please select your preferred contact method"
  })
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export default function AppointmentSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [appointmentData, setAppointmentData] = useState<any>(null);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      doctor: "dr-priyanka",
      service: "eye-care",
      date: "",
      time: "",
      concern: "",
      previousPatient: false,
      preferredContact: "phone"
    }
  });

  // Track appointment booking
  const trackAppointmentBooking = (appointmentData: any) => {
    trackEvent('appointment_booked', 'conversion', 'appointment_form');
  };

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    trackEvent('appointment_form_submit', 'conversion', 'form_submission');
    
    // Generate appointment ID
    const appointmentId = `APT-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    const appointmentData = { ...data, appointmentId };
    
    // Store appointment data for confirmation modal
    setAppointmentData(appointmentData);
    
    // Track appointment booking
    trackAppointmentBooking(appointmentData);
    
    // Show confirmation modal
    setShowConfirmation(true);
    
    // Reset form
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="bg-accent/50 py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Book Your Appointment
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Schedule a consultation with our specialist doctors. Choose your preferred service, doctor, and time slot. We'll confirm your appointment within 30 minutes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span>Same-day appointments available</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span>Choose your preferred doctor and time</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span>Print confirmation with details</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              data-testid="appointment-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="9876543210" 
                              {...field} 
                              data-testid="appointment-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com" 
                            {...field} 
                            data-testid="appointment-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="appointment-service">
                                <SelectValue placeholder="Select service type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="eye-care">Eye Care & Ophthalmology</SelectItem>
                              <SelectItem value="mental-health">Mental Health & Psychiatry</SelectItem>
                              <SelectItem value="general">General Consultation</SelectItem>
                              <SelectItem value="emergency">Emergency Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="doctor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Doctor *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="appointment-doctor">
                                <SelectValue placeholder="Select a doctor" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="dr-priyanka">Dr. Priyanka Sharma (Ophthalmologist)</SelectItem>
                              <SelectItem value="dr-vinay">Dr. Vinay Kumar (Neuropsychiatrist)</SelectItem>
                              <SelectItem value="any">Any Available Doctor</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date *</FormLabel>
                          <FormControl>
                            <Input 
                              type="date"
                              min={new Date().toISOString().split('T')[0]}
                              {...field} 
                              data-testid="appointment-date"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="appointment-time">
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="09:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM</SelectItem>
                              <SelectItem value="17:00">5:00 PM</SelectItem>
                              <SelectItem value="18:00">6:00 PM</SelectItem>
                              <SelectItem value="19:00">7:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="concern"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Describe Your Concern *</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={3}
                            placeholder="Tell us about your symptoms or health concern..." 
                            {...field} 
                            data-testid="appointment-concern"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="previousPatient"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              data-testid="appointment-previous-patient"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I am a previous patient
                            </FormLabel>
                            <p className="text-sm text-muted-foreground">
                              Check if you have visited our hospital before
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="preferredContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Contact Method *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="appointment-contact-method">
                                <SelectValue placeholder="How should we contact you?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="phone">Phone Call</SelectItem>
                              <SelectItem value="whatsapp">WhatsApp</SelectItem>
                              <SelectItem value="email">Email</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-4 text-lg"
                    disabled={isSubmitting}
                    data-testid="appointment-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-3"></i>
                        Booking Appointment...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-calendar-check mr-3"></i>
                        Book Appointment
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting, you agree to receive appointment confirmations via your preferred contact method
                  </p>
                </form>
              </Form>
            </div>
          </div>

          {/* Appointment Confirmation Modal */}
          {appointmentData && (
            <AppointmentConfirmation
              isOpen={showConfirmation}
              onClose={() => setShowConfirmation(false)}
              appointmentData={appointmentData}
            />
          )}
        </div>
      </div>
    </section>
  );
}
