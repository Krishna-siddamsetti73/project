import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiCheck } from 'react-icons/fi';
import Button from '../components/ui/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelType: 'Leisure',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the data to a server here
    console.log('Form submitted:', formData);
    
    // Simulate form submission success
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      travelType: 'Leisure',
      message: '',
    });
    
    // Reset submission status after a delay
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            filter: 'brightness(0.6)'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-shadow">
              Contact Us
            </h1>
            <p className="text-xl text-white text-shadow max-w-2xl">
              Let's start planning your perfect travel experience
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Contact Info and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
              <p className="text-neutral-600 mb-8">
                We're here to answer any questions about our travel services and help you plan your perfect journey. Reach out to us using any of the methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-500 mr-4">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Office</h3>
                    <p className="text-neutral-600">
                      123 Travel Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-500 mr-4">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+12125551234" className="hover:text-primary-500 transition-colors duration-300">
                        +1 (212) 555-1234
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-500 mr-4">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:info@makeamove.com" className="hover:text-primary-500 transition-colors duration-300">
                        info@makeamove.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full text-primary-500 mr-4">
                    <FiClock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-neutral-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                      <FiCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for contacting Make a Move. Our team will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="destination" className="block text-neutral-700 font-medium mb-2">
                          Desired Destination
                        </label>
                        <input
                          type="text"
                          id="destination"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="travelType" className="block text-neutral-700 font-medium mb-2">
                        Type of Travel
                      </label>
                      <select
                        id="travelType"
                        name="travelType"
                        value={formData.travelType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="Leisure">Leisure Travel</option>
                        <option value="Medical">Medical Tourism</option>
                        <option value="Corporate">Corporate Travel</option>
                        <option value="Luxury">Luxury Experience</option>
                        <option value="Adventure">Adventure Travel</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg"
                        className="w-full md:w-auto"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-10 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.960153381685!2d78.44350419999999!3d17.413699799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973b6db1b459%3A0x1a0dca50c42a3e1e!2sSunanda%20Renewable%20Energies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1748251415364!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;