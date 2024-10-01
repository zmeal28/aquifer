import { motion } from "framer-motion";
import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`self-stretch flex flex-col items-start justify-center pt-0 px-5 pb-4 box-border max-w-full text-center text-17xl text-gray-100 font-poppins ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start gap-[89px] max-w-full mq850:gap-[22px] mq1225:gap-11">
        {/* Heading Section */}
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 h-[54px] flex-1 relative text-inherit tracking-[-0.02em] font-black font-[inherit] inline-block max-w-full z-[1] mq450:text-3xl mq850:text-10xl">
            Our sponsors
          </h1>
          <img
            className="h-[31.4px] w-[273.1px] absolute !m-[0] right-[708.9px] bottom-[-22.4px] mq850:hidden"
            loading="lazy"
            alt=""
            src="/titleunderline.svg"
          />
        </div>

        {/* Sponsors Section */}
        <div className="self-stretch h-auto relative flex flex-row items-center justify-between flex-wrap md:flex-row sm:flex-col sm:space-y-2">
          {/* Sponsor 5 */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-[137px] h-[137px] object-cover mix-blend-darken"
            loading="lazy"
            alt=""
            src="/sponsor5@2x.png"
          />
          {/* Sponsor 4 */}
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[calc(100%_-_15px)] max-h-full w-[321px] object-cover"
            loading="lazy"
            alt=""
            src="/sponsor4@2x.png"
          />
          {/* Sponsor 3 */}
          <motion.img
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-[76px] h-[95px] object-cover"
            alt=""
            src="/sponsor3@2x.png"
          />
          {/* Sponsor 2 */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-[251px] h-[141px] object-cover"
            loading="lazy"
            alt=""
            src="/sponsor2@2x.png"
          />
          {/* Sponsor 1 */}
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-[163px] object-cover"
            alt=""
            src="/sponsor1@2x.png"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default FrameComponent2;
