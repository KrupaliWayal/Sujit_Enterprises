import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Building2, Wrench } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      building: "SHREE VISHNU VANDAN RESIDENCY",
      client: "SHRUTI DEVELOPERS",
      address: "Gut No. 148/2, Derawali Village, Panvel",
      work: "P.O.P & Painting Work",
      isVertical: false
    },
    {
      id: 2,
      image: project2,
      building: "SAI VANDAN COMPLEX",
      client: "SHRUTI HOMES",
      address: "Gut No. 45/5, Usarli Village, Panvel",
      work: "P.O.P & Painting Work",
      isVertical: true
    },
    {
      id: 3,
      image: project3,
      building: "ALLIANCE GALAXY",
      client: "ALLIANCE GROUP",
      address: "Plot - B-57A, 59, Sec - 20B, Airoli",
      work: "Complete Painting Work",
      isVertical: false
    },
    {
      id: 4,
      image: project2,
      building: "SATYAM SEVEN SKIES",
      client: "J J ENTERPRISES",
      address: "Plot - 71A, Sec - 17, Kharghar",
      work: "Interior & Exterior Painting",
      isVertical: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90">
            Showcasing our finest painting and P.O.P. work projects
          </p>
        </div>
      </section>

      {/* Reputed Clients Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-secondary mr-3" />
              REPUTED CLIENTS
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading developers and construction companies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="shadow-card hover:shadow-floating transition-smooth overflow-hidden">
                <CardContent className="p-0">
                  <div className={`flex ${project.isVertical ? 'flex-col sm:flex-row' : 'flex-col md:flex-row'}`}>
                    {/* Project Image */}
                    <div className={`${project.isVertical ? 'sm:w-2/5' : 'md:w-1/2'} overflow-hidden`}>
                      <img 
                        src={project.image} 
                        alt={project.building}
                        className="w-full h-64 md:h-full object-cover hover:scale-105 transition-smooth"
                      />
                    </div>

                    {/* Project Details */}
                    <div className={`${project.isVertical ? 'sm:w-3/5' : 'md:w-1/2'} p-6 flex flex-col justify-center`}>
                      <h3 className="text-xl font-bold text-primary mb-4">
                        {project.building}
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <Building2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-foreground">Client Name:</span>
                            <p className="text-muted-foreground">{project.client}</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-foreground">Address:</span>
                            <p className="text-muted-foreground">{project.address}</p>
                          </div>  
                        </div>

                        <div className="flex items-start space-x-2">
                          <Wrench className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-foreground">Work:</span>
                            <p className="text-muted-foreground">{project.work}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="py-16 gradient-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            More Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We have successfully completed 500+ projects across Navi Mumbai, including residential complexes, commercial buildings, and industrial facilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">Residential</h3>
                <p className="text-3xl font-bold text-secondary mb-2">300+</p>
                <p className="text-muted-foreground text-sm">Apartments & Villas</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">Commercial</h3>
                <p className="text-3xl font-bold text-secondary mb-2">150+</p>
                <p className="text-muted-foreground text-sm">Offices & Shops</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">Industrial</h3>
                <p className="text-3xl font-bold text-secondary mb-2">50+</p>
                <p className="text-muted-foreground text-sm">Warehouses & Factories</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;