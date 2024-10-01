import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MiddleDarkOutlineType = {
  className?: string;
  yourEmailPlaceholder?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const MiddleDarkOutline: NextPage<MiddleDarkOutlineType> = ({
  className = "",
  propFlex,
  propMinWidth,
  propAlignSelf,
  yourEmailPlaceholder,
}) => {
  const middleDarkOutlineStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start py-3 px-6 box-border relative min-w-[91px] z-[1] ${className}`}
      style={middleDarkOutlineStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl bg-colors-white border-royalblue-100 border-[2px] border-solid box-border mix-blend-normal" />
      <input
        className="w-[91px] [border:none] [outline:none] font-medium font-buttons-middle text-lg bg-[transparent] h-[26px] relative leading-[26px] text-colors-text text-left flex items-center p-0 z-[1]"
        placeholder={yourEmailPlaceholder}
        type="text"
      />
    </div>
  );
};

export default MiddleDarkOutline;
