
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VideoIcon, FileText, FileIcon } from "lucide-react";
import Header from "@/components/Header";

interface CardTypeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

const CardType = ({ icon, title, description, selected, onClick }: CardTypeProps) => {
  return (
    <div 
      className={`relative cursor-pointer rounded-xl p-6 transition-all duration-300 ${
        selected ? "bg-shaadi-light-pink border-2 border-shaadi-maroon" : "bg-white border border-gray-200 hover:border-shaadi-pink"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${selected ? "bg-shaadi-maroon" : "bg-shaadi-gold"}`}>
          {icon}
        </div>
        <h3 className="text-xl font-playfair font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      
      {selected && (
        <div className="absolute top-3 right-3 w-6 h-6 bg-shaadi-maroon rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      )}
    </div>
  );
};

const CardTypeSelection = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const navigate = useNavigate();

  const cardTypes = [
    {
      id: "video",
      icon: <VideoIcon className="text-white" size={28} />,
      title: "Video Invitation",
      description: "Create a beautiful animated video invitation with music and photos"
    },
    {
      id: "pdf",
      icon: <FileText className="text-white" size={28} />,
      title: "PDF Invitation",
      description: "Design an elegant PDF invitation that can be shared or printed"
    },
    {
      id: "other",
      icon: <FileIcon className="text-white" size={28} />,
      title: "Other Format",
      description: "Custom formats for special requirements and unique ideas"
    }
  ];

  const handleContinue = () => {
    if (selectedType === "video") {
      navigate("/customize/video");
    } else if (selectedType === "pdf") {
      navigate("/customize/pdf");
    } else {
      navigate("/contact");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shaadi-light-pink to-shaadi-white floral-border">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-shaadi-maroon mb-4">
              Choose Your Card Format
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Select the perfect format for your wedding invitation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {cardTypes.map((type) => (
              <CardType
                key={type.id}
                icon={type.icon}
                title={type.title}
                description={type.description}
                selected={selectedType === type.id}
                onClick={() => setSelectedType(type.id)}
              />
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleContinue}
              disabled={!selectedType}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedType
                  ? "bg-shaadi-maroon text-white hover:bg-shaadi-gold"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </main>
      
      <footer className="bg-shaadi-maroon text-white py-4 text-center text-sm">
        <div className="container mx-auto">
          <p>© 2025 ShaadiCards — Digital Wedding Invitations</p>
        </div>
      </footer>
    </div>
  );
};

export default CardTypeSelection;
