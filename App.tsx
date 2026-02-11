import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Members from './components/Members';
import Letter from './components/Letter';
import Oracle from './components/Oracle';

const App: React.FC = () => {
  
  // Confetti effect on mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // @ts-ignore
        if (window.confetti) {
            // @ts-ignore
            window.confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            // @ts-ignore
            window.confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }
      }, 250);
    };
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="bg-deep-black min-h-screen text-white selection:bg-gold selection:text-black">
      <Hero />
      <Letter />
      <Members />
      <Oracle />
      
      <footer className="py-8 text-center text-gray-600 text-sm">
        <p>&copy; 2023 - {new Date().getFullYear()} Secret Society. Forever & Always.</p>
        <div className="mt-2 text-xs opacity-50">
          Created with ❤️ for the 2nd Anniversary
        </div>
      </footer>
    </div>
  );
};

export default App;