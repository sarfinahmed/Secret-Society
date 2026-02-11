import React from 'react';
import { MEMBERS } from '../types';
import { motion } from 'framer-motion';

const Members: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 gold-text-gradient">
          The Society Members
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(255, 215, 0, 0.3)' }}
              className="glass-card p-4 rounded-xl text-center flex flex-col items-center justify-center min-h-[120px] group cursor-default relative overflow-hidden"
            >
               {/* Animated background on hover */}
               <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               
               <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center mb-3 text-gold text-xs font-bold font-serif border border-gold/30">
                 {index + 1}
               </div>
               
               <h3 className="text-lg font-medium text-gray-200 group-hover:text-gold transition-colors duration-300">
                 {member.name}
               </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;