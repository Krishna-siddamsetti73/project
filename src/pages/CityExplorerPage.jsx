import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiDollarSign, FiStar, FiInfo, FiCalendar } from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

// Sample city data
const cities = {
  'paris': {
    name: 'Paris',
    country: 'France',
    tagline: 'The City of Light',
    heroImage: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Paris, the capital of France, is renowned for its art, fashion, gastronomy, and culture. The city is home to iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Stroll along the Seine River, enjoy sidewalk cafés, and experience the charm that makes Paris one of the world\'s most beloved destinations.',
    attractions: [
      {
        name: 'Eiffel Tower',
        image: 'https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'The iconic wrought-iron lattice tower on the Champ de Mars is one of the world\'s most recognizable landmarks.',
        duration: '2-3 hours',
        price: '€€',
        rating: 4.7,
      },
      {
        name: 'Louvre Museum',
        image: 'https://images.pexels.com/photos/2675268/pexels-photo-2675268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'The world\'s largest art museum houses tens of thousands of works, including the Mona Lisa and Venus de Milo.',
        duration: '3-4 hours',
        price: '€€',
        rating: 4.8,
      },
      {
        name: 'Notre-Dame Cathedral',
        image: 'https://images.pexels.com/photos/3700369/pexels-photo-3700369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A masterpiece of French Gothic architecture, the cathedral is known for its stunning stained glass and gargoyles.',
        duration: '1-2 hours',
        price: '€',
        rating: 4.6,
      },
      {
        name: 'Montmartre',
        image: 'https://images.pexels.com/photos/705764/pexels-photo-705764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A historic hilltop district known for the white-domed Basilica of the Sacré-Cœur and an active arts scene.',
        duration: '3-4 hours',
        price: '€',
        rating: 4.5,
      },
      {
        name: 'Champs-Élysées',
        image: 'https://images.pexels.com/photos/9977880/pexels-photo-9977880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'One of the world\'s most famous avenues, lined with luxury shops, cafés, and theaters, leading to the Arc de Triomphe.',
        duration: '2-3 hours',
        price: '€€€',
        rating: 4.4,
      },
      {
        name: 'Seine River Cruise',
        image: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A relaxing boat ride along the Seine offering unique views of many Parisian landmarks.',
        duration: '1-2 hours',
        price: '€€',
        rating: 4.6,
      },
    ]
  },
  'tokyo': {
    name: 'Tokyo',
    country: 'Japan',
    tagline: 'Where Tradition Meets Innovation',
    heroImage: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Tokyo, Japan\'s busy capital, mixes ultramodern and traditional, from neon-lit skyscrapers to historic temples. The city is known for its vibrant food scene, shopping districts, and pop culture. Experience the blend of ancient traditions and cutting-edge technology that makes Tokyo a truly unique destination.',
    attractions: [
      {
        name: 'Tokyo Skytree',
        image: 'https://images.pexels.com/photos/5007734/pexels-photo-5007734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'One of the tallest structures in the world, offering breathtaking views of the sprawling cityscape.',
        duration: '2-3 hours',
        price: '€€',
        rating: 4.6,
      },
      {
        name: 'Senso-ji Temple',
        image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Tokyo\'s oldest temple, featuring a massive paper lantern and a shopping street leading to its entrance.',
        duration: '1-2 hours',
        price: '€',
        rating: 4.7,
      },
      {
        name: 'Shibuya Crossing',
        image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'The world\'s busiest pedestrian crossing, where up to 3,000 people cross at once during peak times.',
        duration: '1 hour',
        price: '€',
        rating: 4.5,
      },
      {
        name: 'Meiji Shrine',
        image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A Shinto shrine dedicated to Emperor Meiji and Empress Shoken, set in a serene forest in the heart of Tokyo.',
        duration: '1-2 hours',
        price: '€',
        rating: 4.8,
      },
      {
        name: 'Akihabara Electric Town',
        image: 'https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A district famous for its electronics shops, anime, manga, and video game stores and vibrant otaku culture.',
        duration: '3-4 hours',
        price: '€€',
        rating: 4.6,
      },
      {
        name: 'Tokyo Disneyland',
        image: 'https://images.pexels.com/photos/12967918/pexels-photo-12967918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A world-class theme park featuring classic Disney attractions, shows, and characters.',
        duration: 'Full day',
        price: '€€€',
        rating: 4.7,
      },
    ]
  },
  'bali': {
    name: 'Bali',
    country: 'Indonesia',
    tagline: 'Island of the Gods',
    heroImage: 'https://images.pexels.com/photos/5759937/pexels-photo-5759937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Bali, the Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur, and Nusa Dua are popular resort towns.',
    attractions: [
      {
        name: 'Uluwatu Temple',
        image: 'https://images.pexels.com/photos/5759937/pexels-photo-5759937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A sea temple perched on a steep cliff 70 meters above the Indian Ocean, offering stunning sunset views.',
        duration: '2-3 hours',
        price: '€',
        rating: 4.7,
      },
      {
        name: 'Ubud Monkey Forest',
        image: 'https://images.pexels.com/photos/2898751/pexels-photo-2898751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A natural sanctuary and temple complex with more than 700 monkeys living in a natural forest setting.',
        duration: '2-3 hours',
        price: '€',
        rating: 4.5,
      },
      {
        name: 'Tegallalang Rice Terraces',
        image: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Famous for its beautiful scenes of terraced rice paddies, utilizing the traditional Balinese cooperative irrigation system.',
        duration: '1-2 hours',
        price: '€',
        rating: 4.6,
      },
      {
        name: 'Tanah Lot Temple',
        image: 'https://images.pexels.com/photos/2474691/pexels-photo-2474691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A rock formation with a temple sitting atop an outcrop amid constantly crashing waves.',
        duration: '2-3 hours',
        price: '€',
        rating: 4.7,
      },
      {
        name: 'Seminyak Beach',
        image: 'https://images.pexels.com/photos/3601434/pexels-photo-3601434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A sophisticated beach area with high-end shops, restaurants, and luxury hotels.',
        duration: 'Half day',
        price: '€€',
        rating: 4.5,
      },
      {
        name: 'Mount Batur Sunrise Trek',
        image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'An early morning hike up an active volcano for breathtaking sunrise views over Lake Batur.',
        duration: '6-7 hours',
        price: '€€',
        rating: 4.8,
      },
    ]
  },
  'santorini': {
    name: 'Santorini',
    country: 'Greece',
    tagline: 'Jewel of the Aegean',
    heroImage: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its two principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater), overlooking the sea and small islands to the west.',
    attractions: [
      {
        name: 'Oia Sunset',
        image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'The most famous place on the island to watch the sunset over the caldera and Aegean Sea.',
        duration: '2-3 hours',
        price: '€',
        rating: 4.9,
      },
      {
        name: 'Fira Town',
        image: 'https://images.pexels.com/photos/3010019/pexels-photo-3010019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'The bustling capital of Santorini with breathtaking views, shopping, dining, and nightlife.',
        duration: 'Half day',
        price: '€€',
        rating: 4.7,
      },
      {
        name: 'Red Beach',
        image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A unique beach with stunning red cliffs and dark red sand, accessible by a short hike.',
        duration: '2-3 hours',
        price: '€',
        rating: 4.5,
      },
      {
        name: 'Akrotiri Archaeological Site',
        image: 'https://images.pexels.com/photos/3224231/pexels-photo-3224231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A prehistoric settlement that was buried in volcanic ash, similar to Pompeii but much older.',
        duration: '1-2 hours',
        price: '€€',
        rating: 4.6,
      },
      {
        name: 'Santorini Winery Tour',
        image: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Sample the island\'s unique wines produced from grapes grown in volcanic soil.',
        duration: '3-4 hours',
        price: '€€',
        rating: 4.8,
      },
      {
        name: 'Caldera Boat Tour',
        image: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'A boat trip around the caldera, visiting the volcanic islands and hot springs.',
        duration: 'Half day',
        price: '€€€',
        rating: 4.7,
      },
    ]
  },
};

