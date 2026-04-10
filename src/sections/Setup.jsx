import React, { useEffect, useRef } from 'react';
import purchaseUomImg from "../assets/images/purchase_uom.webp";
import stockUomImg from "../assets/images/stock_uom.webp";
import sellUomImg from "../assets/images/sell_uom.webp";

const SetitUp = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adds the 'is-visible' class only when scrolled into view
            entry.target.classList.add('is-visible');
          } else {
            // Reset state if you want it to re-animate when scrolling back
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { 
        threshold: 0.1, // Trigger as soon as the top of the section enters
        rootMargin: "0px 0px -100px 0px" // Prevents immediate firing for a better feel
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-24 px-6 md:px-12 flex flex-col items-center justify-center font-sans overflow-hidden"
    >
      <style>{`
        /* 1. INITIAL STATE: Hidden and shifted left */
        .stagger-card {
          opacity: 0;
          transform: translateX(-100px);
          transition: 
            transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), 
            opacity 1.2s ease-out;
          will-change: transform, opacity;
        }

        /* 2. TRIGGERED STATE: Slide to position when parent has .is-visible */
        .is-visible .stagger-card:nth-child(1) {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.2s;
        }

        .is-visible .stagger-card:nth-child(2) {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.8s; /* 0.6s gap from first card */
        }

        .is-visible .stagger-card:nth-child(3) {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 1.4s; /* 0.6s gap from second card */
        }

        /* 3. HOVER EFFECT: Box shadow only */
        .card-container {
          transition: box-shadow 0.4s ease, transform 0.4s ease;
        }

        .card-container:hover {
          box-shadow: 0 30px 60px -12px rgba(17, 47, 47, 0.15);
          transform: translateY(-5px); /* Subtle lift for the shadow */
        }
      `}</style>
      
      <h2 className="text-3xl md:text-5xl font-semibold text-[#112F2F] text-center mb-16">
        How you set it up once per item
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        
        <div className="stagger-card card-container bg-[#9AD3FD] rounded-3xl overflow-hidden flex flex-col shadow-sm">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-[#112F2F] mb-2">Purchase UOM</h3>
            <p className="text-[#112F2F]/80 text-lg">How your vendor ships it</p>
          </div>
          <div className="mt-auto flex justify-center items-end px-4">
            <img src={purchaseUomImg} alt="Purchase UOM" className="w-full h-auto object-contain max-h-[220px]" />
          </div>
        </div>

        <div className="stagger-card card-container bg-[#E1DFFA] rounded-3xl overflow-hidden flex flex-col shadow-sm">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-[#112F2F] mb-2">Stock UOM</h3>
            <p className="text-[#112F2F]/80 text-lg">How you count it on the shelf</p>
          </div>
          <div className="mt-auto flex justify-center items-end px-4">
            <img src={stockUomImg} alt="Stock UOM" className="h-auto object-contain" />
          </div>
        </div>

        <div className="stagger-card card-container bg-[#128BE1] rounded-3xl overflow-hidden flex flex-col shadow-sm">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Sell UOM</h3>
            <p className="text-white/90 text-lg">How customers order it</p>
          </div>
          <div className="mt-auto flex justify-center items-end px-4">
            <img src={sellUomImg} alt="Sell UOM" className="w-full h-auto object-contain max-h-[220px]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SetitUp;