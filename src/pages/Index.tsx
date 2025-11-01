import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import MobileSectionCards from "@/components/MobileSectionCards";
import AnimatedCounters from "@/components/AnimatedCounters";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-coach.jpg";
import { ArrowRight, Shield, Trophy, Users, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import raviSirImg from "@/assets/ravi-sir-img.png";
import logo from "@/assets/logo.png";
import fb from "@/assets/fb logo.png";
import ig from "@/assets/ig logo.png";
import li from "@/assets/linkedin.png";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookingModal, setBookingModal] = useState<{ isOpen: boolean; type: "trial" | "csr" }>({
    isOpen: false,
    type: "trial"
  });
  
  // Auto-sliding carousel images
  const carouselImages = [
    { src: heroImage, alt: "Training Session" },
    { src: heroImage, alt: "Competition Success" },
    { src: heroImage, alt: "Community Outreach" },
    { src: heroImage, alt: "Master Class" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0">
          {/* <img
            src={heroImage}
            alt="Master Ravi Sir"
            className="w-full h-full object-cover opacity-20"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
        </div>
        
        <div className="hero-content container mx-auto px-4">
          {/* <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Head Coach: Ravindra Bhandari (Ravi Sir)
          </Badge> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            RB Horangee<br />
            <span className="text-primary-glow">Do-Jang Association</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Building discipline, confidence, and character through the traditional art of Taekwondo. 
            Join our community of champions and discover your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="power" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setBookingModal({ isOpen: true, type: "trial" })}
            >
              Book Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="secondary-power" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setBookingModal({ isOpen: true, type: "csr" })}
            >
              CSR Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Animated Counters */}
      <AnimatedCounters />

      {/* Mobile Section Cards */}
      <MobileSectionCards />

      {/* Why Choose RB Horangee */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose RB Horangee Do-Jang?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Excellence in martial arts education with a commitment to holistic development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="martial-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Discipline & Respect</h3>
              <p className="text-muted-foreground">
                Traditional values of martial arts cultivating self-discipline, respect, and moral character in all students.
              </p>
            </Card>
            
            <Card className="martial-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Confidence Building</h3>
              <p className="text-muted-foreground">
                Systematic training approach that builds physical strength, mental resilience, and unshakeable confidence.
              </p>
            </Card>
            
            <Card className="martial-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">National Competitions</h3>
              <p className="text-muted-foreground">
                Host prestigious national tournaments and prepare students for competitive excellence at all levels.
              </p>
            </Card>
            
            <Card className="martial-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Outreach</h3>
              <p className="text-muted-foreground">
                Active community engagement through CSR programs, workshops, and free self-defense classes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Coach Spotlight */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* <Badge className="mb-4 bg-primary/10 text-primary">Master Instructor</Badge> */}
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Meet Master Ravindra Bhandari
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Master Ravindra Bhandari, 6th Dan Black Belt W.T. (South Korea), Hapkkido 5th Dan (WHMAF, South Korea), and President of R.B. Horangee, has been shaping martial artists since 2001. A proud member of Kukkiwon and founding member of GTTF, he now mentors over 1,000 students, blending authentic Taekwondo tradition with modern coaching to build both skilled fighters and strong individuals.

                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  His philosophy centers on developing not just skilled martial artists, but well-rounded individuals who carry 
                  the values of Taekwondo into every aspect of their lives.
                </p>
                <Button 
                  variant="power" 
                  size="lg"
                  onClick={() => setBookingModal({ isOpen: true, type: "trial" })}
                >
                  Book Free Trial Class
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={raviSirImg}
                    alt="Master Ravindra Bhandari"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary p-4 rounded-xl text-white">
                  <p className="font-bold">6th Dan Black Belt</p>
                  <p className="text-sm opacity-90">20+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-12">Our Vision & Mission</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="martial-card">
                <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading martial arts institution that develops disciplined, confident, and respectful individuals 
                  who contribute positively to society while preserving authentic Taekwondo traditions.
                </p>
              </Card>
              
              <Card className="martial-card">
                <h3 className="text-2xl font-bold text-secondary mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Providing high-quality Taekwondo training that builds physical fitness, mental strength, and moral character 
                  while hosting competitions and engaging in meaningful community outreach.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Academy Moments</h2>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="aspect-video rounded-2xl overflow-hidden relative">
              <img
                src={carouselImages[currentSlide].src}
                alt={carouselImages[currentSlide].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">{carouselImages[currentSlide].alt}</h3>
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <img src={logo} alt="Logo" />
                  {/* <span className="text-white font-bold">RB</span> */}
                </div>
                <div>
                  <h3 className="font-bold">RB Horangee Do-Jang</h3>
                  <p className="text-sm text-white/70">Association</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <p className="text-white/70 text-sm mb-2">📍 Kidz Kingdom School, 62, Kharadkar Nagar</p>
              <p className="text-white/70 text-sm mb-2">Sainikwadi, Wadgaon Sheri, Pune</p>
              <p className="text-white/70 text-sm mb-2">Maharashtra, India - 411014</p>
              <p className="text-white/70 text-sm mb-2">📞 +91 97678 93261</p>
              <p className="text-white/70 text-sm">📧 rbhorangee@gmail.com</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
                {/* <li><a href="/coaches" className="text-white/70 hover:text-white transition-colors">Coaches</a></li> */}
                <li><a href="/achievements" className="text-white/70 hover:text-white transition-colors">Achievements and Events</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/ravindra.bhandari.71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center"
                >
                  <img src={fb} alt="facebook" className="w-full h-full object-cover block" />
                </a>
                <a
                  href="https://www.instagram.com/rbhorangee?igsh=aTFoc3EzZWtidmZm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center"
                >
                  <img src={ig} alt="instagram" className="w-full h-full object-cover block" />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center"
                >
                  <img src={li} alt="LinkedIN" className="w-full h-full object-cover block" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70 text-sm">
              © 2025 RB Horangee Do-Jang Association. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ ...bookingModal, isOpen: false })}
        type={bookingModal.type}
      />
    </div>
  );
};

export default Index;
