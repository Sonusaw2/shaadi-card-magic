
import { useEffect, useState } from "react";
import { VideoIcon, FileText, Search, List, Mail, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import NavigationCard from "@/components/NavigationCard";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after a delay
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3100);

    return () => clearTimeout(timer);
  }, []);

  const navigationItems = [
    {
      title: "Create Card",
      description: "Design your perfect wedding invitation card",
      icon: VideoIcon,
      color: "bg-shaadi-maroon",
      to: "/card-type"
    },
    {
      title: "Browse Templates",
      description: "Explore our beautiful collection of designs",
      icon: Search,
      color: "bg-shaadi-gold",
      to: "/templates"
    },
    {
      title: "My Orders",
      description: "Check status of your previous orders",
      icon: List,
      color: "bg-green-600",
      to: "/orders"
    },
    {
      title: "Contact Us",
      description: "Get in touch with our design experts",
      icon: Mail,
      color: "bg-blue-600",
      to: "/contact"
    },
    {
      title: "About Us",
      description: "Learn about our mission and story",
      icon: BookOpen, 
      color: "bg-purple-600",
      to: "/about"
    }
  ];

  return (
    <>
      {showSplash && <SplashScreen />}
      
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-shaadi-light-pink to-shaadi-white floral-border">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-shaadi-maroon mb-4">
                Welcome to ShaadiCards
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Create beautiful digital wedding invitations that capture the magic and elegance of your special day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {navigationItems.map((item) => (
                <NavigationCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  color={item.color}
                  to={item.to}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="bg-white p-6 rounded-xl card-shadow gold-overlay">
                <h2 className="text-2xl font-playfair font-semibold text-shaadi-maroon mb-4">Why ShaadiCards?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4">
                    <div className="font-bold text-shaadi-gold mb-2">Stunning Designs</div>
                    <p className="text-sm text-gray-600">Beautiful templates crafted by experienced designers</p>
                  </div>
                  <div className="p-4">
                    <div className="font-bold text-shaadi-gold mb-2">Personalized</div>
                    <p className="text-sm text-gray-600">Customize every detail to match your style</p>
                  </div>
                  <div className="p-4">
                    <div className="font-bold text-shaadi-gold mb-2">Easy Sharing</div>
                    <p className="text-sm text-gray-600">Share with guests via WhatsApp, email or download</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <footer className="bg-shaadi-maroon text-white py-4 text-center text-sm">
          <div className="container mx-auto">
            <p>© 2025 ShaadiCards — Digital Wedding Invitations</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
