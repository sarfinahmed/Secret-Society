import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const startDate = new Date('2023-02-12');
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDays(diffDays);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rich-purple via-deep-black to-black">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
         {[...Array(20)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute bg-gold rounded-full blur-xl"
             initial={{ 
               x: Math.random() * window.innerWidth, 
               y: Math.random() * window.innerHeight,
               scale: Math.random() * 0.5 + 0.5,
               opacity: 0
             }}
             animate={{ 
               y: [null, Math.random() * -100],
               opacity: [0, 0.5, 0]
             }}
             transition={{ 
               duration: Math.random() * 5 + 5,
               repeat: Infinity,
               ease: "linear"
             }}
             style={{
               width: `${Math.random() * 100 + 50}px`,
               height: `${Math.random() * 100 + 50}px`,
             }}
           />
         ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4"
      >
        <h2 className="text-gold-light tracking-[0.3em] text-sm md:text-lg mb-4 font-sans uppercase">
          Est. 12-02-2023
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-2 gold-text-gradient">
          Secret Society
        </h1>
        <p className="text-2xl md:text-4xl font-script text-white/80 mb-8">
          2nd Anniversary Celebration
        </p>

        <div className="glass-card p-6 rounded-2xl max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
          <p className="text-gray-300 text-lg">
            Celebrating <span className="text-gold font-bold">{days}</span> days of mystery, friendship, and memories.
          </p>
        </div>
        
        <motion.div 
          className="mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;