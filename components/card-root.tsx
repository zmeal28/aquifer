import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

export type CardRootType = {
  className?: string;
  imageCard1?: string;
  descriptionCard1?: string;
  priceCard1?: string;

  /** Style props */
  propMixBlendMode?: CSSProperties["mixBlendMode"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
};

const CardRoot: NextPage<CardRootType> = ({
  className = "",
  imageCard1,
  propMixBlendMode,
  propMinWidth,
  descriptionCard1,
  propFlex,
  priceCard1,
}) => {
  const imageCard1IconStyle: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode,
    };
  }, [propMixBlendMode]);

  const descriptionBoxCard1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const descriptionCard1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start min-w-[370px] max-w-full [row-gap:20px] text-center text-lg text-yellow font-poppins mq850:flex-wrap mq850:min-w-full ${className}`}
    >
      <div className="flex-1 rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-darkseagreen flex flex-row items-start justify-start pt-3 px-[25px] pb-[13px] box-border min-w-[211px] max-w-full z-[1]">
        <div className="h-[300px] w-[325px] relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-darkseagreen hidden max-w-full" />
        <img
          className="h-[275px] w-[275px] relative object-cover mix-blend-darken z-[1]"
          loading="lazy"
          alt=""
          src={imageCard1}
          style={imageCard1IconStyle}
        />
      </div>
      <div
        className="w-[245px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-colors-white flex flex-col items-start justify-start py-[25px] pl-5 pr-4 box-border gap-[53px] min-w-[245px] z-[1] mq850:flex-1"
        style={descriptionBoxCard1Style}
      >
        <div className="w-[245px] h-[300px] relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-colors-white hidden" />
        <div className="self-stretch flex flex-col items-start justify-start gap-7">
          <div className="flex flex-row items-start justify-start py-0 px-[5px] font-fontawesome">
            <div className="flex flex-row items-start justify-start gap-[9px]">
              <div className="relative z-[1]"></div>
              <div className="relative z-[1]"></div>
              <div className="relative z-[1]"></div>
              <div className="relative text-left z-[1]"></div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 text-left text-sm text-colors-text">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-black z-[1]">
                Aquaguard
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 text-3xl text-colors-heading">
                <div
                  className="flex-1 relative leading-[32px] font-black z-[1] mq450:text-lg mq450:leading-[26px]"
                  style={descriptionCard1Style}
                >
                  {descriptionCard1}
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-5xl tracking-[2px] leading-[26px] uppercase font-black text-colors-heading text-right whitespace-nowrap z-[1] mq450:text-lgi mq450:leading-[21px]">
            {priceCard1}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-[9px] text-base text-colors-white font-fontawesome">
          <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
            <FormControl
              className="h-10 flex-1 font-poppins font-black text-base text-colors-heading z-[1]"
              variant="outlined"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "140px",
                height: "40px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "40px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "40px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "40px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "40px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select color="primary" disableUnderline displayEmpty />
              <FormHelperText />
            </FormControl>
            <div className="h-10 w-10 rounded-81xl bg-cornflowerblue flex flex-row items-start justify-start py-[9px] px-3 box-border z-[1]">
              <div className="h-10 w-10 relative rounded-81xl bg-cornflowerblue hidden" />
              <div className="relative leading-[22px] z-[1]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRoot;
