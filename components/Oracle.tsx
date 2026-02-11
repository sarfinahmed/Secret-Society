import React, { useState } from 'react';
import { MEMBERS, Member } from '../types';
import { generateMemberWish } from '../services/gemini';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Oracle: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [prediction, setPrediction] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleGenerate = async (member: Member) => {
    setSelectedMember(member);
    setLoading(true);
    setPrediction("");
    setIsOpen(true);
    
    const text = await generateMemberWish(member.name);
    setPrediction(text);
    setLoading(false);
  };

  return (
    <section className="py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-gold mb-4">
          The Oracle's Wish
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Select a member to reveal a special AI-generated anniversary prediction from the Secret Society Oracle.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {MEMBERS.map((member) => (
            <button
              key={member.id}
              onClick={() => handleGenerate(member)}
              disabled={loading}
              className="px-4 py-2 rounded-full glass-card hover:bg-gold/20 hover:border-gold/50 transition-all text-sm font-medium text-gray-300 hover:text-white"
            >
              {member.name}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-xl mx-auto"
            >
              <div className="glass-card p-8 rounded-2xl border border-gold/30 shadow-[0_0_50px_rgba(255,215,0,0.1)]">
                {selectedMember && (
                  <h3 className="text-2xl font-serif text-gold mb-4">
                    For {selectedMember.name}
                  </h3>
                )}
                
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-4">
                    <SparklesIcon className="w-10 h-10 text-gold animate-spin" />
                    <p className="text-sm text-gray-400 tracking-widest animate-pulse">CONSULTING THE STARS...</p>
                  </div>
                ) : (
                  <div className="relative">
                    <SparklesIcon className="w-6 h-6 text-gold absolute -top-4 -left-2 opacity-50" />
                    {/* Changed font-script to font-sans and added italic/medium for better readability */}
                    <p className="text-lg md:text-xl font-sans font-medium italic leading-relaxed text-white/90">
                      "{prediction}"
                    </p>
                    <SparklesIcon className="w-6 h-6 text-gold absolute -bottom-4 -right-2 opacity-50" />
                  </div>
                )}
                
                {!loading && (
                   <button 
                     onClick={() => setIsOpen(false)}
                     className="mt-6 text-xs text-gray-500 hover:text-gold transition-colors uppercase tracking-widest"
                   >
                     Close Oracle
                   </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Oracle;