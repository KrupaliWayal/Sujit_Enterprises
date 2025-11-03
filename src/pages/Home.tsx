import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { User, Phone, Mail, MapPin, Eye, Target, Users } from 'lucide-react';
import sujitLogo from '@/assets/sujit-logo.png';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    pincode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to backend
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 24 hours to discuss your requirements.",
    });
    setFormData({ name: '', contact: '', email: '', pincode: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const clients = [
    'NEELKANTH INFRATECH', 'OM SAI DEVELOPERS', 'SHUBH HOME DEVELOPERS',
    'SHREE RAM TANU DEVELOPERS', 'SATYAM DEVELOPERS', 'RADHA DEVELOPERS',
    'SHREEJI LIFESPACES PVT. LTD', 'SHIVAM DEVELOPERS', 'DEEPLAXMI DEVELOPERS',
    'HONEST DEVELOPERS', 'MKY INFRASTRUCTURE', 'SHAKTI ENTERPRISES'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <img src={sujitLogo} alt="Sujit Enterprises" className="h-24 w-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              ALL TYPES OF PAINTING AND P.O.P. WORK
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Professional painting services with 15+ years of experience in Navi Mumbai
            </p>
          </div>

          {/* Booking Form */}
          <Card className="max-w-2xl mx-auto shadow-floating">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                BOOK NOW!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-primary" />
                      <span>Name *</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>Contact No. *</span>
                    </Label>
                    <Input
                      id="contact"
                      name="contact"
                      type="tel"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>Email *</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pincode" className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Pincode *</span>
                    </Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary-dark shadow-button text-lg py-6"
                >
                  BOOK NOW
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meet Us Section */}
      <section className="py-16 gradient-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-primary">MEET US</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sujit Enterprises is established in 2009-2010 as a fast-growing painting company. We are dedicated to delivering the highest standard of project management with expertise in execution of projects within time schedule and high quality. Our team of skilled professionals ensures that every project meets our clients' expectations while maintaining the highest standards of workmanship and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-secondary mr-3" />
            <h2 className="text-3xl font-bold text-primary">OUR VISION</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To be a prominent Planning and Painting Company in Navi Mumbai through continuous innovation, learning new skills and activities, and responding to the changing needs of clients and markets. Our philosophy is to offer real value to our clients and work with integrity, transparency, and dedication. We strive to build long-lasting relationships with our clients by consistently delivering exceptional results and exceeding their expectations.
          </p>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 gradient-section">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Eye className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-primary">OUR CLIENTS</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Trusted by leading developers and construction companies across Navi Mumbai
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <Card key={index} className="shadow-card hover:shadow-floating transition-smooth">
                <CardContent className="p-4">
                  <p className="font-medium text-primary text-sm">{client}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;