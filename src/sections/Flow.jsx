import React from 'react';
import bMobileFlow from "../assets/images/b_mobile_flow.webp";

// --- 1. IMPORT YOUR LOCAL IMAGES HERE ---
import presaleIcon from "../assets/images/pre_sale.webp";
import purchaseIcon from "../assets/images/purchase_planning.webp";
import receivingIcon from "../assets/images/receiving.webp";
import pickIcon from "../assets/images/pick_planner.webp";
import packIcon from "../assets/images/pack_planner.webp";
import deliveryIcon from "../assets/images/delivery.webp";

const flowSteps = [
  { 
    title: "Presale", 
    desc: "A rep enters Case 24 for soda. If another rep adds 10 each, we keep both lines correct.", 
    icon: presaleIcon 
  },
  { 
    title: "Purchase planning", 
    desc: "Presale becomes a forecasted purchase. We switch to the vendor unit so the PO reads in the pack they accept, for example 1 case or 24 each.", 
    icon: purchaseIcon 
  },
  { 
    title: "Receiving", 
    desc: "When goods arrive, quantities land in the stock UOM you chose. If you stock by pack 6, we put it on the shelf as packs.", 
    icon: receivingIcon 
  },
  { 
    title: "Pick Planner", 
    desc: "All demand is converted into the pick unit and totaled in that unit. The picker sees full cases plus any loose pieces as one clear pick.", 
    icon: pickIcon 
  },
  { 
    title: "Pack Planner", 
    desc: "We switch again into the pack UOM that matches cartons or route totes, so packing is clean.", 
    icon: packIcon 
  },
  { 
    title: "Delivery", 
    desc: "Drivers see the right unit on the manifest. No last-minute math.", 
    icon: deliveryIcon 
  },
];

const UOMFlowSection = () => {
  return (
    <section className="uom_flow_section relative py-24 px-6 md:px-12 lg:px-20 bg-[#112F2F] font-sans flex items-center">
      <style>{`
        /* Custom smooth transitions using scale for hardware acceleration */
        .smooth-shrink {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease;
          transform-origin: left center;
        }
        
        .group:hover .smooth-shrink {
          transform: scale(0.9); /* Shrinks both title and text smoothly */
        }

        .icon-zoom {
          transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 10;
        }

        .group:hover .icon-zoom {
          transform: scale(1.8); /* Massive zoom to fill approx 3/4 of the card space */
        }
      `}</style>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 relative z-10">
          <h2 data-animate="fade-up" className="text-4xl md:text-5xl font-bold text-[#2ECC71] tracking-tight leading-tight">
            The bMobile way: UOM that runs<br className="hidden md:block"/> through the whole flow
          </h2>
          <p className="mt-5 text-xl text-white font-medium max-w-2xl mx-auto leading-normal">
            Plain promise: bMobile converts Units of Measure automatically at every step
          </p>
        </div>

        <img
          src={bMobileFlow}
          alt="bMobile UOM Flow Diagram"
          className="w-full max-w-4xl object-contain relative z-10 mb-20"
        />

        <div className="flow_cards grid grid-cols-1 md:grid-cols-3 border border-[#0F5045]/30 rounded-2xl overflow-hidden bg-[#DDFFF8] relative z-10">
          {flowSteps.map((step, index) => (
            <article 
              key={index} 
              className={`group p-8 border-[#0F5045]/10 
                ${index < 3 ? 'md:border-b' : ''} 
                ${index % 3 !== 2 ? 'md:border-r' : ''}
                hover:bg-white transition-all duration-700 ease-in-out cursor-default relative overflow-hidden`}
            >
              {/* Icon Container - Zooms to 3/4 size */}
              <div className="icon-zoom w-14 h-14 flex items-center justify-center mb-6">
                <img 
                  src={step.icon} 
                  alt={`${step.title} icon`} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title with Smooth Shrink */}
              <h3 className="smooth-shrink text-2xl font-bold text-[#112F2F] mb-2">
                {step.title}
              </h3>

              {/* Paragraph with Smooth Shrink */}
              <p className="smooth-shrink text-[#112F2F]/80 leading-relaxed text-sm md:text-base">
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UOMFlowSection;