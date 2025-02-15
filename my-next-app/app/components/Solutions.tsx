"use client"

import { motion } from "framer-motion"
import { 
  GraduationCap, 
  Home, 
  Cpu, 
  Lightbulb 
} from "lucide-react"
import { fadeInUp, staggerContainer } from "../utils/animation"
import Link from "next/link"
import Image from "next/image"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: GraduationCap,
      title: "STEM Learning Kits",
      description: "Interactive, hands-on kits designed to foster STEM education and inspire the next generation of innovators.",
      color: "text-[#1A4B84]",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Home,
      title: "Smart Home Automation",
      description: "Intelligent solutions for lighting, security, and energy management to create efficient and secure living spaces.",
      color: "text-[#00FFFF]",
      gradient: "from-cyan-500/10 to-teal-500/10"
    },
    {
      icon: Cpu,
      title: "IoT-Enabled Devices",
      description: "Developing smart devices for various applications, enhancing connectivity and functionality.",
      color: "text-[#1A4B84]",
      gradient: "from-indigo-500/10 to-blue-500/10"
    },
    {
      icon: Lightbulb,
      title: "Edge AI & Embedded Solutions",
      description: "Providing AI-driven, real-time processing on edge devices for immediate data analysis and decision-making.",
      color: "text-[#00FFFF]",
      gradient: "from-teal-500/10 to-green-500/10"
    }
  ]

  return (
    <div id="solutions" className="min-h-screen bg-[#F5F7FA] py-12 sm:py-16 text-[#4A4A4A]">
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Solutions Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#0F1C3F]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A4B84] to-[#00FFFF]">
              Our Solutions
            </span>
          </h1>
          <p className="text-base sm:text-xl text-[#1A4B84] max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Innovative IoT Solutions Transforming Technology Landscape
          </p>
        </div>

        {/* Solutions Intro Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16 px-4 sm:px-6"
          variants={staggerContainer}
        >
          {/* Solutions Text Box - Left Side */}
          <motion.div 
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#1A4B84]/10 space-y-4 w-full"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: "easeOut" 
            }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#1A4B84]">Innovative Solutions</h2>
            <p className="text-sm sm:text-lg text-[#4A4A4A] mb-4">
              At Noiiet Technologies, we develop cutting-edge IoT solutions that bridge technology 
              and practical applications, creating intelligent ecosystems that transform how 
              businesses and individuals interact with technology.
            </p>
            <p className="text-sm sm:text-base text-[#4A4A4A] italic opacity-80">
              Empowering innovation through smart, connected technologies.
            </p>
          </motion.div>

          {/* Solutions Image Box - Right Side */}
          <motion.div 
            className="flex items-center justify-center bg-white p-4 sm:p-8 rounded-xl shadow-2xl border border-[#1A4B84]/10 relative overflow-hidden"
            variants={fadeInUp}
            initial={{ 
              opacity: 0, 
              y: 50,
              scale: 0.95 
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1 
            }}
            transition={{ 
              duration: 0.7, 
              ease: "easeOut" 
            }}
          >
            <Image 
              src="/solution.jpg" 
              alt="Noiiet Technologies Solutions" 
              width={500} 
              height={400} 
              className="w-full h-auto max-h-[300px] object-contain rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16 px-4 sm:px-6">
          {solutions.map((solution, index) => (
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
                className={`absolute -inset-px bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl blur-md`}
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
                  <solution.icon 
                    className={`w-10 h-10 ${solution.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`} 
                  />
                </motion.div>
                
                <h3 className="text-lg font-semibold mb-2 text-[#0F1C3F] transition-colors duration-300 group-hover:text-[#1A4B84]">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-[#0F1C3F]">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Discover More Link */}
        <div className="text-center px-4">
          <Link 
            href="/" 
            className="inline-block bg-[#1A4B84] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#00FFFF] hover:text-[#0F1C3F] transition-colors"
          >
            Discover More
          </Link>
        </div>
      </motion.section>
    </div>
  )
}