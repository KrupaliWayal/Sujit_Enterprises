import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  Award, 
  Users, 
  Shield,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const whyChooseUsItems = [
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We complete all projects within the scheduled time frame with no delays'
    },
    {
      icon: Award,
      title: 'Quality Workmanship', 
      description: 'Highest standard of work with attention to detail and precision'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with 15+ years of experience in the industry'
    },
    {
      icon: Shield,
      title: 'Guaranteed Work',
      description: 'We stand behind our work with comprehensive warranties and support'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Sujit Enterprises
          </h1>
          <p className="text-xl text-white/90">
            Your trusted partner for all painting and P.O.P. work since 2009
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center justify-center">
              <Star className="w-8 h-8 text-secondary mr-3" />
              WHO WE ARE
            </h2>
          </div>
          
          <Card className="shadow-floating">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Sujit Enterprises is established in the year 2009-2010 as a fast-growing painting company in Navi Mumbai. We are dedicated to delivering the highest standard of project management with a focus on quality, reliability, and customer satisfaction. The company has built its reputation through expertise in execution of projects within time schedule while maintaining high quality standards. Our team of experienced professionals ensures that every project, whether residential or commercial, is completed with precision and attention to detail. We have successfully served numerous reputed developers and construction companies, establishing ourselves as a trusted name in the painting and P.O.P. work industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 gradient-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-secondary mr-3" />
              WHY CHOOSE US?
            </h2>
            <p className="text-lg text-muted-foreground">
              Here's what makes us the preferred choice for painting and P.O.P. work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-floating transition-smooth text-center">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-full">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Years of Experience</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-2">500+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;