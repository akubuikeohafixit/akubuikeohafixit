
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import CryptoExchangesTable from './CryptoExchangesTable';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      {/* Modern Lighter Spotlight Effects */}
      <div className="absolute top-10 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-blue-300/30 to-cyan-300/30 dark:from-blue-400/20 dark:to-cyan-400/20 rounded-full blur-[100px] animate-pulse opacity-70"></div>
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-to-r from-purple-300/25 to-pink-300/25 dark:from-purple-400/15 dark:to-pink-400/15 rounded-full blur-[80px] animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/3 left-1/5 w-[300px] h-[300px] bg-gradient-to-r from-indigo-300/20 to-blue-300/20 dark:from-indigo-400/12 dark:to-blue-400/12 rounded-full blur-[90px] animate-pulse opacity-50" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 right-10 w-[250px] h-[250px] bg-gradient-to-r from-teal-300/25 to-emerald-300/25 dark:from-teal-400/15 dark:to-emerald-400/15 rounded-full blur-[70px] animate-pulse opacity-40" style={{animationDelay: '4.5s'}}></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="animate-fade-in-up mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-700 dark:from-slate-200 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
              AkubuikeOhafixit
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-light">
            Entrepreneur & Exchange Trader
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming financial markets through innovative trading strategies and entrepreneurial excellence. 
            Building wealth and empowering others to achieve financial freedom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => onNavigate('about')}
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Discover My Journey
            </Button>
            <Button 
              onClick={() => onNavigate('contact')}
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Streamlined Crypto Ticker */}
        <div className="mb-16 w-full">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 text-center">
            Live Crypto Markets
          </h3>
          <div className="w-full overflow-hidden rounded-lg border border-slate-200/50 dark:border-slate-700/50">
            <CryptoExchangesTable />
          </div>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-slate-400 dark:text-slate-500" size={32} />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200/40 dark:bg-blue-500/15 rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-purple-200/40 dark:bg-purple-500/15 rounded-full opacity-50 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-10 h-10 bg-indigo-200/40 dark:bg-indigo-500/15 rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;
