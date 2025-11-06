import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Star } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-coach.jpg";
import clip1 from "../assets/Newspaper-clip/clip (1).jpg";
import clip2 from "../assets/Newspaper-clip/clip (2).jpg";
import clip3 from "../assets/Newspaper-clip/clip (3).jpg";

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const competitionImages = [
    { src: heroImage, alt: "National Championship 2024" },
    { src: heroImage, alt: "Regional Tournament 2024" },
    { src: heroImage, alt: "Youth Competition" },
    { src: heroImage, alt: "Poomsae Championship" },
    { src: heroImage, alt: "Team Performance" },
    { src: heroImage, alt: "Award Ceremony" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % competitionImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      title: "1st TIA open International Championship",
      year: "2016",
      category: "Poomsae and Kyourogi",
      recipient: "Ravi Sir",
      description: "First place in National Taekwondo Championships"
    },
    {
      title: "Regional Tournament Victory",
      year: "2024",
      category: "Youth Sparring",
      recipient: "Student Champion 1",
      description: "Gold medal in under-18 category"
    },
    {
      title: "Academy Excellence Award",
      year: "2023",
      category: "Institution",
      recipient: "RB Horangee Do-Jang",
      description: "Recognized for outstanding contribution to martial arts"
    }
  ];

  const competitions = [
    {
      title: "RB Horangee National Open",
      year: "2023",
      participants: "1100+",
      description: "Annual national championship hosted by our academy"
    },
    {
      title: "RB Horangee National Open",
      year: "2024",
      participants: "1300+",
      description: "Annual national championship hosted by our academy"
    },
    {
      title: "RB Horangee National Open",
      year: "2025",
      participants: "1700+",
      description: "Annual national championship hosted by our academy"
    }
  ];

  const newspaperClippings = [clip1, clip2, clip3];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />

      <section className="pt-24 pb-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating excellence, hosting competitions, and building community through martial arts
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="achievements" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="competitions">Competitions Hosted</TabsTrigger>
            </TabsList>

            <TabsContent value="achievements" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="martial-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2">{achievement.title}</h3>
                        <p className="text-sm text-primary font-semibold mb-1">{achievement.year} • {achievement.category}</p>
                        <p className="text-sm text-secondary font-medium mb-2">{achievement.recipient}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-center mb-8">Newspaper Clippings</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {newspaperClippings.map((src, idx) => (
                    <Card key={idx} className="martial-card group cursor-pointer p-0">
                      <div className="aspect-video rounded-lg relative overflow-hidden">
                        <img
                          src={src}
                          alt={`Newspaper clipping ${idx + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="competitions" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {competitions.map((competition, index) => (
                  <Card key={index} className="martial-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-glow rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{competition.title}</h3>
                        <p className="text-primary font-semibold mb-2">{competition.year} • {competition.participants} Participants</p>
                        <p className="text-muted-foreground">{competition.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <section className="py-12 bg-muted/30 rounded-xl">
                <div className="container mx-auto px-4">
                  <h3 className="text-3xl font-bold text-center text-foreground mb-12">
                    Competition Glimpses
                  </h3>

                  <div className="max-w-4xl mx-auto relative">
                    <div className="aspect-video rounded-2xl overflow-hidden relative">
                      <img
                        src={competitionImages[currentSlide].src}
                        alt={competitionImages[currentSlide].alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold">
                          {competitionImages[currentSlide].alt}
                        </h3>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-2 mt-6">
                      {competitionImages.map((_, index) => (
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Achievements;