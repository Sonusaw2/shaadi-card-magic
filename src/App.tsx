
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import CardTypeSelection from "./pages/CardTypeSelection";
import BrowseTemplates from "./pages/BrowseTemplates";
import ContactUs from "./pages/ContactUs";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Index />} />
            <Route path="/card-type" element={<CardTypeSelection />} />
            <Route path="/templates" element={<BrowseTemplates />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/auth" element={<Auth />} />
            
            {/* Redirect these routes to contact form for now */}
            <Route path="/orders" element={<Navigate to="/contact" />} />
            <Route path="/about" element={<Navigate to="/contact" />} />
            <Route path="/customize/*" element={<Navigate to="/contact" />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
