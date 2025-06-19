import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiHeart, FiRefreshCw, FiBriefcase, FiGlobe } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';

const reasons = [
  {
    icon: <FiHeart size={40} />,
    title: 'Self-Discovery',
    description: 'Travel opens new perspectives and helps you discover more about yourself.'
  },
  {
    icon: <FiRefreshCw size={40} />,
    title: 'Rejuvenation',
    description: 'Break from routine and recharge your mind, body, and spirit with new experiences.'
  },
  {
    icon: <FiBriefcase size={40} />,
    title: 'Cultural Immersion',
    description: 'Experience diverse cultures, traditions, and ways of life firsthand.'
  },
  {
    icon: <FiGlobe size={40} />,
    title: 'Connection',
    description: 'Forge meaningful connections with people from around the world.'
  }
];

const WhyTravelSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Why Travel With Us"
          subtitle="Discover the transformative power of travel and why Make a Move is your perfect companion on this journey."
        />
        
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary-500 mb-4">{reason.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-3">{reason.title}</h3>
              <p className="text-neutral-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTravelSection;