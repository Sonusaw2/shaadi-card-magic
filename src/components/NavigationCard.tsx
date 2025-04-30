
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface NavigationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  to: string;
}

const NavigationCard = ({ title, description, icon: Icon, color, to }: NavigationCardProps) => {
  return (
    <Link 
      to={to}
      className="group block w-full bg-white rounded-xl overflow-hidden transition-all duration-300 
                 hover:shadow-lg card-shadow border border-gray-100 hover:border-shaadi-pink"
    >
      <div className="p-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-playfair font-semibold mb-2 text-shaadi-maroon group-hover:text-shaadi-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-shaadi-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
};

export default NavigationCard;
