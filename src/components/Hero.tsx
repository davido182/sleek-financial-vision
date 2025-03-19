
import React from 'react';
import DataVisual from './DataVisual';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pb-20 pt-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-lines diagonal-lines z-0 opacity-70"></div>
      <div className="absolute inset-0 z-10">
        <DataVisual />
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-finance-blue/10 text-finance-blue text-sm font-medium animate-fade-in">
          <span className="mr-2">•</span>Next Generation Financial AI
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <span>Financial Intelligence </span>
          <span className="text-gradient-blue">Reimagined</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-finance-gray mb-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          Harness the power of artificial intelligence to transform financial data into actionable insights, delivering precision and clarity in an elegant experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-finance-blue text-white font-medium shadow-lg hover:shadow-xl hover:bg-finance-blue/90 transition duration-300 ease-in-out active:scale-95">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-3 rounded-lg border border-finance-blue/20 text-finance-blue hover:bg-finance-blue/10 transition duration-300">
            Watch Demo
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-16 left-1/4 w-40 h-40 bg-finance-gold/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-finance-blue/5 rounded-full filter blur-3xl"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in" style={{ animationDelay: '1200ms' }}>
        <span className="text-finance-gray text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-finance-gray/30 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-finance-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
