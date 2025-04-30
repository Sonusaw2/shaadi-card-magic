
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white border-b border-shaadi-pink/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/home" className="flex items-center">
          <div className="text-2xl md:text-3xl font-playfair font-bold text-shaadi-maroon">
            Shaadi<span className="text-shaadi-gold">Cards</span>
          </div>
        </Link>
        
        <Button 
          variant="outline" 
          className="border-shaadi-gold text-shaadi-maroon hover:bg-shaadi-light-pink hover:text-shaadi-maroon flex items-center gap-2 rounded-full"
        >
          <HelpCircle size={18} />
          <span className="hidden sm:inline">Need Help?</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
