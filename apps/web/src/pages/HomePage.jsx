import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Anna, meu Amor!</title>
        <meta name="description" content="A romantic message for Anna - a beautiful declaration of love" />
      </Helmet>
      
      <div 
        className="min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #9b59b6 0%, #b57bb4 50%, #c39bd3 100%)'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center px-6 py-12"
        >
          {/* Heart SVG with pulse animation */}
          <motion.svg
            animate={{ 
              scale: [1, 1.08, 1],
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatType: "reverse"
            }}
            viewBox="0 0 100 100"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mb-8 sm:mb-12 drop-shadow-2xl"
            aria-label="Purple heart symbol"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M50,88 C50,88 12,62 12,38 C12,26 19,17 28,17 C37,17 44,24 50,32 C56,24 63,17 72,17 C81,17 88,26 88,38 C88,62 50,88 50,88 Z"
              fill="#6c3483"
              filter="url(#glow)"
              className="transition-all duration-300"
            />
          </motion.svg>
          
          {/* Romantic text */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="font-playfair text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight"
            style={{
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            Anna, meu Amor!
          </motion.h1>
          
          {/* Subtle decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-6 sm:mt-8 flex gap-2"
          >
            <span className="text-white text-2xl sm:text-3xl md:text-4xl opacity-70">✨</span>
            <span className="text-white text-2xl sm:text-3xl md:text-4xl opacity-70">💜</span>
            <span className="text-white text-2xl sm:text-3xl md:text-4xl opacity-70">✨</span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;