import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-bold mb-4">Make a Move</h3>
            <p className="text-neutral-300 mb-4">
              Luxury travel experiences tailored to your desires. We handle the details while you enjoy the journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary-500 transition-colors duration-300">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors duration-300">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors duration-300">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors duration-300">
                <FiYoutube size={20} />
              </a>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-neutral-300 hover:text-primary-300 transition-colors duration-300">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/medical-tourism" className="text-neutral-300 hover:text-primary-300 transition-colors duration-300">
                  Medical Tourism
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-300 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-300 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-300 transition-colors duration-300">
                  Luxury Vacations
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-300 transition-colors duration-300">
                  Adventure Travel
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-300 transition-colors duration-300">
                  Wellness Retreats
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-300 transition-colors duration-300">
                  Medical Tourism
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-300 transition-colors duration-300">
                  Corporate Travel
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-neutral-300 space-y-2">
              <p>123 Travel Avenue</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
              <p className="mt-4">
                <a href="tel:+12125551234" className="hover:text-primary-300 transition-colors duration-300">
                  +1 (212) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@makeamove.com" className="hover:text-primary-300 transition-colors duration-300">
                  info@makeamove.com
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} Make a Move Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;