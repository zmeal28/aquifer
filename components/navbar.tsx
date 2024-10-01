"use client";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import ButtonSolidStyle from "./button-solid-style";

const Navbar: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
        style={{ backgroundImage: "url('/bg@2x.png')" }}
      >
        <div className="max-w-[1440px] flex items-center justify-between gap-5 mx-auto py-10 px-8">
          {/* Logo Section */}
          <div className="w-[180px]">
            <img
              className="h-14 w-full object-contain"
              loading="lazy"
              alt="Aquifer Logo"
              src="/aquifer-logo-1@2x.png"
            />
          </div>

          {/* Navigation Links for Desktop (visible on medium screens and up) */}
          <nav className="nav-links">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <div
                key={item}
                className={`text-gray-200 font-open-sans font-light text-lg tracking-[-0.1px] leading-[26px] cursor-pointer transition-all duration-500 ease-in-out hover:text-royalblue-100 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 100 + 500}ms`,
                  marginRight: "30px", // Increased gap between options
                }}
              >
                {item}
              </div>
            ))}
          </nav>

          {/* Custom Button for Desktop (visible on medium screens and up) */}
          <div
            className={`button-container transition-all duration-1000 ease-in-out ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <ButtonSolidStyle />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="menu-icon">
            <button onClick={toggleSidebar} className="focus:outline-none">
              {/* Hamburger Icon */}
              <div className="space-y-1">
                <span className="block w-8 h-1 bg-white"></span>
                <span className="block w-8 h-1 bg-white"></span>
                <span className="block w-8 h-1 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <div
        className={`sidebar fixed inset-0 z-40 bg-black bg-opacity-75 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ paddingTop: '60px' }} // Ensure sidebar is not overlapped by the header
      >
        <div className="w-64 h-full bg-gray-900 p-8">
          <button onClick={toggleSidebar} className="mb-8 text-white">
            Close
          </button>
          <nav className="flex flex-col space-y-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <div
                key={item}
                className="text-white font-open-sans text-lg cursor-pointer"
              >
                {item}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Styles with Media Queries */}
      <style jsx>{`
        /* Desktop View */
        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px; /* Increased gap between options */
        }

        .button-container {
          display: block;
        }

        .menu-icon,
        .sidebar {
          display: none;
        }

        /* Mobile View */
        @media (max-width: 768px) {
          .nav-links,
          .button-container {
            display: none;
          }

          .menu-icon {
            display: block;
          }

          .sidebar {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
