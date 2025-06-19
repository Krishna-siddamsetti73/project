import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const destinations = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Experience the romance and elegance of the City of Light.'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Immerse yourself in the perfect blend of tradition and innovation.'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.pexels.com/photos/5759937/pexels-photo-5759937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Find serenity in the island of the gods with breathtaking landscapes.'
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Discover the iconic white-washed buildings and azure waters.'
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Featured Destinations"
          subtitle="Explore our handpicked luxury destinations around the world"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-3d"
            >
              <Link to={`/explore/${destination.id}`} className="block h-full">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h3 className="text-white text-xl font-serif font-bold">{destination.name}</h3>
                      <p className="text-white text-sm opacity-90">{destination.country}</p>
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <p className="text-neutral-600 mb-4">{destination.description}</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-sm font-medium text-primary-500 group-hover:text-secondary-500 transition-colors duration-300">
                        Explore
                        <svg 
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;