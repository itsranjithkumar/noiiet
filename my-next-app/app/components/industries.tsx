"use client"

import { motion } from "framer-motion"
import { 
   Cpu,  
  BookOpen, Home, Factory 
} from "lucide-react"
import {  staggerContainer } from "../utils/animation"
import Link from "next/link"

export default function IndustriesPage() {
  const industrySectors = [
    {
      icon: BookOpen,
      title: "Education Technology (EdTech)",
      description: "Developing smart STEM learning kits and IoT-based educational tools to enhance interactive learning experiences.",
      color: "text-[#1A4B84]",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Home,
      title: "IoT & Smart Homes",
      description: "Providing smart sensors, home automation systems, and connected devices for modern living.",
      color: "text-[#00FFFF]",
      gradient: "from-cyan-500/10 to-teal-500/10"
    },
    {
      icon: Factory,
      title: "Industrial IoT & Automation",
      description: "Implementing AI-driven industrial automation and real-time monitoring solutions to optimize operations.",
      color: "text-[#1A4B84]",
      gradient: "from-indigo-500/10 to-blue-500/10"
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Offering custom hardware and firmware development for specialized applications.",
      color: "text-[#00FFFF]",
      gradient: "from-teal-500/10 to-green-500/10"
    }
  ]

  return (
    <div id="industries" className="min-h-screen bg-[#F5F7FA] py-12 sm:py-16 text-[#4A4A4A]">
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#0F1C3F]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A4B84] to-[#00FFFF]">
              Our Industry Sectors
            </span>
          </h1>
          <p className="text-base sm:text-xl text-[#1A4B84] max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Innovative IoT Solutions Transforming Multiple Sectors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {industrySectors.map((sector, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-6 rounded-3xl bg-white border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.4, 0.0, 0.2, 1],
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.035,
                transition: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 320,
                  damping: 12
                }
              }}
              whileTap={{
                scale: 0.96,
                transition: {
                  duration: 0.2
                }
              }}
            >
              {/* Advanced background glow effect */}
              <div 
                className={`absolute -inset-px bg-gradient-to-r ${sector.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl blur-md`}
              ></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  className="mb-4 w-20 h-20 flex items-center justify-center rounded-2xl bg-[#F5F7FA] shadow-[0_4px_6px_rgba(0,0,0,0.1)] group-hover:shadow-[0_6px_8px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                  initial={{ 
                    rotate: 0,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                  whileHover={{ 
                    rotate: [0, -3, 3, 0],
                    transition: { 
                      duration: 0.4,
                      repeat: 1,
                      repeatType: "mirror"
                    }
                  }}
                >
                  <sector.icon 
                    className={`w-10 h-10 ${sector.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`} 
                  />
                </motion.div>
                
                <h3 className="text-lg font-semibold mb-2 text-[#0F1C3F] transition-colors duration-300 group-hover:text-[#1A4B84]">
                  {sector.title}
                </h3>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-[#0F1C3F]">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/" 
            className="inline-block bg-[#1A4B84] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#00FFFF] hover:text-[#0F1C3F] transition-colors"
          >
            Explore Collaboration
          </Link>
        </div>
      </motion.section>
    </div>
  )
}