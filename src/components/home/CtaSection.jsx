import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';

// Placeholder for actual 3D model
const LuggageModel = () => {
  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1.5, 0.5]} />
      <meshStandardMaterial color="#D22B2B" />
    </mesh>
  );
};

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Ready to Make Your <span className="text-secondary-500">Move</span>?
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-neutral-600 mb-8">
                Contact us today to start planning your next luxurious travel experience. 
                Our expert travel consultants are ready to craft your perfect getaway.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button to="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
              
              <Button to="/destinations" variant="outline" size="lg">
                Explore Destinations
              </Button>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 h-72 lg:h-96">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Float
                speed={1.5}
                rotationIntensity={1}
                floatIntensity={2}
              >
                <LuggageModel />
              </Float>
            </Canvas>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary-100 rounded-full opacity-50"></div>
      <div className="absolute top-10 -left-16 w-32 h-32 bg-secondary-100 rounded-full opacity-40"></div>
    </section>
  );
};

export default CtaSection;