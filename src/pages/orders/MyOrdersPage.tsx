
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Order {
  id: string;
  created_at: string;
  card_type: string;
  status: string;
  event_date: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const MyOrdersPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("inquiries")
          .select("id, created_at, card_type, status, event_date")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (error) throw error;

        setOrders(data || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
        toast({
          title: "Error",
          description: "Failed to load your orders. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, navigate, toast]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shaadi-light-pink to-shaadi-white floral-border">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-shaadi-maroon mb-4">
              My Orders
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Track and manage your wedding invitation orders
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-16 h-16 border-4 border-shaadi-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : orders.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <h3 className="text-xl font-playfair text-shaadi-maroon mb-4">No Orders Yet</h3>
                <p className="text-gray-600 mb-6">
                  You haven't placed any orders yet. Browse our templates to create your perfect wedding invitation.
                </p>
                <button 
                  onClick={() => navigate("/templates")}
                  className="px-6 py-2 bg-shaadi-maroon text-white rounded-md hover:bg-shaadi-gold transition-colors"
                >
                  Browse Templates
                </button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 animate-fade-in">
              {orders.map(order => (
                <Card key={order.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-shaadi-light-pink to-white">
                    <div className="flex flex-wrap justify-between items-center">
                      <CardTitle className="text-shaadi-maroon">
                        Order #{order.id.substring(0, 8)}
                      </CardTitle>
                      <Badge className={statusColors[order.status] || "bg-gray-100"}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Order Date</p>
                        <p>{formatDate(order.created_at)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Event Date</p>
                        <p>{formatDate(order.event_date)}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm text-gray-500">Card Type</p>
                        <p className="capitalize">{order.card_type}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button 
                        onClick={() => navigate(`/contact?orderId=${order.id}`)}
                        className="text-shaadi-gold hover:text-shaadi-maroon transition-colors text-sm"
                      >
                        Contact us about this order
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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

export default MyOrdersPage;
