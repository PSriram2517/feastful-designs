
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 bg-gradient-to-b from-cream-50 to-cream-200">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-serif font-bold text-burgundy-500 mb-2">404</h1>
          <div className="w-16 h-1 bg-gold-400 mx-auto mb-6"></div>
          <h2 className="text-2xl font-serif mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button
              size="lg"
              className="bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 rounded-md px-6 py-6 text-base flex items-center gap-2"
            >
              <Home size={18} />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
