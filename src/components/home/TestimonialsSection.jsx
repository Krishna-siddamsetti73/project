import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Emma Thompson',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    testimonial: 'Make a Move made our honeymoon absolutely unforgettable. Every detail was handled with care and precision. The luxury accommodations and personalized experiences exceeded our expectations.',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    location: 'Miami, USA',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    testimonial: 'The attention to detail and level of service provided by Make a Move was outstanding. Our family vacation was stress-free and perfectly tailored to our interests. We will definitely be booking with them again!',
  },
  {
    id: 3,
    name: 'Sophia Chen',
    location: 'Singapore',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    testimonial: 'I was hesitant about medical tourism until I found Make a Move. They coordinated everything from top-tier medical facilities to luxury recovery accommodations. The entire process was seamless.',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Client Testimonials"
          subtitle="Hear what our valued clients have to say about their experiences with Make a Move"
        />
        
        <div className="mt-12 relative">
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                  display: index === activeIndex ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-10 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto border-4 border-primary-100"
                    />
                  </div>
                  
                  <div className="md:w-3/4">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar key={i} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl italic text-neutral-700 mb-4">
                      "{testimonial.testimonial}"
                    </blockquote>
                    
                    <div>
                      <p className="font-serif font-bold text-lg">{testimonial.name}</p>
                      <p className="text-neutral-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-700 hover:bg-primary-50 transition-colors duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>
            
            <div className="flex items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 mx-1 rounded-full focus:outline-none transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary-500 w-4' : 'bg-neutral-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-700 hover:bg-primary-50 transition-colors duration-300 focus:outline-none"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;