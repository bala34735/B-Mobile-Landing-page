import React from 'react';
import purchaseUomImg from "../assets/images/purchase_uom.webp";
import stockUomImg from "../assets/images/stock_uom.webp";
import sellUomImg from "../assets/images/sell_uom.webp";

const SetitUp = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 flex flex-col items-center justify-center font-sans overflow-hidden">
      
      {/* Section Title */}
      <h2 data-animate="fade-up" className="text-3xl md:text-5xl font-semibold text-[#112F2F] text-center mb-16 tracking-tight">
        How you set it up once per item
      </h2>

      {/* 3-Card Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto" data-animate="fade-up">
        
        {/* --- Card 1: Purchase UOM --- */}
        <div
          data-animate="fade-up"
          className="bg-[#9AD3FD] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl flex flex-col transition-shadow duration-300"
          style={{ transitionDelay: '50ms' }}
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-[#112F2F] mb-2">Purchase UOM</h3>
            <p className="text-[#112F2F]/80 text-lg">How your vendor ships it</p>
          </div>
          <div className="mt-auto flex justify-center items-end px-4">
            <img 
              src={purchaseUomImg} 
              alt="Purchase UOM" 
              className="w-full h-auto object-contain max-h-[220px]" 
            />
          </div>
        </div>

        {/* --- Card 2: Stock UOM --- */}
        <div
          data-animate="fade-up"
          className="bg-[#E1DFFA] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl flex flex-col transition-shadow duration-300"
          style={{ transitionDelay: '100ms' }}
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-[#112F2F] mb-2">Stock UOM</h3>
            <p className="text-[#112F2F]/80 text-lg">How you count it on the shelf</p>
          </div>
          <div className="mt-auto flex justify-center items-end px-4">
            <img 
              src={stockUomImg} 
              alt="Stock UOM" 
              className="h-auto object-contain" 
            />
          </div>
        </div>

        {/* --- Card 3: Sell UOM --- */}
        <div
          data-animate="fade-up"
          className="bg-[#128BE1] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl flex flex-col transition-shadow duration-300"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Sell UOM</h3>
            <p className="text-white/90 text-lg">How customers order it</p>
          </div>
          <div className="mt-auto flex justify-center items-end px-4">
            <img 
              src={sellUomImg} 
              alt="Sell UOM" 
              className="w-full h-auto object-contain max-h-[220px]" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SetitUp;