const CityExplorerPage = () => {
  const { cityId } = useParams();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('attractions');
  
  useEffect(() => {
    // Simulating API call to get city data
    setTimeout(() => {
      if (cities[cityId]) {
        setCityData(cities[cityId]);
      }
      setLoading(false);
    }, 500);
  }, [cityId]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }
  
  if (!cityData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-3xl font-serif font-bold mb-4">City Not Found</h2>
          <p className="text-neutral-600 mb-6">Sorry, we couldn't find information about this destination.</p>
          <Button to="/destinations" variant="primary">
            Explore Other Destinations
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url("${cityData.heroImage}")`,
            filter: 'brightness(0.6)'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <FiMapPin className="text-white mr-2" size={20} />
              <h2 className="text-white text-xl">{cityData.country}</h2>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 text-shadow">
              {cityData.name}
            </h1>
            <p className="text-2xl text-white mb-6 italic">{cityData.tagline}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button 
              to="#explore" 
              variant="primary" 
              size="lg"
              className="mr-4"
            >
              Explore {cityData.name}
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
      
      {/* City Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">About {cityData.name}</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {cityData.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Tabs for different sections */}
      <section id="explore" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={`Explore ${cityData.name}`}
            subtitle="Discover the must-see attractions and experiences in this amazing destination"
          />
          
          <div className="flex justify-center mb-12 border-b border-neutral-200">
            <button
              onClick={() => setActiveTab('attractions')}
              className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${
                activeTab === 'attractions' 
                  ? 'text-primary-500 border-b-2 border-primary-500' 
                  : 'text-neutral-500 hover:text-primary-500'
              }`}
            >
              Attractions
            </button>
            <button
              onClick={() => setActiveTab('tours')}
              className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${
                activeTab === 'tours' 
                  ? 'text-primary-500 border-b-2 border-primary-500' 
                  : 'text-neutral-500 hover:text-primary-500'
              }`}
            >
              Tours & Activities
            </button>
            <button
              onClick={() => setActiveTab('restaurants')}
              className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${
                activeTab === 'restaurants' 
                  ? 'text-primary-500 border-b-2 border-primary-500' 
                  : 'text-neutral-500 hover:text-primary-500'
              }`}
            >
              Dining
            </button>
          </div>
          
          {/* Attractions Tab */}
          <div className={activeTab === 'attractions' ? 'block' : 'hidden'}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityData.attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2">{attraction.name}</h3>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center bg-primary-50 px-2 py-1 rounded text-sm mr-2">
                        <FiStar className="text-yellow-500 mr-1 fill-current" />
                        <span>{attraction.rating}</span>
                      </div>
                      <div className="flex items-center text-neutral-500 text-sm mr-2">
                        <FiClock className="mr-1" />
                        <span>{attraction.duration}</span>
                      </div>
                      <div className="flex items-center text-neutral-500 text-sm">
                        <FiDollarSign className="mr-1" />
                        <span>{attraction.price}</span>
                      </div>
                    </div>
                    
                    <p className="text-neutral-600 mb-4">
                      {attraction.description}
                    </p>
                    
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Tours Tab (Placeholder) */}
          <div className={activeTab === 'tours' ? 'block' : 'hidden'}>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <FiCalendar size={48} className="mx-auto text-primary-500 mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-4">Tours & Activities Coming Soon</h3>
              <p className="text-neutral-600 mb-6">
                We're currently curating the best tours and activities for {cityData.name}.
                Check back soon or contact us to create a custom itinerary.
              </p>
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Restaurants Tab (Placeholder) */}
          <div className={activeTab === 'restaurants' ? 'block' : 'hidden'}>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <FiInfo size={48} className="mx-auto text-primary-500 mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-4">Dining Guide Coming Soon</h3>
              <p className="text-neutral-600 mb-6">
                Our culinary experts are selecting the finest dining options in {cityData.name}.
                Check back soon or contact us for personalized restaurant recommendations.
              </p>
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
          style={{
            backgroundImage: `url("${cityData.heroImage}")`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-serif font-bold text-white mb-6"
            >
              Ready to Experience {cityData.name}?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-lg mb-8"
            >
              Let our travel experts create a personalized itinerary for your perfect {cityData.name} experience. From luxury accommodations to exclusive tours, we'll handle all the details.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                to="/contact" 
                variant="light" 
                size="lg"
              >
                Plan Your {cityData.name} Journey
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CityExplorerPage;