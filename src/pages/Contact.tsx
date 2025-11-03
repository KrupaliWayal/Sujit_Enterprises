import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, CreditCard, Hash } from 'lucide-react';
import sujitLogo from '@/assets/sujit-logo.png';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90">
            Get in touch for your painting and P.O.P. work requirements
          </p>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              COMPANY DETAILS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Hash className="w-5 h-5 mr-2 text-secondary" />
                  Registration Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground">Permanent A/C No:</p>
                  <p className="text-muted-foreground">XXXPX1234X</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Goods and Services Tax No:</p>
                  <p className="text-muted-foreground">27XXXPX1234X1Z5</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <CreditCard className="w-5 h-5 mr-2 text-secondary" />
                  Business Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground">Established:</p>
                  <p className="text-muted-foreground">2009-2010</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">License Type:</p>
                  <p className="text-muted-foreground">Painting & P.O.P. Contractor</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Company Logo and Contact Info */}
          <Card className="shadow-floating">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img 
                    src={sujitLogo} 
                    alt="Sujit Enterprises Logo" 
                    className="h-32 w-auto"
                  />
                </div>

                {/* Contact Information */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Address:</p>
                      <p className="text-muted-foreground">
                        Navi Mumbai, Maharashtra<br />
                        Serving: Panvel, Kharghar, Belapur, Airoli,<br />
                        New Panvel and surrounding areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-secondary" />
                    <div>
                      <p className="font-semibold text-foreground">Contact No:</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-muted-foreground">+91 87654 32109</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Timing:</p>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 gradient-section">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Location
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us or start your journey to our office
            </p>
          </div>

          <Card className="shadow-floating overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-accent">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240394.7938497886!2d72.74109927148437!3d19.188148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8d6cd4a8b63%3A0x24f7d2c3c3e3d1c5!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1632142800000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sujit Enterprises Location - Navi Mumbai"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-card">
                  <p className="text-sm font-semibold text-primary">📍 Navi Mumbai</p>
                  <p className="text-xs text-muted-foreground">Maharashtra, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today for a free consultation and estimate
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-button hover:bg-primary-dark transition-smooth"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a 
              href="mailto:info@sujitenterprises.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg shadow-button hover:bg-secondary-dark transition-smooth"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;