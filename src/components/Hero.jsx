import heroBg from "../assets/images/hero_bg.png";

const Hero = () => {
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes glow {
      0%, 100% { filter: drop-shadow(0 0 8px rgba(74, 222, 128, 0.4)); }
      50% { filter: drop-shadow(0 0 15px rgba(96, 165, 250, 0.6)); }
    }

    /* Subtle Border Glow Pulse - simplified to start immediately */
    @keyframes borderPulse {
      0%, 100% { 
        border-color: rgba(74, 222, 128, 0.4); 
        box-shadow: 0 0 5px rgba(74, 222, 128, 0.1); 
      }
      50% { 
        border-color: rgba(74, 222, 128, 1); 
        box-shadow: 0 0 15px rgba(74, 222, 128, 0.4); 
      }
    }

    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out forwards;
    }

    .glow-gradient-text {
      background: linear-gradient(
        -45deg, 
        #4ade80, 
        #60a5fa, 
        #2dd4bf, 
        #60a5fa
      );
      background-size: 300% 300%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: 
        gradientFlow 6s ease infinite, 
        glow 4s ease-in-out infinite;
    }

    /* Box with a constant glowing pulse effect */
    .animated-border-box {
      border: 1px solid rgba(74, 222, 128, 0.4);
      animation: 
        fadeIn 0.5s ease-out forwards,
        borderPulse 6s ease-in-out infinite;
      animation-delay: 0.6s, 0.6s; /* Starts glowing as it fades in */
    }

    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
  `;

  return (
    <section
      className="relative bg-[#0f3d2e] text-white overflow-hidden hero_section"
      aria-label="Hero Section"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'contain' }}
    >
      <style>{animationStyles}</style>
      
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative max-w-4xl mx-auto px-4 py-24 text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 animate-fadeIn">
          <span className="glow-gradient-text inline-block">
            Inventory that speaks
          </span>{" "}
          your units at every stage
        </h1>

        <p className="text-gray-200 text-lg md:text-xl pt-2 mb-6 animate-fadeIn delay-300">
          When units are clear, mistakes drop, cycle counts shrink,
          <br className="hidden md:block" />
          and profit improves.
        </p>

        {/* Box with constant glow effect */}
        <div className="animated-border-box text-sm md:text-base text-gray-200 px-6 py-4 rounded-lg inline-block mb-8 backdrop-blur-sm">
          Buy in one unit, stock in another, sell in a third. We convert it for you so counts stay right and <br className="hidden md:block" /> orders move fast.
        </div>

        <div className="animate-fadeIn delay-300">
          <button className="text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-green-600/20 border border-green-400/50 request_demo_btn">
            Request a Demo
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;