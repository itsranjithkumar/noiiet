import React from 'react';
import Link from 'next/link';

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 ease-in-out text-sm"
  >
    {children}
  </Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2B3C] text-gray-300 border-t border-gray-800/30 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Noiiet Toy Shop</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Let&apos;s Build the Future of IoT Together
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-300">
                  <path d="M20 10c0 6-8 6-8 6s-8 0-8-6a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-sm text-gray-400">123 Innovation Drive, Tech Park, Bangalore, India 560001</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-300">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="text-sm text-gray-400">contact@noiiet.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-300">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-sm text-gray-400">+91 (080) 4567-8901</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mt-4">
              Crafting magical experiences that spark imagination and joy for children around the world.
            </p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-medium text-gray-200 mb-3">Explore</h4>
            <FooterLink href="/#home">Home</FooterLink>
            <FooterLink href="/#about">About</FooterLink>
            <FooterLink href="/#industries">Industries</FooterLink>
            <FooterLink href="/#solutions">Solutions</FooterLink>
            <FooterLink href="/#services">Services</FooterLink>
            <FooterLink href="/#contact">Contact</FooterLink>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-medium text-gray-200 mb-3">Support</h4>
            <FooterLink href="/">Shipping</FooterLink>
            <FooterLink href="/">Returns</FooterLink>
            <FooterLink href="/">FAQ</FooterLink>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-medium text-gray-200 mb-3">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800/30 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2025 noiiet Toy Shop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;