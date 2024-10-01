import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CardType = {
  className?: string;
  icon1Image?: string;
  card1Heading?: string;
  card1Description?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Card: NextPage<CardType> = ({
  className = "",
  propWidth,
  propFlex,
  propMinWidth,
  propBackgroundColor,
  icon1Image,
  card1Heading,
  card1Description,
}) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const firstWhyChooseUsIconBgStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`h-[129px] flex-1 bg-aliceblue overflow-hidden flex flex-row items-start justify-start pt-[5.8px] px-0 pb-[47.1px] box-border gap-[30px] min-w-[266px] max-w-full z-[2] text-left text-2xl text-gray-200 font-poppins ${className}`}
      style={card1Style}
    >
      <div className="h-[76.1px] w-[79px] relative">
        <div
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-mediumblue mix-blend-normal"
          style={firstWhyChooseUsIconBgStyle}
        />
        <img
          className="absolute top-[22.2px] left-[22px] w-[35px] h-[35px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src={icon1Image}
        />
      </div>
      <div className="mt-[-7.8px] flex-1 flex flex-col items-start justify-start gap-[15.3px]">
        <div className="relative tracking-[-0.5px] leading-[32px] font-black mq450:text-mid mq450:leading-[26px]">
          {card1Heading}
        </div>
        <div className="self-stretch h-[83.8px] relative text-mini tracking-[-0.2px] leading-[29px] font-gilroy-regular text-gray-400 inline-block shrink-0 mix-blend-normal">
          {card1Description}
        </div>
      </div>
    </div>
  );
};

export default Card;
