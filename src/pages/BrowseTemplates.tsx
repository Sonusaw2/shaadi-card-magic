
import { useState } from "react";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Placeholder template data
const templates = [
  {
    id: "v1",
    title: "Royal Elegance",
    category: "video",
    thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=300&fit=crop",
    popular: true
  },
  {
    id: "v2",
    title: "Floral Bliss",
    category: "video",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop",
    popular: false
  },
  {
    id: "v3",
    title: "Traditional Glory",
    category: "video",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=500&h=300&fit=crop",
    popular: true
  },
  {
    id: "p1",
    title: "Classic White",
    category: "pdf",
    thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop",
    popular: false
  },
  {
    id: "p2",
    title: "Golden Dreams",
    category: "pdf",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=500&h=300&fit=crop",
    popular: true
  },
  {
    id: "p3",
    title: "Rose Garden",
    category: "pdf",
    thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=300&fit=crop",
    popular: false
  }
];

interface TemplateCardProps {
  title: string;
  thumbnail: string;
  popular: boolean;
}

const TemplateCard = ({ title, thumbnail, popular }: TemplateCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg card-shadow">
      <div className="aspect-[3/2] w-full overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="font-playfair text-white text-lg">{title}</h3>
      </div>
      
      {popular && (
        <div className="absolute top-2 right-2 bg-shaadi-gold text-white text-xs px-2 py-1 rounded">
          Popular
        </div>
      )}
      
      <div className="absolute inset-0 bg-shaadi-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-white text-shaadi-maroon px-4 py-2 rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          Use This Template
        </button>
      </div>
    </div>
  );
};

const BrowseTemplates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filterTemplates = (category: string) => {
    return templates
      .filter(template => template.category === category)
      .filter(template => 
        searchQuery === "" || 
        template.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shaadi-light-pink to-shaadi-white floral-border">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-shaadi-maroon mb-4">
              Browse Templates
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Find the perfect design for your special day
            </p>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search templates..."
                className="pl-10 border-shaadi-pink/30 focus:border-shaadi-gold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="video" className="w-full animate-fade-in">
            <TabsList className="mb-8 w-full justify-center">
              <TabsTrigger 
                value="video" 
                className="data-[state=active]:bg-shaadi-maroon data-[state=active]:text-white"
              >
                Video Templates
              </TabsTrigger>
              <TabsTrigger 
                value="pdf" 
                className="data-[state=active]:bg-shaadi-maroon data-[state=active]:text-white"
              >
                PDF Templates
              </TabsTrigger>
              <TabsTrigger 
                value="popular" 
                className="data-[state=active]:bg-shaadi-maroon data-[state=active]:text-white"
              >
                Popular
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="video" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterTemplates("video").map(template => (
                  <TemplateCard 
                    key={template.id}
                    title={template.title}
                    thumbnail={template.thumbnail}
                    popular={template.popular}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pdf" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterTemplates("pdf").map(template => (
                  <TemplateCard 
                    key={template.id}
                    title={template.title}
                    thumbnail={template.thumbnail}
                    popular={template.popular}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.filter(template => template.popular).map(template => (
                  <TemplateCard 
                    key={template.id}
                    title={template.title}
                    thumbnail={template.thumbnail}
                    popular={template.popular}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
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

export default BrowseTemplates;
