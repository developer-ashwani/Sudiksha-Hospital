import { useState, useEffect } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AppointmentConfirmation } from "@/components/ui/appointment-confirmation";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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

interface AppointmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDoctor?: 'dr-priyanka' | 'dr-vinay' | 'any';
}

export default function AppointmentForm({ isOpen, onClose, selectedDoctor }: AppointmentFormProps) {
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
      doctor: selectedDoctor || "dr-priyanka",
      service: selectedDoctor === "dr-vinay" ? "mental-health" : "eye-care",
      date: "",
      time: "",
      concern: "",
      previousPatient: false,
      preferredContact: "phone"
    }
  });

  // Update form when selectedDoctor changes
  useEffect(() => {
    if (selectedDoctor) {
      form.reset({
        name: "",
        phone: "",
        email: "",
        doctor: selectedDoctor,
        service: selectedDoctor === "dr-vinay" ? "mental-health" : "eye-care",
        date: "",
        time: "",
        concern: "",
        previousPatient: false,
        preferredContact: "phone"
      });
    }
  }, [selectedDoctor, form]);

  const bookingMutation = useMutation({
    mutationFn: async (data: AppointmentFormData) => {
      // Generate appointment ID
      const appointmentId = `APT-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
      
      // Create appointment data
      const appointmentData = {
        ...data,
        appointmentId,
        submittedAt: new Date().toISOString(),
        status: 'pending'
      };

      // For now, simulate API call - in production, this would be a real API
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            appointmentId,
            whatsappUrl: `https://wa.me/919117217024?text=Hi, I've booked an appointment (ID: ${appointmentId}) for ${data.service} with ${data.doctor} on ${data.date} at ${data.time}. Please confirm.`
          });
        }, 1500);
      });
    },
    onSuccess: (data: any) => {
      trackEvent('appointment_booked', 'conversion', 'appointment_form');
      
      // Store appointment data for confirmation modal
      setAppointmentData({
        ...form.getValues(),
        appointmentId: data.appointmentId
      });
      
      // Show confirmation modal
      setShowConfirmation(true);
      
      // Reset form
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      console.error('Booking error:', error);
      toast({
        title: "Booking Failed",
        description: "Please try again or call us directly at +91 9117217024",
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Section - Information */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-6 lg:p-8 flex flex-col justify-center">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Book Your Appointment
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Schedule a consultation with our specialist doctors. Choose your preferred service, doctor, and time slot. We'll confirm your appointment within 30 minutes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <span className="text-gray-700 text-sm">Same-day appointments available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <span className="text-gray-700 text-sm">Choose your preferred doctor and time</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <span className="text-gray-700 text-sm">Print confirmation with details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-1/2 bg-white p-6 lg:p-8 overflow-y-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              className="bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          <FormLabel className="text-sm font-medium text-gray-700">Phone Number *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="9876543210" 
                              className="bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com" 
                            className="bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            {...field} 
                            data-testid="appointment-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Service Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                data-testid="appointment-service"
                                className="bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
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
                          <FormLabel className="text-sm font-medium text-gray-700">Preferred Doctor *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                data-testid="appointment-doctor"
                                className="bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Preferred Date *</FormLabel>
                          <FormControl>
                            <Input 
                              type="date"
                              min={new Date().toISOString().split('T')[0]}
                              className="bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          <FormLabel className="text-sm font-medium text-gray-700">Preferred Time *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                data-testid="appointment-time"
                                className="bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
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
                        <FormLabel className="text-sm font-medium text-gray-700">Describe Your Concern *</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={3}
                            placeholder="Tell us about your symptoms or health concern..." 
                            className="bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            {...field} 
                            data-testid="appointment-concern"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                              className="mt-1"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-medium text-gray-700">
                              I am a previous patient
                            </FormLabel>
                            <p className="text-xs text-gray-500">
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
                          <FormLabel className="text-sm font-medium text-gray-700">Preferred Contact Method *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                data-testid="appointment-contact-method"
                                className="bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
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
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    disabled={isSubmitting}
                    data-testid="appointment-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Booking Appointment...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-calendar-check mr-2"></i>
                        Book Appointment
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
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
      </DialogContent>
    </Dialog>
  );
}
