import React from 'react';
import accuracyIcon from "../assets/images/accuracy.webp";
import speedIcon from "../assets/images/speed.webp";
import purchasingIcon from "../assets/images/purchasing.webp";
import cycleIcon from "../assets/images/cycle_counts.webp";

const DayOneBenefits = () => {
  const benefits = [
    {
      title: "Accuracy",
      desc: "The right unit appears on the right screen. Errors drop.",
      image: accuracyIcon,
      alt: "Accuracy target icon"
    },
    {
      title: "Speed",
      desc: "Receiving, picking and packing move faster with automatic conversion.",
      image: speedIcon,
      alt: "Speedometer performance icon"
    },
    {
      title: "Clean purchasing",
      desc: "POs match vendor packs. No odd leftovers.",
      image: purchasingIcon,
      alt: "Clean purchasing shopping cart icon"
    },
    {
      title: "Shorter cycle counts",
      desc: "Accounting stock stays close to physical stock.",
      image: cycleIcon,
      alt: "Shorter cycle counts warehouse box icon"
    }
  ];

  return (
    <section className="day_one_benefits_sec py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 data-animate="fade-up" className="text-3xl font-black text-[#112F2F] text-center mb-12 tracking-tight">
          What you get on day one
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              data-animate="fade-up"
              className={`group p-10 rounded-3xl border-2 border-green-500 bg-white text-center flex flex-col items-center hover:border-transparent transition-all duration-300 cursor-default`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-50 flex items-center justify-center mb-8 group-hover:bg-green-100 transition-colors duration-300">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  loading="lazy" 
                />
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold text-[#112F2F] mb-4">
                {item.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayOneBenefits;