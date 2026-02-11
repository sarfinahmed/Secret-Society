import React from 'react';
import { motion } from 'framer-motion';

const Letter: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-10 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 md:p-16 rounded-lg relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
        
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-gold-light">
          Dear Society,
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-200 text-center">
          <p>
            Aaj theke thik 2 bochor age, <span className="text-gold font-semibold">12th February 2023</span>-e, amader ei chotto poribarer jatra shuru hoyechilo. 
            "Secret Society" shudhu ekta Instagram group na, eta amader emotion.
          </p>
          <p>
            Koto raat jaga kotha, koto funny moments, ar koto sukher-dukher smriti amra eksathe share korechi. 
            Amader majhe hoyto onek durutto, kintu moner dik theke amra sobai onek kache.
          </p>
          <p>
            Ajker ei dine, asha kori amader bondhutto airokom e okhunno thakbe sarajibon. 
            We are not just friends, we are a family.
          </p>
          <p className="font-script text-3xl pt-6 text-gold">
            Happy 2nd Anniversary!
          </p>
        </div>

        <div className="mt-10 flex justify-center">
            <div className="w-24 h-1 bg-gold rounded-full opacity-50"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Letter;