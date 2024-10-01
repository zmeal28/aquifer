import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MiddleFillType = {
  className?: string;
  signUp?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propFlex1?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const MiddleFill: NextPage<MiddleFillType> = ({
  className = "",
  propFlex,
  signUp,
  propFlex1,
  propDisplay,
  propMinWidth,
}) => {
  const middleFillStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const signUpStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propFlex1, propDisplay, propMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-3 pl-[30px] pr-[29px] bg-[transparent] flex flex-row items-start justify-start relative z-[1] ${className}`}
      style={middleFillStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl bg-royalblue-100" />
      <div
        className="relative text-lg leading-[26px] font-medium font-buttons-middle text-colors-white text-center z-[1]"
        style={signUpStyle}
      >
        {signUp}
      </div>
    </button>
  );
};

export default MiddleFill;
