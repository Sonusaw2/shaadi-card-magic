
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // After 2.5 seconds, start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // After 3 seconds, navigate to home
    const navigateTimer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    // Clear timers if component unmounts
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-shaadi-white transition-all duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      <div className="relative animate-logo-bounce">
        <div className="text-6xl md:text-8xl font-playfair font-bold text-shaadi-maroon">
          Shaadi
          <span className="text-shaadi-gold">Cards</span>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-shaadi-pink via-shaadi-gold to-shaadi-pink"></div>
      </div>
      <p className="mt-4 text-xl md:text-2xl text-shaadi-maroon font-opensans italic">
        Create Magical Digital Invitations
      </p>
    </div>
  );
};

export default SplashScreen;
