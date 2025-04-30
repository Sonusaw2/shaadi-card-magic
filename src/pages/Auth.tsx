
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, UserPlus, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const Auth = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      toast({
        title: "Welcome back!",
        description: "You've been successfully signed in.",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: error.message || "Please check your credentials and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (error) throw error;
      
      toast({
        title: "Account created!",
        description: "Please check your email for a confirmation link.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign up failed",
        description: error.message || "Please check your information and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shaadi-light-pink to-shaadi-white floral-border">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-playfair font-bold text-shaadi-maroon">
              Welcome to ShaadiCards
            </h1>
            <p className="text-gray-600 mt-2">
              Sign in or create an account to manage your wedding invitations
            </p>
          </div>
          
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-shaadi-pink">
                    <Mail className="ml-3 text-gray-400" size={18} />
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-0 focus-visible:ring-0"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-shaadi-pink">
                    <Lock className="ml-3 text-gray-400" size={18} />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="border-0 focus-visible:ring-0"
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-shaadi-maroon hover:bg-shaadi-gold text-white flex items-center justify-center gap-2"
                >
                  {loading ? "Signing In..." : "Sign In"}
                  <LogIn size={18} />
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-shaadi-pink">
                    <Mail className="ml-3 text-gray-400" size={18} />
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-0 focus-visible:ring-0"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-shaadi-pink">
                    <Lock className="ml-3 text-gray-400" size={18} />
                    <Input
                      type="password"
                      placeholder="Password (min. 6 characters)"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      className="border-0 focus-visible:ring-0"
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-shaadi-maroon hover:bg-shaadi-gold text-white flex items-center justify-center gap-2"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                  <UserPlus size={18} />
                </Button>
              </form>
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

export default Auth;
