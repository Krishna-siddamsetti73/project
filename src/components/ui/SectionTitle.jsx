import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  titleColor = 'text-neutral-800',
  subtitleColor = 'text-neutral-600',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${titleColor}`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w-3xl mx-auto text-lg md:text-xl ${subtitleColor}`}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: align === 'center' ? '5rem' : '3rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`h-1 bg-secondary-500 mt-4 ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`}
      />
    </div>
  );
};

export default SectionTitle;