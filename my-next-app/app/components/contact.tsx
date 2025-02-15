"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: ""
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid Indian mobile number"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.values(newErrors).every(error => error === "")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      const phoneNumber = "918489545036"
      const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
    }
  }

  // Use motion for subtle animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1 
    }
  }

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1A4B84] to-[#00FFFF] mb-4 md:mb-6">
            Let&apos;s Connect
          </h2>

          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to explore our STEM learning adventures? Reach out to us!
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="max-w-md md:max-w-lg mx-auto"
        >
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800">
              Get a Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 text-sm md:text-base">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.name && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm md:text-base">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.email && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm md:text-base">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.phone && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm md:text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#1A4B84] text-white py-2 md:py-3 text-sm md:text-base rounded-lg hover:bg-[#00FFFF] hover:text-[#0F1C3F] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact