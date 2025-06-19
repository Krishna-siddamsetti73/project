import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-serif font-bold">
            <span className="text-secondary-500">Make</span> 
            <span className="text-neutral-800"> a </span>
            <span className="text-gray-500">Move</span>
          </h1>
        </motion.div>
        
        <div className="flex gap-3">
          {[0, 1, 2].map((idx) => (
            <motion.div
              key={idx}
              className="w-4 h-4 rounded-full bg-primary-500"
              initial={{ y: 0 }}
              animate={{ y: [-10, 0, -10] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: idx * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <motion.p
          className="mt-4 text-neutral-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Preparing your luxury travel experience...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;