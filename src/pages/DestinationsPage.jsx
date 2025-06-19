import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiMapPin, FiStar, FiCalendar } from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

// Destination data
const destinations = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    type: 'City',
    image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    featured: true,
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    type: 'City',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    featured: true,
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    type: 'Beach',
    image: 'https://images.pexels.com/photos/5759937/pexels-photo-5759937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    featured: true,
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    type: 'Beach',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    featured: true,
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'USA',
    continent: 'North America',
    type: 'City',
    image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    featured: false,
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    continent: 'Asia',
    type: 'City',
    image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    featured: false,
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    continent: 'Asia',
    type: 'Beach',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    featured: false,
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    continent: 'Europe',
    type: 'City',
    image: 'https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    featured: false,
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    continent: 'Asia',
    type: 'Cultural',
    image: 'https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    featured: false,
  },
  {
    id: 'switzerland',
    name: 'Swiss Alps',
    country: 'Switzerland',
    continent: 'Europe',
    type: 'Mountain',
    image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    featured: false,
  },
  {
    id: 'rio',
    name: 'Rio de Janeiro',
    country: 'Brazil',
    continent: 'South America',
    type: 'Beach',
    image: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    featured: false,
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    continent: 'South America',
    type: 'Cultural',
    image: 'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    featured: false,
  },
];

const DestinationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterContinent, setFilterContinent] = useState('All');

  // Get unique destination types
  const destinationTypes = ['All', ...new Set(destinations.map(dest => dest.type))];
  
  // Get unique continents
  const continents = ['All', ...new Set(destinations.map(dest => dest.continent))];

  // Filter destinations based on search and filters
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          destination.country.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filterType === 'All' || destination.type === filterType;
    const matchesContinent = filterContinent === 'All' || destination.continent === filterContinent;
    
    return matchesSearch && matchesType && matchesContinent;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
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
              Discover Our Destinations
            </h1>
            <p className="text-xl text-white text-shadow max-w-2xl">
              Explore our curated collection of luxury destinations around the world
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Search and Filter section */}
      <div className="bg-white shadow-md py-6 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="py-2 px-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {destinationTypes.map(type => (
                  <option key={type} value={type}>{type} Destinations</option>
                ))}
              </select>
              
              <select
                value={filterContinent}
                onChange={(e) => setFilterContinent(e.target.value)}
                className="py-2 px-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {continents.map(continent => (
                  <option key={continent} value={continent}>{continent}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group card-3d"
                >
                  <Link to={`/explore/${destination.id}`} className="block h-full">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                        />
                        {destination.featured && (
                          <div className="absolute top-4 left-4 bg-secondary-500 text-white text-xs px-2 py-1 rounded-full">
                            Featured
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-serif font-bold">{destination.name}</h3>
                            <div className="flex items-center">
                              <FiMapPin size={14} className="text-neutral-500 mr-1" />
                              <span className="text-neutral-500 text-sm">{destination.country}</span>
                            </div>
                          </div>
                          <div className="flex items-center bg-primary-50 px-2 py-1 rounded-md">
                            <FiStar size={14} className="text-yellow-500 mr-1 fill-current" />
                            <span className="text-sm font-medium">{destination.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center mb-4">
                          <span className="inline-block bg-neutral-100 rounded-full px-3 py-1 text-xs font-medium text-neutral-700 mr-2">
                            {destination.type}
                          </span>
                          <span className="inline-block bg-neutral-100 rounded-full px-3 py-1 text-xs font-medium text-neutral-700">
                            {destination.continent}
                          </span>
                        </div>
                        
                        <div className="mt-auto pt-4 border-t border-neutral-100">
                          <Button 
                            variant="primary" 
                            className="w-full"
                          >
                            Explore {destination.name}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-serif font-medium mb-2">No destinations found</h3>
              <p className="text-neutral-600 mb-6">Try adjusting your search or filters</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setFilterType('All');
                  setFilterContinent('All');
                }}
                variant="primary"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default DestinationsPage;