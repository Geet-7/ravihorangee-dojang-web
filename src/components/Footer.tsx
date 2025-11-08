import logo from "@/assets/logo.png";
import fb from "@/assets/fb logo.png";
import ig from "@/assets/ig logo.png";
import li from "@/assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src={logo} alt="Logo" />
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
              <li><a href="../pages/About" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="../pages/Achievements" className="text-white/70 hover:text-white transition-colors">Achievements</a></li>
              <li><a href="../pages/Gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a></li>
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
                href="http://www.linkedin.com/in/RB-HORANGEE"
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
            © 2025 RB Horangee Do-Jang Association. All rights reserved. Website made by Manas and Linux.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
