
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="relative text-finance-darkblue/80 hover:text-finance-blue transition-colors px-4 py-2 rounded-md group"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 bg-finance-lightblue/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-left"></span>
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12",
        scrolled ? "py-4 bg-white/90 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-md bg-finance-blue grid place-items-center">
            <div className="h-3 w-3 rounded-full bg-white animate-pulse-slow"></div>
          </div>
          <span className="font-semibold text-lg tracking-tight text-finance-darkblue">FinanceAI</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#insights">Insights</NavLink>
          <NavLink href="#technology">Technology</NavLink>
          <NavLink href="#about">About</NavLink>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex px-4 py-2 rounded-lg border border-finance-blue/20 text-finance-blue hover:bg-finance-blue/10 transition duration-300">
            Login
          </button>
          <button className="px-5 py-2 rounded-lg bg-finance-blue text-white shadow-sm hover:shadow-md hover:bg-finance-blue/90 transition duration-300 ease-in-out active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
