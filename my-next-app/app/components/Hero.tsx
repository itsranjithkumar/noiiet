"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Rocket, 
  ArrowRight, 
  BotMessageSquare as BotIcon, 
  Puzzle, 
  Network, 
  Cpu, 
  Settings 
} from "lucide-react"

// interface Node {
//   id: number;
//   x: number;
//   y: number;
//   type: 'home' | 'industrial' | 'mobile' | 'cloud';
// }

// interface Connection {
//   from: number;
//   to: number;
// }

const IoTNetworkGraphic: React.FC = () => {
  const connectionTypes = [
    { color: '#00FFFF', opacity: 0.5 },
    { color: '#1A4B84', opacity: 0.3 }
  ];

  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
    >
      {[...Array(20)].map((_, i) => {
        // More strategic connection points
        const startPoints = [
          { x: Math.random() * 100, y: -10 },   // Top
          { x: Math.random() * 100, y: 110 },   // Bottom
          { x: -10, y: Math.random() * 100 },   // Left
          { x: 110, y: Math.random() * 100 }    // Right
        ];

        const endPoints = [
          { x: 40 + Math.random() * 20, y: 40 + Math.random() * 20 },  // Varied center
          { x: 50, y: 50 },  // Exact center
          { x: Math.random() * 100, y: Math.random() * 100 }  // Random point
        ];

        const start = startPoints[Math.floor(Math.random() * startPoints.length)];
        const end = endPoints[Math.floor(Math.random() * endPoints.length)];
        const connectionType = connectionTypes[Math.floor(Math.random() * connectionTypes.length)];

        // Control points for more dynamic curves
        const controlPoint1 = {
          x: start.x + (end.x - start.x) * 0.3 + Math.random() * 10 - 5,
          y: start.y + (end.y - start.y) * 0.3 + Math.random() * 10 - 5
        };

        const controlPoint2 = {
          x: start.x + (end.x - start.x) * 0.7 + Math.random() * 10 - 5,
          y: start.y + (end.y - start.y) * 0.7 + Math.random() * 10 - 5
        };

        return (
          <motion.g key={i}>
            <motion.path
              d={`M${start.x},${start.y} C${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${end.x},${end.y}`}
              fill="transparent"
              stroke={connectionType.color}
              strokeWidth="0.5"
              strokeOpacity={connectionType.opacity}
              initial={{ 
                pathLength: 0,
                strokeDashoffset: 100
              }}
              animate={{ 
                pathLength: [0, 1, 0],
                strokeDashoffset: [100, 0, 100],
                strokeOpacity: [0.1, connectionType.opacity, 0.1]
              }}
              transition={{ 
                duration: Math.random() * 5 + 4, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
            
            {/* Animated connection nodes */}
            <motion.circle
              cx={(start.x + end.x) / 2}
              cy={(start.y + end.y) / 2}
              r="1"
              fill={connectionType.color}
              initial={{ 
                scale: 0, 
                opacity: 0 
              }}
              animate={{ 
                scale: [0, 1.5, 1],
                opacity: [0, 0.7, 0],
                r: [0.5, 1, 0.5]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
          </motion.g>
        );
      })}
    </motion.svg>
  );
};

const features = [
  {
    icon: <Network className="w-10 h-10" />,
    title: "IoT Solutions",
    description: "Smart home & connected devices",
    color: "text-[#00FFFF]",
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "Embedded Systems",
    description: "Intelligent edge technologies",
    color: "text-[#00FFFF]",
  },
  {
    icon: <Puzzle className="w-10 h-10" />,
    title: "STEM Education",
    description: "Next-gen learning solutions",
    color: "text-[#00FFFF]",
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Smart Automation",
    description: "Innovative tech integration",
    color: "text-[#00FFFF]",
  },
]

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      {/* IoT Network Graphic */}
      <IoTNetworkGraphic />

      {/* Animated Background Particles */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 5}px`,
              height: `${Math.random() * 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a2e]/70" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
        <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-16">
          {/* Logo Section with Bounce Animation */}
         {/* Apple-Inspired Circular Logo Container */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 8
    }
  }}
  className="relative w-full aspect-square max-w-[250px] sm:max-w-[350px] mx-auto 
    rounded-full bg-[#00FFFF]/5 backdrop-blur-xl flex items-center justify-center
    border-2 border-[#00FFFF]/10 shadow-2xl overflow-hidden"
>
  {/* Wave-Like Edge Animation */}
  <svg className="absolute inset-0 w-full h-full">
    {[...Array(3)].map((_, i) => (
      <motion.circle
        key={i}
        cx="50%"
        cy="50%"
        r={`calc(50% - ${(i + 1) * 5}px)`}
        fill="transparent"
        stroke={`rgba(255,255,255,${0.1 - i * 0.03})`}
        strokeWidth="2"
        animate={{
          strokeDashoffset: [0, 100, 0],
          strokeDasharray: ['0 100', '50 50', '0 100'],
          scale: [1, 1.02, 1],
          rotate: [0, 360, 0]
        }}
        transition={{
          duration: 5 + i * 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
    ))}
  </svg>

  {/* Pulsing Wave Background */}
  <motion.div
    className="absolute inset-0"
    style={{
      background: `
        radial-gradient(
          circle at center, 
          rgba(0,255,255,0.05) 0%, 
          rgba(0,255,255,0.02) 50%, 
          transparent 70%
        )
      `
    }}
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 15, -15, 0],
      opacity: [0.3, 0.5, 0.3]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }}
  />

  {/* Logo Container with Wave-Like Bounce */}
  <motion.div
    animate={{
      y: [0, -5, 0],
      scale: [1, 1.02, 1],
      rotate: [0, 2, -2, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }}
    className="relative w-3/4 h-3/4 z-10"
  >
  <Image
  src="/final-15.png"
  alt="Noiiet Technologies Logo"
  fill
  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 250px"
  className="object-contain p-2 filter drop-shadow-[0_0_10px_rgba(0,255,255,0.3)] scale-125"
  priority
/>
  </motion.div>

  {/* Circular Wave Overlay */}
  <motion.div
    className="absolute inset-0 rounded-full pointer-events-none"
    style={{
      background: `
        linear-gradient(
          135deg, 
          rgba(0,255,255,0.1) 0%, 
          rgba(0,255,255,0.05) 50%, 
          transparent 100%
        )
      `,
      mixBlendMode: 'color-dodge'
    }}
    animate={{
      scale: [1, 1.05, 1],
      rotate: [0, 20, -20, 0],
      opacity: [0.2, 0.4, 0.2]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }}
  />
</motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8 px-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight">
              Innovating the Future with
              <br />
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-white to-[#00FFFF] bg-[length:200%_auto]"
              >
                Intelligent IoT Solutions
              </motion.span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-[#00FFFF]/80 max-w-3xl mx-auto">
              Empowering smart homes, next-gen education, and embedded intelligence for connected devices now.
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/"
                className="group relative overflow-hidden px-6 sm:px-12 py-3 sm:py-5 bg-[#00FFFF] rounded-full 
                  text-[#1a1a2e] text-base sm:text-xl font-bold transition-all duration-500
                  hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105"
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center gap-2 sm:gap-3">
                  <Rocket className="w-4 h-4 sm:w-6 sm:h-6" />
                  Explore Solutions
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                  </motion.span>
                </span>
              </Link>

              <Link
                href="/"
                className="group px-6 sm:px-12 py-3 sm:py-5 rounded-full text-base sm:text-xl font-bold
                  text-[#00FFFF] border-2 border-[#00FFFF] transition-all duration-500
                  hover:bg-[#00FFFF]/10 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-105
                  flex items-center justify-center gap-2 sm:gap-3"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <BotIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                </motion.span>
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Features Grid - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-7xl mx-auto px-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 10,
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  className="relative h-full bg-[#16213e]/20 backdrop-blur-xl p-3 sm:p-6 rounded-2xl border border-[#00FFFF]/20
                  transition-all duration-500 group-hover:border-[#00FFFF]/50 flex flex-col items-center text-center"
                >
                  <motion.div
                    className={`${feature.color} mb-2 sm:mb-4`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-[#00FFFF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#00FFFF]/80 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero