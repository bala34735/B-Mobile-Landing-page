import React from "react";

import millCreekLogo from "../assets/images/mill-creek-logo-rounded.webp";
import oldViennaLogo from "../assets/images/old_vienna_logo.webp";
import rodriguezLogo from "../assets/images/rodrriguez_logo.webp";
import gabrielsBakeryLogo from "../assets/images/gabrielsbakery_logo.webp";
import glacierLogo from "../assets/images/glacier_logo.webp";
import lemateLogo from "../assets/images/lemate_logo.webp";
import yoloIceLogo from "../assets/images/yolo_ice_logo.webp";
import sinalloaLogo from "../assets/images/sinalloa_logo.webp";
import tacsWorksLogo from "../assets/images/tacs_works_logo.webp";
import kurzLogo from "../assets/images/kurz_logo.webp";

const row1Logos = [
  millCreekLogo,
  oldViennaLogo,
  rodriguezLogo,
  gabrielsBakeryLogo,
  glacierLogo,
];

const row2Logos = [
  lemateLogo,
  yoloIceLogo,
  sinalloaLogo,
  tacsWorksLogo,
  kurzLogo,
];

const LogoSlider = () => {
  return (
    <section className="bg-gray-100 py-16 overflow-hidden" aria-label="Customer Logos">
      <div className="text-center mb-12 px-4">
        <h2 data-animate="fade-up" className="text-2xl md:text-3xl font-bold text-gray-800">
          The Operators who live on the route choose bmobile
        </h2>
        <p className="text-gray-600 mt-2 font-medium">
          Real distribution. Real miles. Real results
        </p>
      </div>

      {/* Main Container with Gradient Mask */}
      <div className="relative mx-auto max-w-7xl space-y-4 px-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* Row 1: Left to Right Animation */}
        <div className="flex overflow-hidden group py-10"> 
          <div className="flex animate-loop-scroll-left hover:[animation-play-state:paused] gap-12 items-center">
            {/* Double the logos to ensure a seamless loop */}
            {[...row1Logos, ...row1Logos, ...row1Logos].map((logo, index) => (
              <img
                key={`row1-${index}`}
                src={logo}
                alt="client logo"
                className="h-14 w-auto object-contain transition-transform duration-500 hover:scale-150 cursor-pointer flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left Animation */}
        <div className="flex overflow-hidden group py-10">
          <div className="flex animate-loop-scroll-right hover:[animation-play-state:paused] gap-12 items-center">
            {/* Double the logos to ensure a seamless loop */}
            {[...row2Logos, ...row2Logos, ...row2Logos].map((logo, index) => (
              <img
                key={`row2-${index}`}
                src={logo}
                alt="client logo"
                className="h-14 w-auto object-contain transition-transform duration-500 hover:scale-150 cursor-pointer flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loop-scroll-left {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @keyframes loop-scroll-right {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-loop-scroll-left {
          animation: loop-scroll-left 40s linear infinite;
        }
        .animate-loop-scroll-right {
          animation: loop-scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoSlider;