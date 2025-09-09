import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About RB Horangee Do-Jang
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building discipline, character, and excellence through the art of Taekwondo
          </p>
        </div>
      </section>

      {/* Academy Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story & Ethos</h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed">
               Master Ravindra Bhandari—an accomplished 6th Dan Black Belt W.T. (South Korea), 5th Dan Hapkkido Black Belt, Kukkiwon member, and President of R.B. Horangee. His Taekwondo journey began in 1996 under Master Balakrishna Bhandari, earning his first black belt in 2001, the same year he started coaching with just one student. Driven by passion and discipline, he has since inspired over 1,000 students and continues to mentor young athletes at St. Felix School. As a founding member of GTTF, Master Ravi is dedicated not only to cultivating martial arts excellence but also to instilling the core values of respect, perseverance, and integrity in every student.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Our core ideology centers on the traditional values of respect, perseverance, self-control, and indomitable spirit. 
                We believe that martial arts training extends far beyond physical techniques, nurturing mental strength, 
                emotional balance, and strong character in all our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timetable */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Training Schedule</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="martial-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Day</th>
                      <th className="text-left py-3 px-4">Time</th>
                      <th className="text-left py-3 px-4">Type</th>
                      {/* <th className="text-left py-3 px-4">Age Group</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Monday</td>
                      <td className="py-3 px-4">7:00 - 8:30 PM</td>
                      <td className="py-3 px-4">Basic Training + Poomsae Practice</td>
                      {/* <td className="py-3 px-4">Kids (6-12)</td> */}
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Wednesday</td>
                      <td className="py-3 px-4">7:00 - 8:30 PM</td>
                      <td className="py-3 px-4">Basic Training + Kyorugi Practice</td>
                      {/* <td className="py-3 px-4">All Ages</td> */}
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Friday</td>
                      <td className="py-3 px-4">7:00 - 8:30 PM</td>
                      <td className="py-3 px-4">Basic Training + Poomsae Practice</td>
                      {/* <td className="py-3 px-4">All Levels</td> */}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Saturday</td>
                      <td className="py-3 px-4">7:30 - 9:00 PM</td>
                      <td className="py-3 px-4">Basic Training + Kyorugi Practice</td>
                      {/* <td className="py-3 px-4">All Ages</td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="martial-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a leading martial arts institution that develops disciplined, confident, and respectful individuals 
                who contribute positively to society while preserving the authentic traditions of Taekwondo.
              </p>
            </Card>
            
            <Card className="martial-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide high-quality Taekwondo training that builds physical fitness, mental strength, and moral character 
                while hosting national competitions and engaging in community outreach programs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="martial-card">
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-10 h-10 text-primary" />
                  <span>Kidz Kingdom School, 62, Kharadkar Nagar, Sainikwadi, Wadgaon Sheri, Pune, Maharashtra, India - 411014</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 97678 93261</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>rbhorangee@gmail.com</span>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Mon-Sat: 6:00 AM - 9:00 PM</span>
                </div> */}
              </div>
              
              <div className="mt-8 space-y-4">
                <Button variant="power" className="w-full">
                  Book Free Trial
                </Button>
                <Button variant="secondary-power" className="w-full">
                  CSR Inquiry
                </Button>
              </div>
            </Card>
            
            <Card className="martial-card">
              <h3 className="text-xl font-bold mb-6">Location</h3>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.560195286902!2d73.9183894759406!3d18.54876648255033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16e4c5ef6c5%3A0x38043247c507b92e!2sKidz%20Kingdom!5e0!3m2!1sen!2sin!4v1757407993594!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;