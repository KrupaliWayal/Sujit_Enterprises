import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import awardImage from '@/assets/award-1.jpg';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      image: awardImage,
      title: "Excellence in Painting Services 2023",
      description: "Awarded by Navi Mumbai Contractors Association for outstanding quality and timely delivery of residential painting projects.",
      additionalInfo: "This prestigious award recognizes our commitment to maintaining the highest standards in the painting industry and our dedication to customer satisfaction.",
      year: "2023"
    },
    {
      id: 2,
      image: awardImage,
      title: "Best P.O.P. Work Contractor 2022",
      description: "Recognized by Maharashtra Construction Council for innovative P.O.P. work techniques and superior craftsmanship in commercial projects.",
      additionalInfo: "Our specialized P.O.P. work has set new benchmarks in the industry, combining traditional techniques with modern approaches for exceptional results.",
      year: "2022"
    }
  ];

  const milestones = [
    {
      icon: Trophy,
      title: "500+ Projects",
      description: "Successfully completed over 500 painting and P.O.P. projects"
    },
    {
      icon: Star,
      title: "15+ Years",
      description: "Over 15 years of dedicated service in the construction industry"
    },
    {
      icon: Medal,
      title: "50+ Clients",
      description: "Trusted by 50+ reputed developers and construction companies"
    },
    {
      icon: Award,
      title: "Zero Delays",
      description: "100% on-time project completion record since establishment"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & Awards
          </h1>
          <p className="text-xl text-white/90">
            Celebrating our journey of excellence and recognition
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-secondary mr-3" />
              Our Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground">
              Industry recognition for our commitment to quality and excellence
            </p>
          </div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <Card key={achievement.id} className="shadow-floating overflow-hidden">
                <CardContent className="p-0">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Award Image */}
                    <div className="lg:w-2/5 overflow-hidden">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-smooth"
                      />
                    </div>

                    {/* Award Details */}
                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <Award className="w-6 h-6 text-secondary mr-2" />
                        <span className="text-sm font-semibold text-secondary">{achievement.year}</span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {achievement.description}
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.additionalInfo}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 gradient-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center justify-center">
              <Star className="w-8 h-8 text-secondary mr-3" />
              Our Milestones
            </h2>
            <p className="text-lg text-muted-foreground">
              Key achievements that define our journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-floating transition-smooth text-center">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-full">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Looking Ahead
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            As we continue our journey, we remain committed to setting new standards in the painting and P.O.P. work industry. Our focus on innovation, quality, and customer satisfaction drives us to achieve greater heights. We aim to expand our services, adopt new technologies, and continue serving our clients with the same dedication that has earned us these recognitions.
          </p>
          
          <Card className="shadow-floating">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                "Excellence is not a destination but a journey. We are committed to continuous improvement, innovation, and delivering value that exceeds our clients' expectations. Every project is an opportunity to demonstrate our expertise and build lasting relationships."
              </p>
              <p className="text-sm text-secondary font-semibold mt-4">- Sujit Enterprises Team</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Achievements;