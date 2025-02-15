"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  GraduationCap, 
  Cpu, 
  Home, 
  Lightbulb, 
  Gamepad2,
  X 
} from "lucide-react"
import {  staggerContainer } from "../utils/animation"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      icon: GraduationCap,
      title: "STEM Training & Workshops",
      description: "Engaging sessions for schools, colleges, and professionals to promote STEM education and practical skills.",
      detailedContent: "Our STEM Training & Workshops are designed to bridge the gap between theoretical knowledge and practical application. We offer comprehensive programs that cover cutting-edge technologies, hands-on project development, and industry-relevant skills.",
      color: "text-[#1A4B84]",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Cpu,
      title: "Embedded & IoT Project Development",
      description: "End-to-end solutions for businesses and startups looking to implement IoT and embedded system projects.",
      detailedContent: "We specialize in creating innovative embedded systems and IoT solutions that transform ideas into functional, scalable technologies. Our team provides comprehensive support from concept to deployment.",
      color: "text-[#00FFFF]",
      gradient: "from-cyan-500/10 to-teal-500/10"
    },
    {
      icon: Home,
      title: "Automation Consulting",
      description: "Tailored solutions for smart homes and industries, enhancing efficiency and connectivity.",
      detailedContent: "Our Automation Consulting services help businesses and homeowners leverage the latest technologies to create smarter, more efficient environments. We provide end-to-end solutions that optimize processes and improve quality of life.",
      color: "text-[#1A4B84]",
      gradient: "from-indigo-500/10 to-blue-500/10"
    },
    {
      icon: Lightbulb,
      title: "IoT Integration & Deployment",
      description: "Secure, scalable solutions for deploying connected devices across various platforms.",
      detailedContent: "We offer comprehensive IoT integration services that ensure seamless connectivity, robust security, and scalable architecture for your connected device ecosystems.",
      color: "text-[#00FFFF]",
      gradient: "from-teal-500/10 to-green-500/10"
    },
    {
      icon: Gamepad2,
      title: "AR/VR Development & Implementation",
      description: "Cutting-edge applications for education, healthcare, and interactive experiences.",
      detailedContent: "Our AR/VR development team creates immersive experiences that push the boundaries of technology. From educational simulations to interactive healthcare solutions, we bring your vision to life.",
      color: "text-[#1A4B84]",
      gradient: "from-purple-500/10 to-indigo-500/10"
    }
  ]

  const handleServiceClick = (service: string) => {
    setSelectedService(service)
  }

  return (
    <>
      <div id="services" className="min-h-screen bg-[#F5F7FA] py-12 sm:py-16 text-[#4A4A4A]">
        <motion.section 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Services Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#0F1C3F]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A4B84] to-[#00FFFF]">
                Our Services
              </span>
            </h1>
            <p className="text-base sm:text-xl text-[#1A4B84] max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Innovative Services Transforming Technology Experiences
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                onClick={() => handleServiceClick(service.title)}
                className="p-4 sm:p-6 rounded-3xl bg-white border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden relative cursor-pointer"
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
                  className={`absolute -inset-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl blur-md`}
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
                    <service.icon 
                      className={`w-10 h-10 ${service.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`} 
                    />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-[#0F1C3F] transition-colors duration-300 group-hover:text-[#1A4B84]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-[#0F1C3F]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold text-[#0F1C3F] mb-4 text-center">
                {selectedService}
              </h2>
              <p className="text-[#4A4A4A] text-base leading-relaxed">
                {services.find(service => service.title === selectedService)?.detailedContent}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}