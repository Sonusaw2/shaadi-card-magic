
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, Send } from "lucide-react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  cardType: string;
  message: string;
}

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>();
  
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      console.log("Form data:", data);
      setIsSubmitting(false);
      toast({
        title: "Inquiry submitted",
        description: "Thank you! We'll reach out within 24 hours.",
      });
      reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shaadi-light-pink to-shaadi-white floral-border">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-shaadi-maroon mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Have questions? Get in touch with our wedding invitation experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl p-6 card-shadow h-full">
                <h2 className="text-xl font-playfair font-semibold text-shaadi-maroon mb-4">Reach Us</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-shaadi-maroon rounded-full p-2 mr-4">
                      <Phone className="text-white" size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Sat, 10am - 7pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-shaadi-maroon rounded-full p-2 mr-4">
                      <Mail className="text-white" size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">hello@shaadicards.com</p>
                      <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Connect With Us</h3>
                    <div className="flex space-x-3">
                      {/* Social media icons */}
                      {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                        <a 
                          key={social}
                          href="#" 
                          className="w-8 h-8 rounded-full bg-shaadi-light-pink flex items-center justify-center transition-colors hover:bg-shaadi-pink"
                        >
                          <img 
                            src={`https://api.iconify.design/mdi/${social}.svg?color=%23800000`} 
                            alt={social} 
                            width="16" 
                            height="16"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl p-6 card-shadow">
                <h2 className="text-xl font-playfair font-semibold text-shaadi-maroon mb-4">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name", { required: "Name is required" })}
                        className={errors.name ? "border-red-300" : ""}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className={errors.email ? "border-red-300" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <Input
                        id="phone"
                        placeholder="Your phone number"
                        {...register("phone", { required: "Phone number is required" })}
                        className={errors.phone ? "border-red-300" : ""}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">Wedding/Event Date</label>
                      <Input
                        id="eventDate"
                        type="date"
                        {...register("eventDate", { required: "Event date is required" })}
                        className={errors.eventDate ? "border-red-300" : ""}
                      />
                      {errors.eventDate && (
                        <p className="text-red-500 text-xs mt-1">{errors.eventDate.message}</p>
                      )}
                    </div>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-shaadi-maroon text-white py-4 text-center text-sm mt-8">
        <div className="container mx-auto">
          <p>© 2025 ShaadiCards — Digital Wedding Invitations</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
