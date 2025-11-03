import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const services = [
    'Interior Painting',
    'Exterior Painting', 
    'P.O.P. Work',
    'Wall Putty',
    'Texture Painting',
    'Waterproofing'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sujit Enterprises</h3>
            <p className="text-primary-foreground/80 mb-4">
              Established in 2009-2010, we are a fast-growing painting company dedicated to delivering the highest standard of project management with expertise in executing projects within time schedule and high quality.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth cursor-pointer">
                  • {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-secondary" />
                <div className="text-primary-foreground/80">
                  <p>Navi Mumbai, Maharashtra</p>
                  <p>Panvel, Kharghar, Belapur Areas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <p className="text-primary-foreground/80">+91 98765 43210</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <p className="text-primary-foreground/80">info@sujitenterprises.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Sujit Enterprises. All rights reserved. | All Types of Painting and P.O.P. Work
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;