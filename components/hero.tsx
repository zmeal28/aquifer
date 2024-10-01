"use client";
import { useState, useEffect } from "react";
import type { NextPage } from "next";

const Hero: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="self-stretch flex flex-col items-stretch justify-start min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg@2x.png')" }}
    >
      <div className="flex-grow flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-8 flex flex-row items-center justify-between gap-16">
          <div
            className={`flex-1 max-w-[900px] transition-all duration-1000 ease-in-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <h1
              className={`text-[3rem] font-montserrat font-semibold text-gray-200 leading-tight mb-12 transition-all duration-1000 ease-in-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              Innovative Water Solutions for a Sustainable Future.
            </h1>
            <p
              className={`text-2xl text-gray-400 mb-12 max-w-[80%] transition-all duration-1000 ease-in-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              Aquifer Innovations offers cutting-edge water management solutions to preserve and sustain our most precious resource.
            </p>
            <button
              className={`bg-royalblue-100 text-white font-open-sans font-medium text-2xl px-12 py-6 rounded-lg transition-all duration-1000 ease-in-out hover:bg-royalblue-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1250ms" }}
            >
              Book Demo
            </button>
          </div>
          <div
            className={`w-[600px] h-[600px] relative transition-all duration-1000 ease-in-out ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "750ms" }}
          >
            <img
              className="rounded-full w-full h-full object-cover"
              alt="Hero Image"
              src="/oval@2x.png"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .w-full.max-w-[1440px] {
            flex-direction: column;
            gap: 12px;
          }

          .w-[600px] {
            max-width: 300px;
            height: 300px;
            order: 2;
          }

          .flex-1 {
            text-align: center;
            order: 1;
          }

          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1.25rem;
          }

          button {
            font-size: 1.5rem;
            padding: 0.75rem 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
