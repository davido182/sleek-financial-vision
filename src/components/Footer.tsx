
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-finance-darkblue text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-white grid place-items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-finance-blue"></div>
              </div>
              <span className="font-semibold text-lg text-white">FinanceAI</span>
            </div>
            <p className="text-finance-lightgray text-sm max-w-xs">
              Transforming financial data into actionable insights with elegance and precision.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-finance-lightgold">Product</h4>
            <ul className="space-y-2 text-finance-lightgray">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-finance-lightgold">Company</h4>
            <ul className="space-y-2 text-finance-lightgray">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-finance-lightgold">Resources</h4>
            <ul className="space-y-2 text-finance-lightgray">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-finance-lightgray text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} FinanceAI. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
