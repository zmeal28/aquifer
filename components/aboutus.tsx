import type { NextPage } from "next";
import MiddleDarkOutline from "./middle-dark-outline";
import MiddleDarkOutline1 from "./middle-dark-outline1";
import MiddleFill from "./middle-fill";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-[25px] pr-5 box-border max-w-full text-left text-smi text-tomato-100 font-poppins ${className}`}
    >
      <div className="w-[1110.4px] flex flex-col items-end justify-start gap-[137px] max-w-full mq450:gap-[17px] mq850:gap-[34px] mq1225:gap-[68px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
          <div className="w-[515px] overflow-hidden flex flex-col items-start justify-start pt-[54px] px-0 pb-0 box-border gap-9 max-w-full mq850:gap-[18px]">
            <div className="mt-[-56px] h-5 relative tracking-[1.63px] uppercase font-black inline-block shrink-0">
              About us
            </div>
            <h1 className="m-0 self-stretch relative text-17xl tracking-[-1.2px] leading-[48px] font-black font-[inherit] text-gray-200 shrink-0 mq450:text-3xl mq450:leading-[29px] mq850:text-10xl mq850:leading-[38px]">
              We provide innovative, sustainable water solutions for your
              success.
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start gap-[95px] max-w-full text-mid text-gray-400 font-gilroy-medium mq850:gap-6 mq1225:gap-[47px] mq1225:flex-wrap">
            <img
              className="w-[445px] relative max-h-full object-cover max-w-full mq1225:flex-1"
              loading="lazy"
              alt=""
              src="/1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[55px] box-border min-w-[370px] min-h-[677px] max-w-full mq450:min-w-full mq850:pb-9 mq850:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq850:gap-[50px]">
                <div className="self-stretch flex flex-row items-end justify-start gap-[41px] max-w-full mq850:gap-5 mq850:flex-wrap">
                  <div className="h-[377px] flex-1 relative min-w-[240px] max-w-full">
                    <img
                      className="absolute top-[45px] left-[0px] w-[318px] h-[332px] object-cover"
                      alt=""
                      src="/dots-left@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[262px] w-[107px] h-[109px] z-[1]"
                      alt=""
                      src="/decordots-1.svg"
                    />
                  </div>
                  <div className="h-[219px] w-40 flex flex-col items-start justify-start min-w-[160px] mq850:flex-1">
                    <img
                      className="self-stretch h-[167px] relative max-w-full overflow-hidden shrink-0 object-cover mq850:self-stretch mq850:w-auto"
                      loading="lazy"
                      alt=""
                      src="/3@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[490px] h-[145px] relative tracking-[-0.2px] leading-[29px] inline-block mix-blend-normal max-w-full">
                  At Aquifer Innovations, we are committed to providing
                  sustainable water management solutions that address the
                  world’s growing water challenges. Our expert team brings
                  innovative technologies and practical strategies to ensure
                  clean, reliable water supplies while protecting the
                  environment.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[148.5px] max-w-full text-23xl text-colors-heading mq450:gap-[19px] mq850:gap-[37px] mq1225:gap-[74px] mq1225:flex-wrap">
          <div className="w-[422.9px] flex flex-col items-start justify-start gap-[60.2px] min-w-[422.9px] max-w-full mq450:gap-[30px] mq850:min-w-full mq1225:flex-1">
            <div className="flex flex-row items-start justify-start py-0 pl-px pr-2 box-border max-w-full">
              <div className="w-[413.7px] flex flex-col items-start justify-start gap-[25px] max-w-full mq1225:flex-1">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.4px] leading-[52px] font-black font-[inherit] mq450:text-6xl mq450:leading-[31px] mq850:text-15xl mq850:leading-[42px]">
                  Get in Touch
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] box-border max-w-full text-base text-colors-text font-buttons-middle">
                  <div className="h-[52px] flex-1 relative leading-[26px] inline-block mix-blend-normal max-w-full">
                    We appreciate each customer and we are proud that 60%
                    of clients come back to work with us again.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[44.5px] max-w-full text-center text-lg text-royalblue-100 font-fontawesome mq450:gap-[22px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[21.3px] max-w-full">
                <div className="w-[325.2px] flex flex-col items-end justify-start max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[18.4px]">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="relative leading-[38px] shrink-0"></div>
                    </div>
                    <div className="w-[289px] relative leading-[28px] font-black font-poppins text-colors-heading text-left inline-block shrink-0 whitespace-nowrap">
                      +91 83909 60001
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16.6px] mt-[-2px]">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="relative leading-[38px] shrink-0"></div>
                    </div>
                    <a
                      className="h-14 flex-1 relative [text-decoration:underline] leading-[28px] font-black font-poppins text-colors-heading text-left inline-block shrink-0"
                      href="mailto:Contact@aquiferinnovations.com"
                      target="_blank"
                    >
                      Contact@aquiferinnovations.com
                    </a>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full mix-blend-normal"
                  loading="lazy"
                  alt=""
                  src="/line.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px] max-w-full text-left text-3xl text-colors-heading font-buttons-middle">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[7px] box-border max-w-full">
                  <div className="flex-1 relative leading-[32px] font-medium inline-block max-w-full mq450:text-lg mq450:leading-[26px]">
                    Find Us on Map
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full text-base text-colors-text font-gilroy-medium">
                  <div className="h-[52px] flex-1 relative leading-[26px] inline-block max-w-full">
                    S2, Shah Classic Moloca, Merces, Panaji, Goa 403005, India
                  </div>
                </div>
                <iframe
                  className="[border:none] self-stretch h-[230px] relative"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.8582675135067!2d73.88481677590738!3d15.492054054629246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbf1e753d9ba7%3A0xb8bab8de7c77defb!2sGera%E2%80%99s%20Imperium%20Premio!5e0!3m2!1sen!2sin!4v1727601845415!5m2!1sen!2sin"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[34.8px] min-w-[350px] max-w-full mq450:min-w-full mq850:gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[25.2px] max-w-full mq1225:flex-1">
                <h1 className="m-0 w-[414.7px] relative text-inherit tracking-[-0.4px] leading-[52px] font-black font-[inherit] inline-block max-w-full mq450:text-6xl mq450:leading-[31px] mq850:text-15xl mq850:leading-[42px]">
                  You Can Mail Us
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-base text-colors-text font-buttons-middle">
                  <div className="flex-1 relative leading-[26px] inline-block mix-blend-normal max-w-full">
                    We are always looking for a next great project.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-12 px-[57px] pb-16 relative gap-9 text-sm font-buttons-middle mq850:gap-[18px] mq850:pt-[31px] mq850:px-7 mq850:pb-[42px] mq850:box-border">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-royalblue-200" />
              <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                <b className="w-[71.9px] relative tracking-[2px] leading-[26px] uppercase inline-block z-[1]">
                  e-mail
                </b>
                <MiddleDarkOutline
                  propFlex="unset"
                  propMinWidth="unset"
                  propAlignSelf="stretch"
                  yourEmailPlaceholder="Your email"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                <b className="w-[92.4px] relative tracking-[2px] leading-[26px] uppercase inline-block z-[1]">
                  message
                </b>
                <MiddleDarkOutline1 />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                <b className="w-[57px] relative tracking-[2px] leading-[26px] uppercase inline-block z-[1]">
                  name
                </b>
                <div className="self-stretch flex flex-row items-start justify-start gap-[11.4px] mq450:flex-wrap">
                  <MiddleDarkOutline yourEmailPlaceholder="Your name" />
                  <MiddleFill signUp="Send" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
