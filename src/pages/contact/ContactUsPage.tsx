
import { useState } from "react";
import Header from "@/components/Header";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

const ContactUsPage = () => {
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
              <ContactInfo />
            </div>
            
            <div className="md:col-span-2">
              <ContactForm />
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

export default ContactUsPage;
