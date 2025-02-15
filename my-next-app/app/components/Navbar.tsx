"use client";

import React, { useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Industries', href: '#industries' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }
] as const;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <>
      {/* Spacer to prevent content from being hidden */}
      <div className="h-16 md:h-14"></div>
      
      <nav className="fixed top-0 left-0 w-full bg-[#1B1F3B] shadow-lg z-50 h-16 md:h-14">
        <div className="container mx-auto px-4 h-full flex justify-between items-center relative">
          {/* Left Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            aria-label="Home"
          >
            <Image 
              src="/final-15.png" 
              alt="Noiiet Shop Logo" 
              width={150} 
              height={120} 
              priority 
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="
                  text-white 
                  hover:text-[#00FFFF] 
                  transition-colors 
                  duration-300 
                  font-medium 
                  text-base
                  relative 
                  group
                "
              >
                {item.name}
                <span 
                  className="
                    absolute 
                    bottom-0 
                    left-0 
                    w-0 
                    h-0.5 
                    bg-[#00FFFF] 
                    group-hover:w-full 
                    transition-all 
                    duration-300
                  "
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="
                text-white 
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#00FFFF]
              "
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                fixed 
                inset-0 
                bg-black 
                bg-opacity-50 
                z-50 
                md:hidden
              "
              onClick={closeMenu}
            >
              <motion.div 
                initial={{ 
                  scale: 0.9, 
                  opacity: 0, 
                  y: 50 
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  y: 0 
                }}
                exit={{ 
                  scale: 0.9, 
                  opacity: 0, 
                  y: 50 
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
                className="
                  absolute 
                  bottom-4 
                  left-4 
                  right-4 
                  bg-[#1B1F3B] 
                  rounded-2xl 
                  shadow-2xl
                  overflow-hidden
                "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b border-white/10">
                  <Image 
                    src="/final-15.png" 
                    alt="Noiiet Shop Logo" 
                    width={100} 
                    height={35} 
                    priority 
                    className="object-contain mx-auto"
                  />
                </div>
                <div className="divide-y divide-white/10">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: index * 0.1,
                          duration: 0.3 
                        }
                      }}
                      onClick={() => scrollToSection(item.href)}
                      className="
                        w-full 
                        text-left 
                        px-4 
                        py-4 
                        text-white 
                        hover:bg-white/10 
                        active:bg-white/20 
                        transition-colors 
                        duration-200
                      "
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;