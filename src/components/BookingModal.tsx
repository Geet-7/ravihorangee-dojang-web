import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Phone, Mail, Users, Clock } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "trial" | "csr";
}

const BookingModal = ({ isOpen, onClose, type }: BookingModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Build the message body
    const messageBody =
      type === "trial"
        ? `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAge: ${formData.age}\nExperience: ${formData.experience}\nPreferred Time: ${formData.preferredTime}\nMessage: ${formData.message}`
        : `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

    try {
      // CHANGE THIS TO YOUR RENDER SERVER URL
      // Replace 'your-app-name' with your actual Render service name
      const response = await fetch("https://ravihorangee-dojang-web-server.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: messageBody,
        }),
      });

      if (response.ok) {
        toast({
          title: type === "trial" ? "Free Trial Booked!" : "CSR Inquiry Sent!",
          description:
            type === "trial"
              ? "We'll contact you within 24 hours to schedule your free trial class."
              : "Thank you for your CSR inquiry. We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          experience: "",
          preferredTime: "",
          message: "",
        });
        onClose();
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.error || "There was a problem sending your request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {type === "trial" ? (
              <span className="flex items-center justify-center gap-2">
                <CalendarDays className="w-6 h-6 text-primary" />
                Book Your Free Trial Class
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Users className="w-6 h-6 text-secondary" />
                CSR Partnership Inquiry
              </span>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Info Section */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
            {type === "trial" ? (
              <div>
                <h3 className="font-semibold text-foreground mb-2">What to expect in your free trial:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 90-minute introductory class with Master Ravi Sir</li>
                  <li>• Basic Taekwondo techniques and philosophy</li>
                  <li>• Assessment of your current fitness level</li>
                  <li>• Personalized training plan discussion</li>
                  <li>• Academy tour and program overview</li>
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold text-foreground mb-2">CSR Partnership Opportunities:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Community self-defense workshops</li>
                  <li>• Youth development programs</li>
                  <li>• Corporate wellness sessions</li>
                  <li>• Educational seminars on discipline and character building</li>
                </ul>
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              {type === "trial" && (
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    placeholder="Your age"
                  />
                </div>
              )}
            </div>

            {type === "trial" && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience">Martial Arts Experience</Label>
                  <Select onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Complete Beginner</SelectItem>
                      <SelectItem value="some">Some Experience</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="preferredTime">Preferred Day</Label>
                  <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Monday (7:00pm to 8.30pm)</SelectItem>
                      <SelectItem value="afternoon">Wednesday (7:00pm to 8.30pm)</SelectItem>
                      <SelectItem value="evening">Friday (7:00pm to 8.30pm)</SelectItem>
                      <SelectItem value="weekend">Saturday (7:30pm to 9.00pm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="message">
                {type === "trial" ? "Additional Questions or Goals" : "Tell us about your CSR requirements"}
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder={
                  type === "trial" 
                    ? "What are your fitness goals? Any specific areas you'd like to focus on?"
                    : "Describe your CSR objectives and how we can partner with your organization..."
                }
                rows={4}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant={type === "trial" ? "power" : "secondary-power"}
                className="flex-1"
              >
                {type === "trial" ? (
                  <span className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    Book Free Trial
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Send Inquiry
                  </span>
                )}
              </Button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3 text-foreground">Or contact us directly:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 97678 93261</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>rbhorangee@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon-Sat: 6 AM - 9 PM</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;