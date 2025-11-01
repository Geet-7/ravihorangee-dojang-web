import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Users, Trophy, Info } from "lucide-react";

const MobileSectionCards = () => {
  const sectionCards = [
    {
      title: "About Section",
      description: "Learn about our academy's history, philosophy, and dedication to martial arts excellence.",
      icon: Info,
      link: "/about",
      color: "from-primary to-primary-glow"
    },
    // {
    //   title: "Coaches Section", 
    //   description: "Meet our experienced instructors and dedicated students who make our dojo special.",
    //   icon: Users,
    //   link: "/coaches",
    //   color: "from-secondary to-secondary-glow"
    // },
    {
      title: "Achievements and Events Section",
      description: "Discover our competition successes, hosted tournaments, and upcoming events.",
      icon: Trophy,
      link: "/achievements",
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section className="md:hidden py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Explore Our Academy
        </h2>
        
        <div className="space-y-6">
          {sectionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="martial-card scroll-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <Link to={card.link}>
                      <Button variant="outline" size="sm" className="group">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileSectionCards;