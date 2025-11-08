import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import heroImage from "@/assets/hero-coach.jpg";
import clip1 from "../assets/Newspaper-clip/clip (1).jpg";
import clip2 from "../assets/Newspaper-clip/clip (2).jpg";
import clip3 from "../assets/Newspaper-clip/clip (3).jpg";
import Footer from "@/components/Footer";

// ADD THESE IMPORTS FOR COMPETITION CAROUSEL
import compCarousel1 from "@/assets/competition-carousel/gal_comp_host (8).JPG";
import compCarousel2 from "@/assets/competition-carousel/gal_comp_host (56).JPG";
import compCarousel3 from "@/assets/competition-carousel/gal_comp_host (78).JPG";
import compCarousel4 from "@/assets/competition-carousel/gal_comp_host (90).JPG";

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllAchievements, setShowAllAchievements] = useState(false);

  // UPDATE COMPETITION IMAGES TO USE COMPETITION-CAROUSEL FOLDER
  const competitionImages = [
    { src: compCarousel1, alt: "" },
    { src: compCarousel2, alt: "" },
    { src: compCarousel3, alt: "" },
    { src: compCarousel4, alt: "" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % competitionImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const achievements = [
    // ... (full list of 15 achievements)
    {
      title: "1st Open National championship",
      year: "2016",
      category: "Poomsae and Kyourogi",
      recipient: "12 Gold, 5 Silver, 5 bronze",
      description: "Organised By Horangee Taekwondo Academy, Pune"
    },
    {
      title: "1st TIA open International Championship",
      year: "2016",
      category: "Poomsae and Kyourogi",
      recipient: "2 gold, 2 silver, 2 bronze medals",
      description: "Organised by TIA, Kolkata"
    },
    {
      title: "7th India open Taekwondo cup",
      year: "2016",
      category: "Poomsae and Kyourogi",
      recipient: "8 gold, 12 silver, 12 bronze medals",
      description: "Organized by taekwondo board of Telengana, Hyderabad"
    },
    {
      title: "2nd Open National championship",
      year: "2017",
      category: "Poomsae and Kyourogi",
      recipient: "14 Gold, 8 Silver, 6 bronze",
      description: "Organised By Horangee Taekwondo Academy, Pune"
    },
    {
      title: "2nd TIA open International Championship",
      year: "2017",
      category: "Poomsae and Kyourogi",
      recipient: "3 silver, 3 bronze medals",
      description: "Organised by TIA, Kolkata"
    },
    {
      title: "3rd Open National championship",
      year: "2018",
      category: "Poomsae and Kyourogi",
      recipient: "20 Gold, 6 Silver, 6 bronze",
      description: "Organised By Horangee Taekwondo Academy, Pune"
    },
    {
      title: "3rd TIA open International Championship",
      year: "2018",
      category: "Poomsae and Kyourogi",
      recipient: "2 gold, 1 silver, 13 bronze medals",
      description: "Organised by TIA, Kolkata"
    },
    {
      title: "4th Open National championship",
      year: "2019",
      category: "Poomsae and Kyourogi",
      recipient: "22 Gold, 12 Silver, 6 bronze",
      description: "Organised By Horangee Taekwondo Academy, Pune"
    },
    {
      title: "4th TIA open International Championship",
      year: "2019",
      category: "Poomsae and Kyourogi",
      recipient: "3 gold, 4 silver, 3 bronze medals",
      description: "Organised by TIA, Kolkata"
    },
    {
      title: "International Seoul Cup Open, Seoul",
      year: "2022",
      category: "Poomsae and Kyourogi",
      recipient: "6 Gold, 9 Silver, 18 bronze",
      description: "Organised by Kukkiwon, Seoul, South Korea"
    },
    {
      title: "1st open National Taekwondo Championship",
      year: "2023",
      category: "Poomsae and Kyourogi",
      recipient: "22 Gold, 16 Silver, 20 bronze",
      description: "Organised By R.B. Horangee DO-Jang Association, Pune"
    },
    {
      title: "16th International Open, Muju",
      year: "2023",
      category: "Poomsae and Kyourogi",
      recipient: "18 Gold, 4 Silver, 15 bronze",
      description: "Organised by Kukkiwon, Muju, South Korea"
    },
    {
      title: "2nd open National Taekwondo Championship, Pune",
      year: "2024",
      category: "Poomsae and Kyourogi",
      recipient: "42 Gold, 33 Silver, 18 bronze",
      description: "Organised By R.B. Horangee DO-Jang Association, Pune"
    },
    {
      title: "VIFA GENWINN India open national Taekwondo championship, Goa",
      year: "2025",
      category: "Poomsae and Kyourogi",
      recipient: "12 Gold, 12 Silver, 12 bronze",
      description: "Recognized for outstanding contribution to martial arts"
    },
    {
      title: "1st Asian international games, Hyderabad",
      year: "2025",
      category: "Poomsae and Kyourogi",
      recipient: "12 Gold, 12 Silver, 12 bronze",
      description: "Recognized for outstanding contribution to martial arts"
    }
  ];

  const competitions = [
    // ... (full list of competitions)
    {
      title: "1st Open National Taekwondo Championship",
      year: "2023",
      participants: "1100+",
      description: "Venue - Vitthalanjan Lawns, Borate Nagar, Chandan Nagar, Pune"
    },
    {
      title: "2nd Open National Taekwondo Championship",
      year: "2024",
      participants: "1300+",
      description: "Venue - Vitthalanjan Lawns, Borate Nagar, Chandan Nagar, Pune"
    },
    {
      title: "3rd Open National Taekwondo Championship",
      year: "2025",
      participants: "1700+",
      description: "Venue - Ramchandra Sabhagruha, Somnath Nagar, Wadgaonsheri, Pune"
    }
  ];

  const newspaperClippings = [clip1, clip2, clip3];

  const displayedAchievements = showAllAchievements
    ? achievements
    : achievements.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />

      {/* ... (hero section) ... */}
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
              {/* ... (achievements grid) ... */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                
                {displayedAchievements.map((achievement, index) => (
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

              {/* <<< "SHOW MORE" BUTTON UPDATED >>> */}
              {achievements.length > 4 && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllAchievements(!showAllAchievements)}
                    className="transition-all duration-200 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5"
                  >
                    {showAllAchievements ? "Show Less" : "Show More"}
                  </Button>
                </div>
              )}

              {/* ... (newspaper clippings) ... */}
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

                {/* <<< "VIEW ALL" BUTTON UPDATED >>> */}
                <div className="text-center mt-8">
                  <Button 
                    asChild 
                    variant="outline"
                    className="transition-all duration-200 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5"
                  >
                    <Link 
                      to="/gallery" 
                      state={{ defaultSection: "section2" }}
                    >
                      View All Clippings
                    </Link>
                  </Button>
                </div>

              </div>
            </TabsContent>

            <TabsContent value="competitions" className="space-y-8">
              {/* ... (rest of competitions tab content) ... */}
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
      <Footer />
    </div>
  );
};

export default Achievements;