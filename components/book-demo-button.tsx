import type { NextPage } from "next";

export type BookDemoButtonType = {
  className?: string;
};

const BookDemoButton: NextPage<BookDemoButtonType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-aliceblue flex flex-row items-start justify-start z-[2] text-center text-mid text-colors-white font-poppins ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-[11px] px-0 pb-[13.8px] relative whitespace-nowrap">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-royalblue-100" />
        <div className="flex-1 relative tracking-[-0.6px] leading-[32px] font-black z-[1]">
          Book Demo
        </div>
      </div>
    </div>
  );
};

export default BookDemoButton;
