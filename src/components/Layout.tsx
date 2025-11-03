import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  // Hide navigation and footer on login/signup pages
  const hideNavAndFooter = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavAndFooter && <Navigation />}
      
      <main className="flex-1">
        {children}
      </main>
      
      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

export default Layout;