import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiHeart, FiGlobe } from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Alexandra Reynolds',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'With over 15 years in luxury travel, Alexandra founded Make a Move to create exceptional travel experiences focused on comfort and personalization.'
    },
    {
      name: 'David Chen',
      position: 'Medical Tourism Director',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'David\'s background in healthcare administration and international relations helps him create seamless medical tourism experiences for our clients.'
    },
    {
      name: 'Sophia Martinez',
      position: 'Destination Specialist',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Sophia has traveled to over 50 countries and uses her extensive knowledge to craft unforgettable itineraries tailored to each client\'s preferences.'
    },
    {
      name: 'Michael Johnson',
      position: 'Luxury Experience Curator',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Michael\'s expertise in luxury hospitality ensures our clients receive VIP treatment and exclusive access at the world\'s finest destinations.'
    },
  ];

  // Company values
  const values = [
    {
      icon: <FiBriefcase size={40} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our service, from planning to execution.'
    },
    {
      icon: <FiUsers size={40} />,
      title: 'Personalization',
      description: 'We recognize that each client is unique, and we tailor our services to match individual preferences and needs.'
    },
    {
      icon: <FiHeart size={40} />,
      title: 'Care',
      description: 'We approach each journey with genuine care, ensuring our clients feel supported throughout their travels.'
    },
    {
      icon: <FiGlobe size={40} />,
      title: 'Sustainability',
      description: 'We commit to responsible travel practices that respect local communities and minimize environmental impact.'
    },
  ];

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
            backgroundImage: 'url("https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
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
              About Make a Move
            </h1>
            <p className="text-xl text-white text-shadow max-w-2xl">
              Discover the story behind our passion for creating exceptional travel experiences
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  Founded in 2015, Make a Move was born from a simple yet powerful vision: to transform travel from a stressful experience into a seamless journey of comfort and discovery. 
                </p>
                <p>
                  Our founder, Alexandra Reynolds, experienced firsthand the challenges of planning complex international trips while maintaining the level of luxury and personal touch that discerning travelers seek. Determined to create a better solution, she assembled a team of passionate travel experts with deep knowledge of destinations worldwide.
                </p>
                <p>
                  What began as a boutique agency has grown into a premier travel company specializing in luxury experiences, bespoke itineraries, and pioneering medical tourism services. Throughout our growth, we've remained true to our core mission: handling all the details so our clients can focus entirely on enjoying their journey.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Luxury travel experience"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8">
                  <p className="text-white text-lg font-medium italic">
                    "We don't just plan trips; we craft experiences that become cherished memories."
                  </p>
                  <p className="text-white/80 mt-2">Alexandra Reynolds, Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Values"
            subtitle="The principles that guide everything we do at Make a Move"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-primary-500 mb-4 inline-flex p-4 bg-primary-50 rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="The passionate travel experts behind your exceptional experiences"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-4">{member.position}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-6"
            >
              Ready to Experience the Make a Move Difference?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-neutral-600 text-lg mb-8"
            >
              Contact our team today to start planning your next unforgettable journey.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                to="/contact" 
                variant="primary" 
                size="lg"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;