import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-royalblue-100 overflow-hidden flex flex-col items-center justify-start pt-[42px] px-5 pb-[44.6px] box-border gap-[34px] max-w-full text-left text-lg text-colors-white font-fontawesome mq850:gap-[17px] ${className}`}
    >
      <div className="w-[1337.5px] flex flex-row items-end justify-between max-w-full gap-5 mq850:flex-wrap mq850:justify-center">
        <img
          className="h-11 w-[139px] relative object-cover"
          loading="lazy"
          alt=""
          src="/aquifer-logo-1@2x.png"
        />
        <div className="w-[358.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[6.8px] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <a className="[text-decoration:none] w-[117.6px] relative text-base leading-[26px] font-gilroy-medium text-[inherit] inline-block shrink-0">
              Privacy Policy
            </a>
            <div className="w-[55px] flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border text-base font-gilroy-medium">
              <div className="self-stretch relative leading-[26px]">Terms</div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[3.8px] pb-0 pl-0 pr-px">
              <div className="relative leading-[26px] uppercase"></div>
            </div>
            <div className="w-[14.9px] flex flex-col items-start justify-start pt-[3.8px] pb-0 pl-0 pr-px box-border">
              <div className="relative leading-[26px] uppercase"></div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[3.8px] px-0 pb-0">
              <div className="relative leading-[26px] uppercase"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1336px] flex flex-col items-end justify-start gap-10 max-w-full text-mini font-poly mq850:gap-5">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full mix-blend-normal"
          loading="lazy"
          alt=""
          src="/divider.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq850:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[21.7px] max-w-full mq450:flex-wrap">
            <a className="[text-decoration:none] w-[62px] relative tracking-[-0.1px] leading-[13px] text-[inherit] inline-block shrink-0">
              Home
            </a>
            <a className="[text-decoration:none] w-[62px] relative tracking-[-0.1px] leading-[13px] text-[inherit] inline-block shrink-0">
              About
            </a>
            <div className="w-20 relative tracking-[-0.1px] leading-[13px] inline-block shrink-0">
              Services
            </div>
            <div className="w-[77px] relative tracking-[-0.1px] leading-[13px] inline-block shrink-0">
              Contact
            </div>
          </div>
          <div className="w-[333.7px] flex flex-col items-start justify-start pt-[7.4px] px-0 pb-0 box-border max-w-full text-right text-base font-gilroy-medium">
            <div className="self-stretch relative leading-[26px] mix-blend-normal">
              ©2021 by Aquifer Innovations.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
