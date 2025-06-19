import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import BookingModule from '../components/home/BookingModule';
import WhyTravelSection from '../components/home/WhyTravelSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import LuxuryExperience from '../components/home/LuxuryExperience';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';



const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <BookingModule />
      <WhyTravelSection />
      <FeaturedDestinations />
      <LuxuryExperience />
      <TestimonialsSection />
      <CtaSection />
    </motion.div>
  );
};

export default HomePage;