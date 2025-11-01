import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import BookingModal from "./BookingModal";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
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
    <nav className="hidden md:block fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Academy Name */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 from-primary to-secondary rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="RB Horangee Do-Jang Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">RB Horangee Do-Jang</h1>
              <p className="text-sm text-muted-foreground">Association</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex"
              onClick={() => setBookingModal({ isOpen: true, type: "csr" })}
            >
              CSR Inquiry
            </Button>
            <Button 
              variant="power" 
              size="sm"
              onClick={() => setBookingModal({ isOpen: true, type: "trial" })}
            >
              Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ ...bookingModal, isOpen: false })}
        type={bookingModal.type}
      />
    </nav>
  );
};

export default Navigation;