import type { NextPage } from "next";

export type MiddleDarkOutline1Type = {
  className?: string;
};

const MiddleDarkOutline1: NextPage<MiddleDarkOutline1Type> = ({
  className = "",
}) => {
  return (
    <textarea
      className={`border-royalblue-100 border-[2px] border-solid bg-colors-white h-[170px] w-auto [outline:none] self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-[13px] px-[19px] font-buttons-middle font-medium text-lg text-colors-text z-[1] ${className}`}
      placeholder="Drop us a line"
      rows={9}
      cols={21}
    />
  );
};

export default MiddleDarkOutline1;
