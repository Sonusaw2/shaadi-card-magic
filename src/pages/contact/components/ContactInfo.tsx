
import { Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
