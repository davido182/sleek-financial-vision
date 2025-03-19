
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  accent?: 'blue' | 'gold';
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  index,
  accent = 'blue'
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card p-6 transition-all duration-500 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        isHovered ? "transform scale-[1.02]" : "",
        { "delay-100": index % 3 === 0 },
        { "delay-200": index % 3 === 1 },
        { "delay-300": index % 3 === 2 }
      )}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-white",
        accent === 'blue' ? "bg-finance-blue" : "bg-finance-gold"
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-finance-darkblue">{title}</h3>
      <p className="text-finance-gray text-sm leading-relaxed">{description}</p>
      
      <div className={cn(
        "w-full h-1 mt-6 rounded-full overflow-hidden transition-all duration-300",
        isHovered ? "opacity-100" : "opacity-40"
      )}>
        <div className={cn(
          "h-full w-0 transition-all duration-700 ease-out",
          isHovered ? "w-full" : "",
          accent === 'blue' ? "bg-finance-blue" : "bg-finance-gold"
        )}></div>
      </div>
    </div>
  );
};

export default FeatureCard;
