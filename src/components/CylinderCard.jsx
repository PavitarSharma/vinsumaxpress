// CylinderCards.jsx
import { useState, useEffect } from "react";
import { packagingProducts } from "@/constants";

export default function CylinderCards({ activeIndex }) {
  const [currentIndex, setCurrentIndex] = useState(activeIndex || 0);
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
   setTimeout(() => setMounted(true), 100);
  }, []);

  useEffect(() => {
    if (activeIndex !== currentIndex) {
      setCurrentIndex(activeIndex);
    }
  }, [activeIndex]);
  
  return (
    <div
        className="flex items-center justify-center w-full h-full"
        style={{  WebkitFontSmoothing: "antialiased" }}>
        <div
            className="relative transition-transform duration-700"
            style={{
                backfaceVisibility: activeIndex === 0 ? "visible" : "hidden",
                transform: `rotateY(${ -((mounted ? currentIndex : -0.01) * (360 / packagingProducts.length))}deg)`,
                transformStyle: "preserve-3d",
                width: "400px",
                height: "500px",
            }}
        >
            {packagingProducts.map((card, i) => {
            const angle = (360 / packagingProducts.length) * i;
            const isActive = i === currentIndex;
            const radius = 300;

            return (
                <div
                key={card.id}
                className={`absolute w-full h-full rounded-5xl p-5 shadow-xl bg-white text-black transition-opacity duration-500 antialiased ${
                    isActive ? "opacity-100 card-3d-fix border-primary" : "opacity-0 pointer-events-none"
                }`}
                style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius + (isActive ? 20 : 0)}px) translateZ(0px)`,
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                }}
                >
                {/* <div className="text-xl antialiased glass-text2 text-center font-semibold mb-2">{card.label}</div> */}
                <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full"
                />
                {/* <p className="text-sm antialiased text-gray-700 mb-3">{card.description}</p>
                <ul className="text-sm antialiased list-disc pl-5 space-y-1 text-black">
                    {card.benefits.map((point, idx) => (
                    <li key={idx}>{point}</li>
                    ))}
                </ul> */}
                </div>
            );
            })}
        </div>
    </div>
  );
}
