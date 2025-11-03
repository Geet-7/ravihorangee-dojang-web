import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Star, Calendar, Download, Play } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-coach.jpg"; // Update with your competition images

const Achievements = () => {
  // Add state for competition glimpses
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add competition glimpses images array
  const competitionImages = [
    { src: heroImage, alt: "National Championship 2024" },
    { src: heroImage, alt: "Regional Tournament 2024" },
    { src: heroImage, alt: "Youth Competition" },
    { src: heroImage, alt: "Poomsae Championship" },
    { src: heroImage, alt: "Team Performance" },
    { src: heroImage, alt: "Award Ceremony" }
  ];

  // Add auto-sliding effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % competitionImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      title: "National Championship Gold",
      year: "2024",
      category: "Senior Poomsae",
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
    // {
    //   title: "State Level Taekwondo Meet",
    //   year: "2022",
    //   participants: "200+",
    //   description: "A prestigious state-level event for young martial artists."
    // }
  ];

  // const events = [
  //   {
  //     title: "Master Class Workshop",
  //     date: "March 2024",
  //     type: "Workshop",
  //     description: "Advanced techniques seminar with international masters"
  //   },
  //   {
  //     title: "Community Self-Defense Course",
  //     date: "February 2024",
  //     type: "Outreach",
  //     description: "Free self-defense classes for local community members"
  //   },
  //   {
  //     title: "National Championships 2024",
  //     date: "May 2024",
  //     type: "Upcoming",
  //     description: "Our students will compete in the national championships"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />
      
      {/* Hero Section */}
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

      {/* Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="achievements" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="competitions">Competitions Hosted</TabsTrigger>
              {/* <TabsTrigger value="events">Events</TabsTrigger> */}
            </TabsList>

            {/* Achievements Tab */}
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

              {/* Gallery Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-center mb-8">Newspaper Clippings</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="martial-card group cursor-pointer">
                      <div className="aspect-video   bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <Medal className="w-12 h-12 text-primary/60 group-hover:scale-110 transition-transform duration-300" />
                        {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"> */}
                          {/* <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                        {/* </div> */}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Competitions Tab */}
            <TabsContent value="competitions" className="space-y-8">
              
              {/* Existing competitions grid */}
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
              
              
              {/* Competition Glimpses Carousel */}
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
                    
                    {/* Carousel Indicators */}
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

            {/* Events Tab */}
            {/* <TabsContent value="events" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                  <Card key={index} className="martial-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2">{event.title}</h3>
                        <p className="text-sm text-primary font-semibold mb-1">{event.date}</p>
                        <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs rounded mb-2">
                          {event.type}
                        </span>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Stay updated with our latest workshops, competitions, and community outreach programs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="power">
                    Join Upcoming Events
                  </Button>
                  <Button variant="outline">
                    Event Calendar
                  </Button>
                </div>
              </div>
            </TabsContent> */}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Achievements;