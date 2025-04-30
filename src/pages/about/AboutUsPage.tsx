
import Header from "@/components/Header";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shaadi-light-pink to-shaadi-white floral-border">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-shaadi-maroon mb-4">
              About ShaadiCards
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Creating beautiful digital wedding invitations since 2022
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in">
            <section className="mb-10">
              <h2 className="text-2xl font-playfair font-semibold text-shaadi-gold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                ShaadiCards was founded with a simple mission: to blend traditional wedding aesthetics with modern technology. 
                We recognized the need for beautiful, customizable wedding invitations that could be easily shared digitally 
                with loved ones across the globe.
              </p>
              <p className="text-gray-700">
                What started as a small team of designers and developers has grown into a dedicated service helping thousands 
                of couples share their special day with friends and family in a meaningful, elegant, and eco-friendly way.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-playfair font-semibold text-shaadi-gold mb-4">Our Design Philosophy</h2>
              <p className="text-gray-700">
                We believe that wedding invitations should reflect the unique love story and personality of each couple. 
                Our designs blend traditional motifs with contemporary style, ensuring that every invitation feels both 
                timeless and fresh. Each template is crafted with attention to detail, from the typography to the intricate 
                patterns that frame your special announcement.
              </p>
            </section>
            
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-shaadi-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shaadi-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-shaadi-maroon mb-2">Customizable</h3>
                <p className="text-gray-600 text-sm">
                  Every element can be personalized to match your wedding theme and style
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-shaadi-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shaadi-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-shaadi-maroon mb-2">Easy Sharing</h3>
                <p className="text-gray-600 text-sm">
                  Share your invitation instantly via WhatsApp, email or social media
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-shaadi-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shaadi-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-shaadi-maroon mb-2">Eco-Friendly</h3>
                <p className="text-gray-600 text-sm">
                  Digital invitations reduce paper waste while maintaining elegance
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-playfair font-semibold text-shaadi-gold mb-4">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {["Aarav Sharma", "Priya Patel", "Vikram Singh", "Ananya Desai", "Raj Malhotra", "Meera Reddy"].map((name, index) => (
                  <div key={index} className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/200?img=${index + 10}`} 
                        alt={name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-playfair font-semibold text-shaadi-maroon">{name}</h3>
                    <p className="text-gray-600 text-sm">
                      {["Designer", "Developer", "Customer Support", "Marketing", "Design Lead", "Product Manager"][index]}
                    </p>
                  </div>
                ))}
              </div>
            </section>
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

export default AboutUsPage;
