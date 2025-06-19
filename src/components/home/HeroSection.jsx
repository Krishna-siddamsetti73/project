import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FiChevronRight } from 'react-icons/fi';

const videoSlides = [
  {
    src: 'src/components/pics/WhatsApp Video 2025-06-18 at 17.17.09_75c86f4b.mp4',
    heading: 'Travel in Comfort',
    subheading: 'Experience luxury travel tailored to your desires.',
  },
  {
    src: 'src/components/pics/46.mp4',
    heading: 'Discover New Places',
    subheading: 'Let us guide you to hidden gems across the globe.',
  },
  {
    src: 'src/components/pics/WhatsApp Video 2025-06-18 at 17.17.24_bccd5af0.mp4',
    heading: 'Make a Move Today',
    subheading: 'Your dream vacation is just a click away.',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
    arrows: true,
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Slider {...settings}>
        {videoSlides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full">
            <video
              src={slide.src}
              autoPlay
              loop
              muted
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-5" />
          </div>
        ))}
      </Slider>

      {/* Text Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
        <div className="text-center px-6">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {videoSlides[currentSlide].heading}
          </motion.h1>

          <motion.p
            className="text-white text-lg md:text-xl mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {videoSlides[currentSlide].subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              to="/destinations" 
              className='bg-red-600 text-white-500 hover:bg-opacity-90'
              size="lg"
              icon={<FiChevronRight />}
            >
              Explore Destinations
            </Button>
            <Button 
              to="/contact" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-20"
            >
              Plan Your Trip
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
