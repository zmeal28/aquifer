import { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // Import AOS styles

import Card from "./card";
import BookDemoButton from "./book-demo-button";

export type FrameComponentType = {
  className?: string;
};

const FrameComponentCombined: NextPage<FrameComponentType> = ({
  className = "",
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`w-full flex flex-col items-center justify-start py-0 px-5 box-border max-w-full text-left text-2xl text-gray-200 font-poppins ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-[60px] max-w-full">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div
            className="relative tracking-[1.63px] uppercase font-black text-gray-400"
            data-aos="fade-up"
          >
            Why choose us
          </div>
          <h1
            className="m-0 text-6xl text-gray-800 tracking-[-1.2px] leading-[48px] font-black inline-block max-w-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our clients trust us because we deliver sustainable, effective water
            solutions every time.
          </h1>
        </div>

        {/* Cards Section with a responsive layout */}
        <div className="flex flex-wrap justify-center gap-5 max-w-[900px]">
          {/* First Card */}
          <div className="w-full sm:w-1/2" data-aos="fade-up" data-aos-delay="400">
            <Card
              icon1Image="/icon1image@2x.png"
              card1Heading="Dedicated Water Experts"
              card1Description="Our team of specialists offers personalized water solutions with deep industry knowledge and expertise."
            />
          </div>

          {/* Second Card */}
          <div className="w-full sm:w-1/2" data-aos="fade-up" data-aos-delay="400">
            <Card
              propWidth="unset"
              propFlex="1"
              propMinWidth="266px"
              propBackgroundColor="rgba(104, 213, 133, 0.1)"
              icon1Image="/icon2image@2x.png"
              card1Heading="Sustainable Water Solutions"
              card1Description="We prioritize eco-friendly practices, providing solutions that are both effective and gentle on the environment."
            />
          </div>

          {/* Third Card */}
          <div className="w-full sm:w-1/2" data-aos="fade-up" data-aos-delay="600">
            <Card
              propWidth="unset"
              propFlex="1"
              propMinWidth="266px"
              propBackgroundColor="rgba(246, 75, 75, 0.1)"
              icon1Image="/icon3image@2x.png"
              card1Heading="Cutting-Edge Technology"
              card1Description="We employ the latest technology to ensure our water systems are efficient, reliable, and innovative."
            />
          </div>

          {/* Fourth Card */}
          <div className="w-full sm:w-1/2" data-aos="fade-up" data-aos-delay="600">
            <div className="h-[150px] flex-1 bg-aliceblue flex flex-row items-start justify-start gap-[30px]">
              <img
                className="h-[80px] w-[80px] object-contain"
                loading="lazy"
                alt=""
                src="/icon4@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[15.3px]">
                <div className="relative tracking-[-0.5px] leading-[32px] font-black text-gray-800">
                  On-Time Project Delivery
                </div>
                <div className="text-base tracking-[-0.2px] leading-[29px] text-gray-500">
                  We guarantee timely project completion, adhering to schedules
                  without sacrificing quality or performance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="flex flex-col items-center justify-start gap-6 mt-[60px]"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <h2 className="text-5xl tracking-[-1.2px] leading-[44px] font-black text-gray-800">
          Book a demo to know more.
        </h2>
        <div className="text-lg tracking-[-0.2px] leading-[32px] text-gray-500">
          Book a demo today to see how we can help you achieve effective and
          sustainable water management.
        </div>
        <BookDemoButton />
      </div>
    </div>
  );
};

export default FrameComponentCombined;





// import { NextPage } from "next";
// import { useEffect } from "react";
// import AOS from "aos"; // For animations
// import "aos/dist/aos.css"; // Import AOS styles

// import Card from "./card";
// import BookDemoButton from "./book-demo-button";

// export type FrameComponentType = {
//   className?: string;
// };

// const FrameComponentCombined: NextPage<FrameComponentType> = ({
//   className = "",
// }) => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div
//       className={`w-full flex flex-col items-center justify-start py-0 px-5 box-border max-w-full text-left text-2xl text-gray-200 font-poppins ${className}`}
//     >
//       <div className="flex flex-col items-center justify-center gap-[60px] max-w-full">
//         {/* Heading Section */}
//         <div className="flex flex-col items-center justify-center gap-4 text-center">
//           <div
//             className="relative tracking-[1.63px] uppercase font-black text-gray-400"
//             data-aos="fade-up"
//           >
//             Why choose us
//           </div>
//           <h1
//             className="m-0 text-6xl text-gray-800 tracking-[-1.2px] leading-[48px] font-black inline-block max-w-full"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Our clients trust us because we deliver sustainable, effective water
//             solutions every time.
//           </h1>
//         </div>

//         {/* Cards Section with a fixed 2x2 layout */}
//         <div className="flex flex-wrap justify-center gap-[30px] max-w-[900px]">
//           {/* First Card */}
//           <div className="w-[calc(50%-15px)]" data-aos="fade-up" data-aos-delay="400">
//             <Card
//               icon1Image="/icon1image@2x.png"
//               card1Heading="Dedicated Water Experts"
//               card1Description="Our team of specialists offers personalized water solutions with deep industry knowledge and expertise."
//             />
//           </div>

//           {/* Second Card */}
//           <div className="w-[calc(50%-15px)]" data-aos="fade-up" data-aos-delay="400">
//             <Card
//               propWidth="unset"
//               propFlex="1"
//               propMinWidth="266px"
//               propBackgroundColor="rgba(104, 213, 133, 0.1)"
//               icon1Image="/icon2image@2x.png"
//               card1Heading="Sustainable Water Solutions"
//               card1Description="We prioritize eco-friendly practices, providing solutions that are both effective and gentle on the environment."
//             />
//           </div>

//           {/* Third Card */}
//           <div className="w-[calc(50%-15px)]" data-aos="fade-up" data-aos-delay="600">
//             <Card
//               propWidth="unset"
//               propFlex="1"
//               propMinWidth="266px"
//               propBackgroundColor="rgba(246, 75, 75, 0.1)"
//               icon1Image="/icon3image@2x.png"
//               card1Heading="Cutting-Edge Technology"
//               card1Description="We employ the latest technology to ensure our water systems are efficient, reliable, and innovative."
//             />
//           </div>

//           {/* Fourth Card */}
//           <div className="w-[calc(50%-15px)]" data-aos="fade-up" data-aos-delay="600">
//             <div className="h-[150px] flex-1 bg-aliceblue flex flex-row items-start justify-start gap-[30px]">
//               <img
//                 className="h-[80px] w-[80px] object-contain"
//                 loading="lazy"
//                 alt=""
//                 src="/icon4@2x.png"
//               />
//               <div className="flex-1 flex flex-col items-start justify-start gap-[15.3px]">
//                 <div className="relative tracking-[-0.5px] leading-[32px] font-black text-gray-800">
//                   On-Time Project Delivery
//                 </div>
//                 <div className="text-base tracking-[-0.2px] leading-[29px] text-gray-500">
//                   We guarantee timely project completion, adhering to schedules
//                   without sacrificing quality or performance.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action Section */}
//       <div
//         className="flex flex-col items-center justify-start gap-6 mt-[60px]"
//         data-aos="fade-up"
//         data-aos-delay="800"
//       >
//         <h2 className="text-5xl tracking-[-1.2px] leading-[44px] font-black text-gray-800">
//           Book a demo to know more.
//         </h2>
//         <div className="text-lg tracking-[-0.2px] leading-[32px] text-gray-500">
//           Book a demo today to see how we can help you achieve effective and
//           sustainable water management.
//         </div>
//         <BookDemoButton />
//       </div>
//     </div>
//   );
// };

// export default FrameComponentCombined;
