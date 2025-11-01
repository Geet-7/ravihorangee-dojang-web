import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import BookingModal from "./BookingModal";
import logo from "@/assets/logo.png";

const MobileNavigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingModal, setBookingModal] = useState<{ isOpen: boolean; type: "trial" | "csr" }>({
    isOpen: false,
    type: "trial"
  });

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    // { path: "/coaches", label: "Coaches" },
    { path: "/achievements", label: "Achievements and Events" },
  ];

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <nav className="md:hidden fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="RB Horangee Do-Jang Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-foreground text-sm">RB Horangee</span>
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-border">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-lg font-medium transition-colors ${
                    location.pathname === item.path ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    setBookingModal({ isOpen: true, type: "csr" });
                    setIsMenuOpen(false);
                  }}
                >
                  CSR Inquiry
                </Button>
                <Button 
                  variant="power" 
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setBookingModal({ isOpen: true, type: "trial" });
                    setIsMenuOpen(false);
                  }}
                >
                  Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ ...bookingModal, isOpen: false })}
        type={bookingModal.type}
      />
    </>
  );
};

export default MobileNavigation;