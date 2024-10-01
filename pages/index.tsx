import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import ServicesLayout from "../components/services";
import ProductLayout from "../components/products";
import FrameComponent2 from "../components/sponsors";
import FrameComponentCombined from "../components/features"; // Import the combined component
import FrameComponent3 from "../components/aboutus";
import Footer from "../components/footer";

const Frame: NextPage = () => {
  return (
    <div className="w-full relative bg-aliceblue overflow-hidden flex flex-col items-end justify-start gap-[42px] leading-[normal] tracking-[normal] mq450:gap-[21px]">
      <Navbar /> {/* Add the Navbar at the top */}
      <Hero /> {/* Hero section remains as is */}
      <ServicesLayout />
      <ProductLayout />
      <FrameComponent2 />
      <img
        className="w-[107px] h-[109px] absolute !m-[0] top-[2843px] left-[0px] z-[3]"
        alt=""
        src="/fill-1.svg"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[63px] box-border max-w-full mq850:pb-[27px]">
        <div className="h-[1176px] flex-1 overflow-hidden flex flex-col items-end justify-start gap-[77px] max-w-full">
          <FrameComponentCombined /> {/* Use the combined component here */}
        </div>
      </section>
      <FrameComponent3 />
      <Footer />
    </div>
  );
};

export default Frame;
