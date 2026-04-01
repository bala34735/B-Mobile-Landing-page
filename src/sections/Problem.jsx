import React from 'react';

import AnimatedNetworkImg from "../assets/images/animated_network.webp";
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
  return (
    <section className="problem_wefix_sec py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        
        <h2 data-animate="fade-up" className="text-2xl md:text-3xl font-bold text-[#112F2F] text-center mb-8">
          The problem we fix
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemCards.map((card, index) => (
            <div key={index} className="flip-card w-full aspect-[16/6]">
              <div className="flip-card-inner">
                
                {/* FRONT SIDE - Solid white BG and reduced padding */}
                <div className="flip-card-front border border-[#23AE31] rounded-xl p-3 flex items-center gap-4 shadow-sm">
                  <div className="w-1/4 flex-shrink-0 flex justify-center">
                    <img 
                      src={card.frontImg} 
                      alt="Front" 
                      className="w-auto"
                    />
                  </div>
                  <div className="w-3/4 pr-2">
                    <p className="text-xs md:text-sm text-gray-600 mt-1 leading-snug">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* BACK SIDE - Solid white BG */}
                <div className="flip-card-back  border border-[#23AE31] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={card.backImg}
                    alt="Back"
                    className="w-full h-full object-contain p-3"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

        <br />   <br /> 

        <p className="mx-auto mt-8 mb-6v max-w-2xl px-4 text-center font-medium sm:px-6 lg:px-0">
          Multi-UOM tracking is the proven fix. It sets a base unit, links related units with conversions, and lets you choose the default unit for buying, stocking, picking, and selling.
        </p>


        <img         
          src={AnimatedNetworkImg}
          alt="Animated Network Diagram"
          className="w-full max-w-4xl mx-auto object-contain mt-12"
        />
        
        {/* <AnimatedNetworkSection /> */}


      </div>

    </section>
  );
};

export default ProblemFixerSection;