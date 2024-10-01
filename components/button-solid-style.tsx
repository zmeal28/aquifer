import type { NextPage } from "next";

export type ButtonSolidStyleType = {
  className?: string;
};

const ButtonSolidStyle: NextPage<ButtonSolidStyleType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[209px] flex flex-row items-start justify-start z-[1] text-center text-mid text-colors-white font-poppins ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-[13px] px-0 pb-[11px] relative whitespace-nowrap">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-royalblue-100" />
        <a className="[text-decoration:none] h-[26px] flex-1 relative tracking-[-0.5px] font-normal text-[inherit] inline-block whitespace-nowrap z-[1]">
          Book Demo
        </a>
      </div>
    </div>
  );
};

export default ButtonSolidStyle;
