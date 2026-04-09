import React, { useEffect, useRef } from 'react';
import Lottie from "lottie-react";

// Import your Lottie JSON file
import multiUomAnimation from "../assets/js/multi-uom-tracking.json";

import problem1Front from "../assets/images/problem_fix_01.webp";
import problem2Front from "../assets/images/problem_fix_02.webp";
import problem3Front from "../assets/images/problem_fix_03.webp";
import problem4Front from "../assets/images/problem_fix_04.webp";

const problemCards = [
  {
    frontImg: problem1Front, 
    backImg: problem1Front,
    description: '"Case vs. each" mismatches: wrong picks, short trucks, odd credits.',
  },
  {
    frontImg: problem2Front, 
    backImg: problem2Front,
    description: "Book vs. shelf gaps:cycle counts balloon and month-end turns manual.",
  },
  {
    frontImg: problem3Front, 
    backImg: problem3Front,
    description: "Duplicate SKUs for the same item in different packs: confusion and double counting.",
  },
  {
    frontImg: problem4Front, 
    backImg: problem4Front,
    description: "Slower ops: people doing math at the dock, on the picker screen, and on the route sheet",
  },
];

const ProblemFixerSection = () => {
  const lottieContainerRef = useRef(null);
  const lottieRef = useRef(null); // Ref to control the Lottie instance

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 1. Add the CSS zoom class
            entry.target.classList.add('zoom-active');
            
            // 2. Reset and play the Lottie animation from the start
            if (lottieRef.current) {
              lottieRef.current.goToAndPlay(0, true);
            }
          } else {
            entry.target.classList.remove('zoom-active');
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (lottieContainerRef.current) {
      observer.observe(lottieContainerRef.current);
    }

    return () => {
      if (lottieContainerRef.current) observer.unobserve(lottieContainerRef.current);
    };
  }, []);

  return (
    /* Removed overflow-hidden to ensure drop-shadows aren't clipped at the section edges */
    <section className="problem_wefix_sec py-16 px-6 md:px-12 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <h2 data-animate="fade-up" className="text-2xl md:text-4xl font-bold text-[#112F2F] text-center mb-12">
          The problem we fix
        </h2>

        {/* Problem Cards Grid - Preserved Exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problemCards.map((card, index) => (
            <div key={index} className="flip-card w-full aspect-[16/6]">
              <div className="flip-card-inner">
                <div className="flip-card-front border border-[#23AE31]/40 rounded-2xl p-4 flex items-center gap-5 shadow-sm">
                  <div className="w-1/4 flex-shrink-0">
                    <img src={card.frontImg} alt="Problem visual" className="w-full object-contain" />
                  </div>
                  <div className="w-3/4">
                    <p className="text-sm md:text-base text-gray-700 font-medium leading-tight">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="flip-card-back bg-[#a5ebc3] border border-[#23AE31] rounded-2xl overflow-hidden shadow-md">
                   <img src={card.backImg} alt="Problem Detail" className="w-full h-full object-contain p-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Multi-UOM tracking is the proven fix. It sets a base unit, links related units with conversions, and lets you choose the default unit for buying, stocking, picking, and selling.
          </p>
        </div>

        {/* Lottie Animation Container Updates:
            1. Added 'overflow-visible' and 'p-12' so the shadow has space to bleed out.
            2. Added 'style={{ overflow: "visible" }}' to the Lottie component itself.
        */}
        <div 
          ref={lottieContainerRef} 
          className="zoom-container flex justify-center w-full max-w-4xl mx-auto overflow-visible p-12"
        >
          <Lottie 
            lottieRef={lottieRef} 
            animationData={multiUomAnimation} 
            loop={false} 
            autoplay={false} 
            style={{ overflow: 'visible' }}
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemFixerSection;