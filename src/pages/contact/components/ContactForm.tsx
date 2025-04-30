
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  cardType: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>();
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Convert the date string to a proper Date object for PostgreSQL
      const formattedDate = new Date(data.eventDate).toISOString().split('T')[0];
      
      const { error } = await supabase.from('inquiries').insert({
        user_id: user?.id || null,
        name: data.name,
        email: data.email,
        phone: data.phone,
        event_date: formattedDate,
        card_type: data.cardType,
        message: data.message
      });
      
      if (error) throw error;
      
      toast({
        title: "Inquiry submitted",
        description: "Thank you! We'll reach out within 24 hours.",
      });
      
      reset();
      
      // If user is not logged in, suggest creating an account
      if (!user) {
        setTimeout(() => {
          toast({
            title: "Create an account",
            description: "Sign up to track your inquiry and access more features.",
            action: (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => navigate("/auth")}
                className="border-shaadi-maroon text-shaadi-maroon hover:bg-shaadi-light-pink"
              >
                Sign Up
              </Button>
            ),
          });
        }, 2000);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: error.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-xl p-6 card-shadow">
      <h2 className="text-xl font-playfair font-semibold text-shaadi-maroon mb-4">Send Us a Message</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            id="name"
            label="Full Name"
            placeholder="Your name"
            register={register}
            registerOptions={{ required: "Name is required" }}
            error={errors.name}
          />
          
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="Your email address"
            register={register}
            registerOptions={{ 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            }}
            error={errors.email}
          />
          
          <FormField
            id="phone"
            label="Phone Number"
            placeholder="Your phone number"
            register={register}
            registerOptions={{ required: "Phone number is required" }}
            error={errors.phone}
          />
          
          <FormField
            id="eventDate"
            label="Wedding/Event Date"
            type="date"
            register={register}
            registerOptions={{ required: "Event date is required" }}
            error={errors.eventDate}
          />
        </div>
        
        <div>
          <label htmlFor="cardType" className="block text-sm font-medium text-gray-700 mb-1">Card Type</label>
          <select
            id="cardType"
            {...register("cardType", { required: "Card type is required" })}
            className={`w-full rounded-md border ${errors.cardType ? "border-red-300" : "border-gray-300"} p-2 focus:outline-none focus:ring-2 focus:ring-shaadi-pink`}
          >
            <option value="">Select card type</option>
            <option value="video">Video Invitation</option>
            <option value="pdf">PDF Invitation</option>
            <option value="other">Other Format</option>
          </select>
          {errors.cardType && (
            <p className="text-red-500 text-xs mt-1">{errors.cardType.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message/Instructions</label>
          <Textarea
            id="message"
            placeholder="Tell us about your requirements..."
            rows={4}
            {...register("message", { required: "Message is required" })}
            className={errors.message ? "border-red-300" : ""}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <div className="flex justify-between pt-4">
          <Button
            type="button"
            onClick={() => reset()}
            variant="outline"
            className="border-shaadi-maroon text-shaadi-maroon hover:bg-shaadi-light-pink"
          >
            Reset
          </Button>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-shaadi-maroon hover:bg-shaadi-gold text-white flex items-center gap-2"
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
            <Send size={16} />
          </Button>
        </div>

        {user && (
          <div className="mt-4 bg-green-50 p-3 rounded-md border border-green-200">
            <p className="text-sm text-green-800">
              You're signed in as {user.email}. Your inquiry will be linked to your account.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

interface FormFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  register: any;
  registerOptions: any;
  error: any;
}

const FormField = ({ id, label, placeholder, type = "text", register, registerOptions, error }: FormFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      {...register(id, registerOptions)}
      className={error ? "border-red-300" : ""}
    />
    {error && (
      <p className="text-red-500 text-xs mt-1">{error.message}</p>
    )}
  </div>
);

export default ContactForm;
