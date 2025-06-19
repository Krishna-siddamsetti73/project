import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { FiHeart, FiBriefcase, FiUser, FiMapPin, FiAward } from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

// Placeholder 3D model
const MedicalModel = () => {
  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#008080" metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

// Medical Tourism Specialties
const specialties = [
  {
    icon: <FiHeart size={24} />,
    title: 'Cardiology',
    description: 'World-class cardiac care with leading specialists and state-of-the-art facilities.',
  },
  {
    icon: <FiUser size={24} />,
    title: 'Cosmetic Surgery',
    description: 'Premium cosmetic procedures with expert surgeons in luxurious recovery environments.',
  },
  {
    icon: <FiBriefcase size={24} />,
    title: 'Dental Care',
    description: 'Advanced dental treatments combining precision care with significant cost savings.',
  },
  {
    icon: <FiAward size={24} />,
    title: 'Orthopedics',
    description: 'Cutting-edge orthopedic treatments with comprehensive rehabilitation programs.',
  },
];

// Top medical tourism destinations
const destinations = [
  {
    name: 'Bangkok, Thailand',
    image: 'https://images.pexels.com/photos/1031795/pexels-photo-1031795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specialties: ['Cosmetic Surgery', 'Dental', 'Cardiology'],
    description: 'Thailand offers world-class medical facilities at competitive prices with the added benefit of recuperating in a tropical paradise.',
  },
  {
    name: 'Istanbul, Turkey',
    image: 'https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specialties: ['Hair Transplants', 'Dental', 'Eye Surgery'],
    description: 'Turkey combines cutting-edge medical technology with rich cultural experiences and exceptional value for medical tourists.',
  },
  {
    name: 'Singapore',
    image: 'https://images.pexels.com/photos/1062336/pexels-photo-1062336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specialties: ['Oncology', 'Cardiology', 'Neurology'],
    description: 'Singapore offers unparalleled medical excellence with top-tier specialists and a seamless healthcare experience.',
  },
];

const MedicalTourismPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero section */}
      <section className="min-h-[70vh] relative flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            filter: 'brightness(0.7)'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 text-shadow">
                  Medical Tourism <br />
                  <span className="text-primary-300">Redefined</span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-white text-xl mb-8 max-w-xl">
                  Experience world-class medical care combined with luxury recovery accommodations. 
                  We handle all the details for a seamless medical journey abroad.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button 
                  to="/contact" 
                  variant="primary" 
                  size="lg"
                  className="mr-4 mb-4 md:mb-0"
                >
                  Inquire Now
                </Button>
                <Button 
                  to="#specialties" 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:bg-opacity-20"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
            
            <div className="hidden lg:block h-[400px]">
              <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <Suspense fallback={null}>
                  <MedicalModel />
                  <Environment preset="city" />
                </Suspense>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              </Canvas>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Medical Tourism */}
      <section className="py-20 bg-neutral-50" id="specialties">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Medical Excellence Meets Luxury Travel"
            subtitle="Discover the benefits of combining world-class healthcare with premium travel experiences"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-500 mb-4 p-3 bg-primary-50 inline-block rounded-full">
                  {specialty.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{specialty.title}</h3>
                <p className="text-neutral-600">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Comprehensive Process"
            subtitle="We handle every detail of your medical journey from consultation to recovery"
          />
          
          <div className="mt-12 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 transform -translate-x-1/2"></div>
            
            {['Initial Consultation', 'Medical Evaluation', 'Treatment Planning', 'Travel Arrangements', 'Treatment & Care', 'Luxury Recovery', 'Follow-up Care'].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <h3 className="text-2xl font-serif font-bold mb-3">{`${index + 1}. ${step}`}</h3>
                  <p className="text-neutral-600">
                    {index === 0 && 'We begin with a comprehensive consultation to understand your medical needs and preferences.'}
                    {index === 1 && 'Our medical team reviews your case and connects with specialists to create a personalized plan.'}
                    {index === 2 && 'We develop a detailed treatment plan with cost estimates and timeline for your consideration.'}
                    {index === 3 && 'Once approved, we handle all travel logistics, including flights, accommodations, and transportation.'}
                    {index === 4 && 'You receive top-quality medical care at internationally accredited facilities with dedicated support.'}
                    {index === 5 && 'Recover in luxurious accommodations with personalized care and amenities.'}
                    {index === 6 && 'We ensure continuity of care with follow-up appointments and coordination with your home physicians.'}
                  </p>
                </div>
                
                <div className="md:w-14 flex justify-center my-4 md:my-0 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Top Destinations */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Top Medical Tourism Destinations"
            subtitle="Explore our premium medical tourism locations combining excellence in healthcare with amazing travel experiences"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden card-3d"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <FiMapPin className="text-primary-500 mr-2" />
                    <h3 className="text-xl font-serif font-bold">{destination.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-neutral-600 mb-4">
                    {destination.description}
                  </p>
                  
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
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
              Begin Your Medical Journey with Make a Move
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-lg mb-8"
            >
              Contact our specialized medical tourism team to discuss your needs and discover how we can create a personalized care and travel experience for you.
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
                Schedule a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MedicalTourismPage;