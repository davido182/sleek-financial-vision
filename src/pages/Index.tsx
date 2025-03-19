
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { ChartBar, LineChart, ShieldCheck, BrainCircuit, Lightbulb, Ban } from 'lucide-react';

const Index = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.25, // Trigger when 25% of the element is visible
      rootMargin: '0px 0px -10% 0px' // Add negative margin to bottom
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          statsObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const insightsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          insightsObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (statsRef.current) {
      statsRef.current.querySelectorAll('.stat-item').forEach(item => {
        statsObserver.observe(item);
      });
    }
    
    if (insightsRef.current) {
      insightsRef.current.querySelectorAll('.insight-item').forEach(item => {
        insightsObserver.observe(item);
      });
    }
    
    return () => {
      statsObserver.disconnect();
      insightsObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features Section */}
        <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-finance-blue/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-finance-darkblue">
                Intelligent Features
              </h2>
              <p className="max-w-2xl mx-auto text-finance-gray">
                Our platform combines cutting-edge AI technology with elegant design to deliver financial insights with unprecedented clarity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                title="Predictive Analytics" 
                description="Leverage machine learning algorithms to forecast market trends and identify opportunities before they emerge."
                icon={<ChartBar size={24} />}
                index={0}
              />
              <FeatureCard 
                title="Smart Portfolio Management" 
                description="AI-driven recommendations for portfolio optimization based on your risk profile and financial goals."
                icon={<LineChart size={24} />}
                index={1}
                accent="gold"
              />
              <FeatureCard 
                title="Risk Assessment" 
                description="Advanced algorithms continuously monitor your investments to identify and mitigate potential risks."
                icon={<ShieldCheck size={24} />}
                index={2}
              />
              <FeatureCard 
                title="AI Financial Assistant" 
                description="Get personalized financial advice and answers to your questions through our conversational AI assistant."
                icon={<BrainCircuit size={24} />}
                index={3}
                accent="gold"
              />
              <FeatureCard 
                title="Smart Insights" 
                description="Discover hidden patterns and correlations in financial data through our machine learning analysis."
                icon={<Lightbulb size={24} />}
                index={4}
              />
              <FeatureCard 
                title="Fraud Detection" 
                description="AI-powered security system that identifies suspicious activities and protects your financial assets."
                icon={<Ban size={24} />}
                index={5}
                accent="gold"
              />
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-24 px-6 bg-finance-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-white/20"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-white/20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 text-white/90 text-sm font-medium">
                Trusted Worldwide
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transforming Financial Analysis
              </h2>
              <p className="max-w-2xl mx-auto text-white/80">
                Our platform is trusted by companies and professionals worldwide to deliver financial insights with unprecedented clarity.
              </p>
            </div>
            
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "98%", label: "Accuracy Rate" },
                { number: "10K+", label: "Active Users" },
                { number: "$2.4B", label: "Analyzed Daily" },
                { number: "42%", label: "Time Saved" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-item text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm opacity-0 translate-y-10 transition-all duration-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold mb-2 text-white">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Insights Section */}
        <section id="insights" className="py-24 px-6 bg-white">
          <div ref={insightsRef} className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-finance-darkblue">
                Financial Intelligence at Work
              </h2>
              <p className="max-w-2xl mx-auto text-finance-gray">
                Discover how our AI-powered platform transforms complex financial data into clear, actionable insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="insight-item opacity-0 translate-y-10 transition-all duration-700 delay-100 order-2 lg:order-1">
                <h3 className="text-2xl font-semibold mb-6 text-finance-darkblue">Intelligent Data Analysis</h3>
                <p className="text-finance-gray mb-6">
                  Our advanced AI algorithms analyze vast amounts of financial data in real-time, identifying patterns and trends that would be impossible to detect manually.
                </p>
                <ul className="space-y-3">
                  {["Pattern Recognition", "Anomaly Detection", "Trend Analysis", "Risk Assessment"].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-finance-blue/20 text-finance-blue flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="insight-item opacity-0 translate-y-10 transition-all duration-700 delay-300 order-1 lg:order-2">
                <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-finance-blue/90 to-finance-gold/50"></div>
                  <div className="glass-card absolute inset-6 p-6 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white">Portfolio Analysis</h4>
                        <p className="text-white/70 text-sm">Real-time performance insights</p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white animate-ping"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { label: "Technology", value: 42, color: "bg-blue-400" },
                        { label: "Healthcare", value: 28, color: "bg-green-400" },
                        { label: "Finance", value: 18, color: "bg-purple-400" },
                        { label: "Consumer", value: 12, color: "bg-yellow-400" }
                      ].map((item, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/80">{item.label}</span>
                            <span className="text-white font-medium">{item.value}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                            <div 
                              className={`h-full ${item.color} rounded-full`}
                              style={{ width: `${item.value}%`, transition: 'width 1s ease-out' }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 flex justify-between items-center">
                      <div>
                        <div className="text-white/70 text-xs">Total Return</div>
                        <div className="text-white text-xl font-bold">+24.8%</div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-finance-darkblue to-finance-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
              {Array(64).fill(0).map((_, idx) => (
                <div key={idx} className={`${Math.random() > 0.5 ? 'bg-white/5' : 'bg-transparent'} border border-white/5`}></div>
              ))}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transform Your Financial Decision Making
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Join thousands of professionals and companies who trust our platform to deliver financial insights with unprecedented clarity and precision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 rounded-lg bg-white text-finance-blue font-medium shadow-lg hover:shadow-xl hover:bg-white/90 transition duration-300 ease-in-out active:scale-95">
                Get Started Today
              </button>
              <button className="px-8 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
