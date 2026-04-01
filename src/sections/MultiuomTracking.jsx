import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// ----------------------------------------------------------------------
// 1. PLACEHOLDER IMAGE IMPORTS (REPLACE WITH YOUR ACTUAL PATHS)
// ----------------------------------------------------------------------
const centralUserImg = "https://bmobile.com/wp-content/uploads/2023/11/Multi-UOM-Tracking-Icon-v2.png"; // Placeholder
const leftTopIcon = "https://img.icons8.com/fluency-systems-regular/48/2ECC71/shopping-cart--v1.png"; // Placeholder
const leftBottomIcon = "https://img.icons8.com/material-outlined/48/2ECC71/box.png"; // Placeholder
const rightTopIcon = "https://img.icons8.com/ios-filled/50/2ECC71/delivery-truck.png"; // Placeholder
const rightMiddleIcon = "https://img.icons8.com/ios/50/2ECC71/money.png"; // Placeholder
const rightBottomIcon = "https://img.icons8.com/dotty/80/2ECC71/change-money.png"; // Placeholder

// GSAP requires registration
gsap.registerPlugin(MotionPathPlugin);

const AnimatedNetworkSection = () => {
  const scopeRef = useRef(null);

  useLayoutEffect(() => {
    // 2. Setup Animations with GSAP
    let ctx = gsap.context(() => {
      const paths = ['#leftTop', '#leftBottom', '#rightTop', '#rightMiddle', '#rightBottom'];
      const dotSelectors = ['.dotLT', '.dotLB', '.dotRT', '.dotRM', '.dotRB'];

      paths.forEach((pathId, index) => {
        const dots = dotSelectors[index];
        // Ensure path exists before animating
        const pathEl = document.querySelector(pathId);
        if(!pathEl) return;

        // Animate multiple dots on each path for a smooth flow effect
        // Staggered start times create the "stream"
        [...document.querySelectorAll(dots)].forEach((dot, dotIndex) => {
          gsap.to(dot, {
            duration: 5, // Total travel time
            repeat: -1, // Infinite loop
            ease: 'linear',
            motionPath: {
              path: pathId,
              align: pathId,
              alignOrigin: [0.5, 0.5],
              autoRotate: false,
            },
            delay: dotIndex * (5 / 4), // Stagger delay based on total duration and number of dots
          });
        });
      });
    }, scopeRef);

    // Clean up
    return () => ctx.revert();
  }, []);

  // 3. Helper to create glowing flow dots
  const FlowDots = ({ className, count = 4 }) => {
    return Array.from({ length: count }).map((_, i) => (
      <div key={i} className={`${className} absolute w-2 h-2 rounded-full bg-green-400 blur-sm z-10 opacity-70`} />
    ));
  };

  // 4. Helper for End Icon Container
  const EndIcon = ({ src, glowColor }) => (
    <div className={`relative flex items-center justify-center bg-white p-5 rounded-2xl w-[100px] h-[100px] shadow-lg group ${glowColor} border border-gray-100 hover:scale-105 transition-transform duration-300`}>
      <img src={src} alt="icon" className="max-w-full max-h-full object-contain" />
    </div>
  );

  return (
    <section ref={scopeRef} className="relative  py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-sans min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* ========================================================== */}
        {/* SVG BACKGROUND LAYER (Hidden Paths for Animation) */}
        {/* This SVG matches the structure from your image */}
        {/* ========================================================== */}
        <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full z-0 opacity-20" preserveAspectRatio="xMidYMid meet">
          
          {/* Gradients for Path Glowing */}
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#86EFAC" />
              <stop offset="100%" stopColor="#2ECC71" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
          </defs>
          
          {/* Main Visual Paths (Dotted/Dashed lines) */}
          <g fill="none" stroke="url(#flowGradient)" strokeWidth="3" strokeDasharray="6,8" filter="url(#glow)">
            {/* Left Top: M440,300 starts near center (slightly right), goes to L160,180 near icon */}
            <path id="leftTop" d="M480,300 C400,300 300,200 180,200" />
            
            {/* Left Bottom */}
            <path id="leftBottom" d="M480,300 C400,300 300,400 180,400" />
            
            {/* Right Top */}
            <path id="rightTop" d="M520,300 C600,300 700,200 820,200" />
            
            {/* Right Middle (Straight path) */}
            <path id="rightMiddle" d="M520,300 H820" />
            
            {/* Right Bottom */}
            <path id="rightBottom" d="M520,300 C600,300 700,400 820,400" />
          </g>

          {/* DOTTED LINE CIRCLES near center */}
          <circle cx="500" cy="300" r="100" fill="none" stroke="#BBF7D0" strokeWidth="2" strokeDasharray="4,4"/>
          <circle cx="500" cy="300" r="85" fill="#EBFDFA" fillOpacity="0.8"/>
        </svg>

        {/* ========================================================== */}
        {/* ANIMATING DOTS LAYER */}
        {/* ========================================================== */}
        <FlowDots className="dotLT" />
        <FlowDots className="dotLB" />
        <FlowDots className="dotRT" />
        <FlowDots className="dotRM" />
        <FlowDots className="dotRB" />

        {/* ========================================================== */}
        {/* LAYOUT LAYER (Images & Text on top) */}
        {/* ========================================================== */}
        <div className="grid grid-cols-10 items-center gap-12 relative z-20">
          
          {/* Left Column (2 Icons) */}
          <div className="col-span-10 md:col-span-2 flex flex-col justify-center gap-24 items-end">
            <EndIcon src={leftTopIcon} glowColor="hover:shadow-[0_0_30px_#A7F3D0]" />
            <EndIcon src={leftBottomIcon} glowColor="hover:shadow-[0_0_30px_#A7F3D0]" />
          </div>

          {/* Central Section */}
          <div className="col-span-10 md:col-span-6 flex flex-col items-center justify-center text-center">
            <div className="w-[180px] h-[180px] rounded-full flex items-center justify-center p-3 relative mb-6">
              <img src={centralUserImg} alt="user with laptop" className="w-full h-full object-contain relative z-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#112F2F] tracking-tight">
              Multi UOM Tracking
            </h3>
          </div>

          {/* Right Column (3 Icons) */}
          <div className="col-span-10 md:col-span-2 flex flex-col justify-center gap-16 items-start">
            <EndIcon src={rightTopIcon} glowColor="hover:shadow-[0_0_30px_#A7F3D0]" />
            <div className="h-[100px] flex items-center">
              <EndIcon src={rightMiddleIcon} glowColor="hover:shadow-[0_0_30px_#A7F3D0]" />
            </div>
            <EndIcon src={rightBottomIcon} glowColor="hover:shadow-[0_0_30px_#A7F3D0]" />
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default AnimatedNetworkSection;