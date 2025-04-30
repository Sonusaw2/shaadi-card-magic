
import { Link } from "react-router-dom";
import { HelpCircle, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white border-b border-shaadi-pink/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/home" className="flex items-center">
          <div className="text-2xl md:text-3xl font-playfair font-bold text-shaadi-maroon">
            Shaadi<span className="text-shaadi-gold">Cards</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="border-shaadi-gold text-shaadi-maroon hover:bg-shaadi-light-pink hover:text-shaadi-maroon flex items-center gap-2 rounded-full"
          >
            <HelpCircle size={18} />
            <span className="hidden sm:inline">Need Help?</span>
          </Button>
          
          {user ? (
            <Button 
              variant="outline"
              className="border-shaadi-maroon text-shaadi-maroon hover:bg-shaadi-light-pink flex items-center gap-2"
              onClick={handleSignOut}
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          ) : (
            <Button 
              variant="default"
              className="bg-shaadi-maroon hover:bg-shaadi-gold text-white flex items-center gap-2"
              asChild
            >
              <Link to="/auth">
                <LogIn size={18} />
                <span className="hidden sm:inline">Sign In</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
