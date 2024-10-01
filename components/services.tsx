import type { NextPage } from "next";
import { useState } from "react";

type ServicesLayoutProps = {
  className?: string;
};

const ServiceCard = ({ title, description, imageSrc, bgColor, imageClassName }: {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
  imageClassName: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`w-full sm:w-[calc(33.333% - 1rem)] min-w-[280px] max-w-[350px] h-[500px] rounded-3xs ${bgColor} overflow-hidden flex flex-col items-center justify-between pt-[18px] pb-[38px] px-6 box-border transition-all duration-300 ease-in-out ${isHovered ? 'shadow-lg transform -translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex flex-col items-center gap-[29px]">
        <div className="w-full h-[200px] flex justify-center items-center">
          <img className={`object-contain max-h-full max-w-full ${imageClassName} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} src={imageSrc} alt={title} loading="lazy" />
        </div>
        <div className="w-full flex flex-col gap-[15px] text-center">
          <h3 className="m-0 text-xl tracking-[-0.5px] leading-[34px] font-black">{title}</h3>
          <p className="m-0 text-mini tracking-[-0.2px] leading-[29px] text-gray-300">{description}</p>
        </div>
      </div>
      <a href="#" className={`text-mini tracking-[-0.6px] leading-[32px] font-black flex items-center gap-1 mt-6 transition-colors duration-300 ${isHovered ? 'text-blue-500' : ''}`}>
        Learn more
        <img className={`w-3 h-[10.4px] transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} alt="" src="/tailright.svg" />
      </a>
    </div>
  );
};

const RandomDesignElement = ({ top, left, size, color, shape }: { top: string, left: string, size: string, color: string, shape: 'circle' | 'square' }) => (
  <div 
    className={`absolute ${top} ${left} ${size} ${color} ${shape === 'circle' ? 'rounded-full' : ''} opacity-20 animate-pulse`}
    style={{ animationDuration: `${Math.random() * 3 + 2}s` }}
  ></div>
);

const ServicesLayout: NextPage<ServicesLayoutProps> = ({ className = "" }) => {
  const services = [
    {
      title: "Water Filtration & Purification",
      description: "Advanced filtration systems to ensure clean and safe water for industrial, agricultural, and residential use.",
      imageSrc: "/3dfluencywater-1@2x.png",
      bgColor: "bg-darkturquoise",
      imageClassName: "",
    },
    {
      title: "Aquifer Recharge",
      description: "Sustainable solutions to replenish underground aquifers and enhance water security.",
      imageSrc: "/imagecard2@2x.png",
      bgColor: "bg-darkseagreen",
      imageClassName: "",
    },
    {
      title: "Water Sustainability Consulting",
      description: "Expert consulting to optimize water use and develop sustainable strategies for long-term resource management.",
      imageSrc: "/imagecard3@2x.png",
      bgColor: "bg-lightblue",
      imageClassName: "",
    },
  ];

  const designElements = [
    { top: 'top-10', left: 'left-10', size: 'w-16 h-16', color: 'bg-blue-300', shape: 'circle' as const },
    { top: 'top-3/4', left: 'left-1/4', size: 'w-20 h-20', color: 'bg-green-300', shape: 'square' as const },
    { top: 'top-1/2', left: 'right-20', size: 'w-12 h-12', color: 'bg-yellow-300', shape: 'circle' as const },
    { top: 'bottom-10', left: 'right-1/4', size: 'w-24 h-24', color: 'bg-purple-300', shape: 'square' as const },
  ];

  return (
    <section className={`self-stretch flex flex-col items-center justify-center py-10 px-5 text-center text-smi text-black-100 font-poppins relative overflow-hidden ${className}`}>
      {designElements.map((element, index) => (
        <RandomDesignElement key={index} {...element} />
      ))}
      <div className="w-full max-w-[1136px] flex flex-col items-center gap-20 relative z-10">
        <header className="w-full max-w-[737px] overflow-hidden">
          <h2 className="text-smi tracking-[1.63px] uppercase font-black mb-5">Our services</h2>
          <h1 className="text-[42px] tracking-[-1.2px] leading-[48px] font-black text-gray-200 mb-0">
            We provide innovative water management solutions tailored to meet your needs.
          </h1>
        </header>
        <div className="w-full flex flex-row flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesLayout;