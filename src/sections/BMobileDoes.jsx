import React, { useEffect, useState, useRef } from "react";
import BmobileBg from "../assets/images/b_mobile_section_bg.webp";
import sameDemand from "../assets/images/same_demand.webp";

const BMobiSolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Re-triggers the animation every time the section enters/leaves the viewport
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Smooth slide-up transition utility
  const animClass = () => 
    `transition-all duration-1000 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`;

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-16 px-6 md:px-16 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <div className={animClass()} style={{ transitionDelay: '100ms' }}>
            <div className="w-20 h-1 bg-[#10b981] mb-6 rounded-full"></div>
            <h2 className="text-4xl font-medium text-slate-900 leading-[1.2] tracking-tight">
              The same situation made <br />  right with 
              <span className="text-[#10b981]"> bMobile</span>
            </h2>
          </div>
        </header>

        {/* Main Grid Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: 60% Width */}
          <div className="lg:flex-[0_0_60%] flex flex-col gap-8">
            
            {/* Box 1: Large Image with mild rounding */}
            <div 
              className={`relative group overflow-hidden rounded-xl bg-gray-100 shadow-sm ${animClass()}`}
              style={{ transitionDelay: '200ms' }}
            >
              <img 
                src={BmobileBg}
                alt="Delivery" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity group-hover:opacity-40"></div>
              {/* <h3 className="absolute bottom-10 left-10 text-white text-5xl font-medium drop-shadow-md">
                bMobile
              </h3> */}
            </div>

            {/* Bottom Row inside the 60% column */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Setup Box */}
              <div 
                className={`flex-1 bg-[#0F5045] p-8 rounded-xl text-white shadow-sm hover:shadow-xl transition-all duration-500 ${animClass()}`}
                style={{ transitionDelay: '300ms' }}
              >
                <h4 className="text-[#1ECF6A] text-xl font-medium mb-6">
                  Setup for the item:
                </h4>
                <div className="space-y-3 text-sm font-normal">
                  <div className="flex pb-2"><span>Purchase UOM: Case 24</span> </div>
                  <div className="flex pb-2"><span>Stock UOM: Case</span> </div>
                  <div className="flex pb-2"><span>Sell UOM: Each & Pack 6 </span> </div>
                  <div className="flex">
                    Conversions: 1 Case = 24 Each. 1 Pack = 6 Each
                  </div> 
                </div>
              </div>

              {/* Same Demand Box */}
              <div 
                className={`flex-1 bg-[#F5D5B5] p-8 rounded-xl relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${animClass()}`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="relative z-10">
                  <h4 className="text-slate-900 text-xl font-medium mb-1">Same Demand</h4>
                  <p className="text-slate-700 text-sm mb-8">Presale: 3 Packs and 10 Each</p>
                </div>
                <img 
                  src={sameDemand}
                  alt="demand" 
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />  
              </div>
            </div>
          </div>

          {/* Right Column: 40% Width */}
          <div className="lg:flex-[0_0_40%] flex flex-col gap-8">
            
            <div 
              className={`flex-1 bg-[#0F5045] p-10 rounded-xl text-white shadow-sm hover:shadow-xl transition-all duration-500 ${animClass()}`}
              style={{ transitionDelay: '500ms' }}
            >
              <h4 className="text-[#1ECF6A] text-2xl font-medium mb-10">What bMobile does</h4>
              
              <ul className="space-y-4">
                {[
                  { title: "Presale totals are converted to Each for math.", sub: "3 Packs = 18 Each. Plus 10 Each = 28 Each" },
                  { title: "Pick Planner groups lines", sub: "Shows 1 Case (24) plus 4 loose for a single clean pull" },
                  { title: "Package Planner builds one carton and one small box", sub: "Drivers see the same units on the same units on the route sheet. " },
                  { title: "Purchase plan looks at reorder points in cases", sub: "If the shelf will drop below threshold after these picks, it recommends 1 Case on the PO" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-5 group/list">
                    <div className="w-1.5 h-1.5 bg-[#1ECF6A] shrink-0 mt-3 rounded-sm transition-transform duration-300 group-hover/list:scale-150"></div>
                    <div>
                      <p className="font-normal group-hover/list:text-[#1ECF6A] transition-colors">{item.title}</p>
                      <p className="font-normal group-hover/list:text-[#1ECF6A] mt-1">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div 
              className={`bg-[#1FBB62] p-8 rounded-xl text-white shadow-sm hover:shadow-xl transition-all duration-500 ${animClass()}`}
              style={{ transitionDelay: '600ms' }}
            >
              <h4 className="text-2xl font-medium mb-3">Result:</h4>
              <p className="text-base leading-relaxed font-normal opacity-90">
                The right product leaves the dock, shelf counts match the book, and credit calls are eliminated.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BMobiSolutionSection;