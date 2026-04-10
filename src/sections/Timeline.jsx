import React, { useState, useEffect } from 'react';
import bMobileTimeline from '../assets/images/where_it_goes.webp';

const WhereitGoesWrong = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSteps = 7;

  // Interval-based looping animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSteps);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  const timelineData = [
    "Sales rep enters 3 Packs of 6 for Store A",
    "Another rep enters 10 Each for Store B",
    "Warehouse reads the first line as 3 Each by mistake",
    "Pick list prints mixed units and no one notices",
    "Truck leaves short by 14 bottles",
    "Store A complains, Store B gets an odd credit",
    "Month end shows 2 cases on hand but the floor has only 1 case and 10 loose"
  ];

  return (
    <section className="w-full bg-[#D3F8E0] py-12 px-4 md:py-20 overflow-hidden">
      <style>{`
        @keyframes softGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(52, 211, 153, 0.5); transform: scale(1); }
          50% { box-shadow: 0 0 20px rgba(52, 211, 153, 0.8); transform: scale(1.2); }
        }
        .animate-glow { animation: softGlow 2s infinite ease-in-out; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2 data-animate="fade-up" className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">  
            Where it goes wrong in real life
          </h2>
          <p className="text-gray-600 text-lg">Item: Sparkling Tea 500 ml</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative border-l-2 border-dotted border-emerald-400 ml-4 space-y-10 pb-[40px]">
              
              <div className="relative pl-8">
                <p className="font-bold text-xl mb-4 text-gray-900"> Reality in the field: </p>
              </div>

              {timelineData.map((text, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 transition-all duration-500"
                >
                  {/* Dot Indicator */}
                  <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white transition-all duration-500
                    ${activeIndex === index 
                      ? 'bg-emerald-500 animate-glow z-10' 
                      : 'bg-emerald-300'}`}
                  ></div>
                  
                  <p className={`text-lg transition-colors duration-500 ${activeIndex === index ? 'text-gray-900 font-medium' : 'text-gray-700 opacity-70'}`}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative w-full flex justify-center">
            <img
              src={bMobileTimeline}
              alt="bMobile timeline"
              className="w-full max-w-4xl object-contain relative z-10"
            />
          </div>
        </div>

        <div className="space-y-4 mt-10">
          <div>
            <span className="bg-[#ef4444] text-white px-5 py-1.5 rounded-full text-sm font-semibold">
              What failed
            </span>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed">
            The system did not convert order quantity into right Units of Measure, 
            so <span className="font-semibold">"Pack"</span> and <span className="font-semibold">"Each"</span> were 
            treated like different items. The pick list was not unit-aware, so the team picked the wrong amount.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhereitGoesWrong;