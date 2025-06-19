import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../ui/Button';
import { FiArrowRight } from 'react-icons/fi';

const LuxuryExperience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 z-0"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/2245436/pexels-photo-2245436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Experience Travel Like Never Before
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              At Make a Move, we believe that travel should be an effortless experience. 
              We handle all the details—from arranging flights and accommodations to planning 
              daily activities and exclusive experiences—so you can focus on creating lasting memories.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              to="/about" 
              variant="light" 
              size="lg"
              icon={<FiArrowRight />}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperience;