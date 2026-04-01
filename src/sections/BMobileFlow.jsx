import React, { useState, useEffect, useRef } from 'react';

import warehouseIcon from "../assets/images/ware_house_icon.webp";
import inventoryIcon from "../assets/images/inventory_icon.webp";
import ordersIcon from "../assets/images/orders_icon.webp";
import routeIcon from "../assets/images/route_icon.webp";
import billingIcon from "../assets/images/billing_icon.webp";
import customerIcon from "../assets/images/happy_customer_icon.webp";

const BmobileFlowLoop = () => {
  const indicatorRef = useRef(null);
  const pathRef = useRef(null);
  
  const [activeZooms, setActiveZooms] = useState({
    warehouse: false, inventory: false, orders: false,
    route: false, billing: false, customer: false
  });

  // Pill shape path definition
  const pathData = "M 250,100 L 750,100 A 150,150 0 0 1 750,400 L 250,400 A 150,150 0 0 1 250,100 Z";

  useEffect(() => {
    const path = pathRef.current;
    const indicator = indicatorRef.current;
    if (!path || !indicator) return;

    const length = path.getTotalLength();
    let animationId;
    let progress = 0;
    const speed = 0.0008; 

    const animate = () => {
      progress += speed;
      if (progress > 1) progress = 0;

      const point = path.getPointAtLength(progress * length);
      const nextPoint = path.getPointAtLength((progress + 0.01) % 1 * length);
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

      indicator.setAttribute("transform", `translate(${point.x}, ${point.y}) rotate(${angle})`);

      setActiveZooms({
        warehouse: (progress > 0.04 && progress < 0.08),
        inventory: (progress > 0.20 && progress < 0.24),
        orders:    (progress > 0.36 && progress < 0.40), 
        route:     (progress > 0.52 && progress < 0.56),
        billing:   (progress > 0.68 && progress < 0.72),
        customer:  (progress > 0.84 && progress < 0.88), 
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Responsive Icon Sizes
  const getIconClasses = (isActive) => 
    `w-[55px] h-[55px] md:w-[90px] md:h-[90px] rounded-full flex items-center justify-center shadow-lg transition-all duration-700 ease-in-out z-20 overflow-hidden 
    ${isActive ? 'scale-110 md:scale-125 shadow-[0_0_30px_rgba(34,197,94,0.6)] border-green-400' : 'scale-100'}`;

  // Responsive Label Positioning
  const labelClasses = "absolute text-[10px] md:text-lg font-bold text-[#112F2F] tracking-tight whitespace-nowrap transition-all duration-500";

  return (
    <section className="bmobile_flow_sec relative py-12 md:py-24 px-4 flex items-center justify-center bg-[#E4ECFF]  overflow-hidden">
      {/* Container uses aspect-ratio to keep absolute elements in sync with SVG.
          On mobile, we slightly increase the aspect-ratio to prevent squishing.
      */}
      <div className="w-full max-w-5xl relative aspect-[1000/650] md:aspect-[1000/500]">

        <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="xMidYMid meet">
          <path 
            ref={pathRef}
            d={pathData}
            fill="none" 
            stroke="#000000" 
            strokeWidth="2" 
            strokeLinecap="round"
          />

          <g ref={indicatorRef}>
            <rect 
              x="-20" 
              y="-4" 
              width="50" 
              height="8" 
              rx="6" 
              fill="#8AD987" 
              className="drop-shadow-md"
            />
          </g>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-4">
          <h2 data-animate="fade-up" className="md:text-5xl font-black text-[#112F2F] mb-1 md:mb-4">
            How Work Flows Through <br className="hidden md:block"/> bMobile
          </h2>
          <p className="md:text-xl sub_title">
            Every step updates the next
          </p>
        </div>
        
        {/* Warehouse */}
        <div className="absolute left-[35%] top-[20%] -translate-x-1/2 -translate-y-1/2">
          <span className={`${labelClasses} -top-7 md:-top-12 left-1/2 -translate-x-1/2`}>Warehouse</span>
          <div className={`${getIconClasses(activeZooms.warehouse)} bg-[#BBDAFF]`}>
             <img src={warehouseIcon} alt="warehouse" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          </div>
        </div>

        {/* Inventory */}
        <div className="absolute left-[65%] top-[20%] -translate-x-1/2 -translate-y-1/2">
          <span className={`${labelClasses} -top-7 md:-top-12 left-1/2 -translate-x-1/2`}>Inventory</span>
          <div className={`${getIconClasses(activeZooms.inventory)} bg-[#D6DEFF]`}>
            <img src={inventoryIcon} alt="inventory" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          </div>
        </div>

        {/* Orders */}
        <div className="absolute left-[92%] md:left-[90%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center">
          <div className={`${getIconClasses(activeZooms.orders)} bg-[#8AD987]`}>
            <img src={ordersIcon} alt="orders" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          </div>
          <span className={`${labelClasses} left-16 md:left-28`}>Orders</span>
        </div>

        {/* Route */}
        <div className="absolute left-[65%] top-[80%] -translate-x-1/2 -translate-y-1/2">
          <div className={`${getIconClasses(activeZooms.route)} bg-[#FFC8BB]`}>
            <img src={routeIcon} alt="route" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          </div>
          <span className={`${labelClasses} top-16 md:top-28 left-1/2 -translate-x-1/2`}>Route</span>
        </div>

        {/* Billing */}
        <div className="absolute left-[35%] top-[80%] -translate-x-1/2 -translate-y-1/2">
          <div className={`${getIconClasses(activeZooms.billing)} bg-[#8AD987]`}>
            <img src={billingIcon} alt="billing" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          </div>
          <span className={`${labelClasses} top-16 md:top-28 left-1/2 -translate-x-1/2`}>Billing</span>
        </div>

        {/* Happy Customer */}
        <div className="absolute left-[8%] md:left-[10%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center">
          <span className={`${labelClasses} right-16 md:right-28`}>Happy Customer</span>
          <div className={`${getIconClasses(activeZooms.customer)} bg-[#FFFFFF]`}>
            <img src={customerIcon} alt="customer" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BmobileFlowLoop;