
import React, { useState } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Profile from '@/components/Profile';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      case 'profile':
        return <Profile />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
        <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
        <div className="pt-16">
          {renderPage()}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
