import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  doctor: z.enum(["dr-priyanka", "dr-vinay", "any"], {
    required_error: "Please select a preferred doctor"
  }),
  date: z.string().min(1, "Please select a preferred date"),
  concern: z.string().min(10, "Please describe your concern in detail")
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export default function AppointmentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      doctor: "dr-priyanka",
      date: "",
      concern: ""
    }
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: AppointmentFormData) => {
      const response = await apiRequest("POST", "/api/book", data);
      return response.json();
    },
    onSuccess: (data) => {
      trackEvent('appointment_booked', 'conversion', 'appointment_form');
      
      toast({
        title: "Appointment Request Submitted!",
        description: "We'll contact you shortly to confirm your appointment.",
      });

      // Redirect to WhatsApp with prefilled message
      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, '_blank');
      }

      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      console.error('Booking error:', error);
      toast({
        title: "Booking Failed",
        description: "Please try again or call us directly at +91 79708 38322",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: AppointmentFormData) => {
    setIsSubmitting(true);
    trackEvent('appointment_form_submit', 'conversion', 'form_submission');
    bookingMutation.mutate(data);
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
                Schedule a consultation with Dr. Priyanka Sharma or our specialist team. We'll respond within 30 minutes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span>Same-day appointments available</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-primary mr-3"></i>
                  <span>Direct WhatsApp confirmation</span>
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
                              placeholder="Enter your name" 
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
                              placeholder="+91 XXXXX XXXXX" 
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
                      name="doctor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Doctor</FormLabel>
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
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date</FormLabel>
                          <FormControl>
                            <Input 
                              type="date"
                              {...field} 
                              data-testid="appointment-date"
                            />
                          </FormControl>
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
                        <FormLabel>Describe Your Concern</FormLabel>
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
                    By submitting, you agree to receive appointment confirmations via WhatsApp
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
