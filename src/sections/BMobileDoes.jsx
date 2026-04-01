import BmobileBg from "../assets/images/b_mobile_section_bg.webp";
import sameDemand from "../assets/images/same_demand.webp";

const BMobiSolutionSection = () => {
  // Keyframes for the entry animation
  const animationStyles = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `;

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 font-sans overflow-hidden">
      <style>{animationStyles}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex justify-between items-start mb-10">
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <div className="w-20 h-1 bg-[#10b981] mb-6"></div>
            <h2 data-animate="fade-up" className="text-4xl font-medium text-slate-900 leading-tight">
              The same situation made <br /> right with bMobile
            </h2>
          </div>
        </header>

        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Column: 60% Width */}
          <div className="lg:flex-[0_0_60%] flex flex-col gap-6">
            
            {/* Box 1: Large Image Placeholder */}
            <div className="relative group overflow-hidden aspect-video bg-gray-200 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <img 
                src={BmobileBg}
                alt="Delivery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
              <h3 className="absolute bottom-8 left-8 text-white text-4xl font-bold drop-shadow-md">
                bMobile
              </h3>
            </div>

            {/* Bottom Row of 3 boxes inside the 60% column */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Setup Box */}
              <div className="flex-1 bg-[#0F5045] p-6 text-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <h4 className="text-[#1ECF6A] font-bold text-xl mb-4">Setup for the item:</h4>
                <div className="space-y-2 text-sm opacity-90">
                  <p>Purchase UOM: Case 24</p>
                  <p>Stock UOM: Case</p>
                  <p>Sell UOM: Each and Pack 6</p>
                  <p className="pt-2 italic">Conversions: 1 Case = 24 Each. 1 Pack = 6 Each</p>
                </div>
              </div>

              {/* Same Demand Box (Tan) */}
              <div className="flex-1 bg-[#F5D5B5] p-6 relative overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-slate-900 font-bold text-xl mb-1">Same Demand</h4>
                <p className="text-slate-700 text-sm mb-8">Presale: 3 Packs and 10 Each</p>
                <img 
                  src={sameDemand}
                  alt="demand" 
                  className="object-contain"
                />  
                
              </div>
            </div>
          </div>

          
          <div className="lg:flex-[0_0_40%] flex flex-col gap-6">
            
            <div className="flex-1 bg-[#0F5045] p-8  text-white shadow-lg hover:shadow-2xl transition-all animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <h4 className="text-[#1ECF6A] font-bold text-2xl mb-8">What bMobile does</h4>
              
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 bg-[#1ECF6A] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="font-semibold">Presale totals are converted to Each for math.</p>
                    <p className="text-sm opacity-70 italic">3 Packs = 18 Each. Plus 10 Each = 28 Each</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 bg-[#1ECF6A] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="font-semibold">Pick Planner groups lines.</p>
                    <p className="text-sm opacity-70 italic">Shows 1 Case (24) plus 4 loose for a single clean pull</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 bg-[#1ECF6A] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="font-semibold">Package Planner builds one carton and one small box</p>
                    <p className="text-sm opacity-70">Drivers see the same units on the route sheet.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 bg-[#1ECF6A] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="font-semibold">Purchase plan looks at reorder points in cases</p>
                    <p className="text-sm opacity-70">If the shelf will drop below threshold after these picks, it recommends 1 Case on the PO</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#1FBB62] p-6 text-white shadow-md hover:shadow-2xl transition-all animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <h4 className="font-bold text-xl mb-2">Result:</h4>
              <p className="text-sm leading-relaxed opacity-95">
                the right product leaves the dock, the shelf count matches the book count, and there is no credit call later.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BMobiSolutionSection;