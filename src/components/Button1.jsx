import clsx from "clsx";
import React from "react";

const Button1 = ({ text, className }) => {
  return (
    <div>
      <button className={clsx("border-[1px] border-grey15 bg-grey08 xl:py-[18px] xl:px-6 lg:py-[14px] lg:px-[20px] md:py-[12px] md:px-[18px] sm:py-[12px] sm:px-[18px] py-[12px] px-[18px] rounded-[10px] text-white xl:text-lg lg:text-[16px] sm:text-[12px] font-medium hover:bg-grey10 transition-all duration-300", className)}>
        {text}
      </button>
    </div>
  );
};

export default Button1;
