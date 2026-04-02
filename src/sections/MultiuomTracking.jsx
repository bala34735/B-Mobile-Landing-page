import React from 'react';

// Local Image Imports
import leftTopIcon    from "../assets/images/left_top.png";
import leftBottomIcon from "../assets/images/left_btm.png";
import rightTopIcon   from "../assets/images/right_top.png";
import rightMiddleIcon from "../assets/images/right center.png";
import rightBottomIcon from "../assets/images/right_btm.png";
import centralUserImg from "../assets/images/multi_uom_tracking.png";

const SHIMMER_DUR = 2.5;
const JR = 30;

// gradient: x1/y1 = center (transparent), x2/y2 = badge (solid green)
const connections = [
  {
    id: 'pLT', delay: 0,
    path: 'M500,268 C440,245 340,198 148,155',
    bx: 148, by: 155, icon: leftTopIcon,
    gx1: 500, gy1: 268, gx2: 148, gy2: 155,
  },
  {
    id: 'pLB', delay: 0.5,
    path: 'M500,292 C440,315 340,362 148,405',
    bx: 148, by: 405, icon: leftBottomIcon,
    gx1: 500, gy1: 292, gx2: 148, gy2: 405,
  },
  {
    id: 'pRT', delay: 1.0,
    path: 'M500,268 C560,245 660,198 852,155',
    bx: 852, by: 155, icon: rightTopIcon,
    gx1: 500, gy1: 268, gx2: 852, gy2: 155,
  },
  {
    id: 'pRM', delay: 1.5,
    path: 'M500,280 H852',
    bx: 852, by: 280, icon: rightMiddleIcon,
    gx1: 500, gy1: 280, gx2: 852, gy2: 280,
  },
  {
    id: 'pRB', delay: 2.0,
    path: 'M500,292 C560,315 660,362 852,405',
    bx: 852, by: 405, icon: rightBottomIcon,
    gx1: 500, gy1: 292, gx2: 852, gy2: 405,
  },
];

const AnimatedNetworkSection = () => (
  <section className="relative py-16 px-4 overflow-hidden font-sans bg-white">
    <div className="max-w-5xl mx-auto">
      <svg viewBox="0 0 1000 560" className="w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* Shimmer orb glow */}
          <filter id="shimmerGlow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Per-connection gradient: nearly invisible at center → solid green at badge */}
          {connections.map(({ id, gx1, gy1, gx2, gy2 }) => (
            <linearGradient
              key={`grad-${id}`}
              id={`grad-${id}`}
              gradientUnits="userSpaceOnUse"
              x1={gx1} y1={gy1}
              x2={gx2} y2={gy2}
            >
              <stop offset="0%"   stopColor="#4ADE80" stopOpacity="0.04" />
              <stop offset="45%"  stopColor="#4ADE80" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="1"    />
            </linearGradient>
          ))}

          {/* Per-badge clip circles */}
          {connections.map(({ id, bx, by }) => (
            <clipPath key={`clip-${id}`} id={`clip-${id}`}>
              <circle cx={bx} cy={by} r={JR - 2} />
            </clipPath>
          ))}

          {/* Radial bg gradient */}
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="#EDFBF4" />
            <stop offset="100%" stopColor="#ffffff" />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="1000" height="560" fill="url(#bgGrad)" />

        {/* ── Hidden paths used by animateMotion ── */}
        {connections.map(({ id, path }) => (
          <path key={`ref-${id}`} id={id} d={path} fill="none" stroke="none" />
        ))}

        {/* ── Thick gradient strokes (the 5 curve shapes) ── */}
        {connections.map(({ id, path }) => (
          <path
            key={`stroke-${id}`}
            d={path}
            fill="none"
            stroke={`url(#grad-${id})`}
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* ── Single glowing shimmer orb per path ── */}
        {connections.map(({ id, delay }) => (
          <circle key={`shimmer-${id}`} r="7" fill="white" filter="url(#shimmerGlow)" opacity="0.9">
            <animateMotion dur={`${SHIMMER_DUR}s`} repeatCount="indefinite" begin={`${delay}s`}>
              <mpath href={`#${id}`} />
            </animateMotion>
          </circle>
        ))}

        {/* ── Badge icons at outer endpoints ── */}
        {connections.map(({ id, bx, by, icon }) => (
          <g key={`badge-${id}`}>
            {/* Pulsing halo */}
            <circle cx={bx} cy={by} r={JR + 14} fill="#22C55E" opacity="0.12">
              <animate attributeName="r"       values={`${JR+10};${JR+20};${JR+10}`} dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.18;0.07;0.18"               dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx={bx} cy={by} r={JR + 7}  fill="#22C55E" opacity="0.2" />
            {/* White border */}
            <circle cx={bx} cy={by} r={JR + 4}  fill="white" />
            {/* Green fill */}
            <circle cx={bx} cy={by} r={JR}       fill="#22C55E" />
            {/* Icon */}
            <image
              href={icon}
              x={bx - (JR - 2)} y={by - (JR - 2)}
              width={(JR - 2) * 2} height={(JR - 2) * 2}
              clipPath={`url(#clip-${id})`}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        ))}

        {/* ── Central dashed ring ── */}
        <circle cx="500" cy="280" r="112" fill="none" stroke="#BBF7D0" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />
        {/* ── Central teal circle ── */}
        <circle cx="500" cy="280" r="95" fill="#EBF9F4" stroke="#A7F3D0" strokeWidth="2" />

        {/* ── Central image ── */}
        <image href={centralUserImg} x="408" y="188" width="184" height="184" preserveAspectRatio="xMidYMid meet" />

        {/* ── Label ── */}
        <text x="500" y="412" textAnchor="middle" fontSize="16" fontWeight="700" fill="#112F2F" fontFamily="sans-serif">
          Multi UOM Tracking
        </text>
      </svg>
    </div>
  </section>
);

export default AnimatedNetworkSection;