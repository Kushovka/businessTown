import React from "react";
import { subLinkItems } from "../constants";

const SubLink = () => {
  return (
    <section className="bg-grey10 py-[30px]">
      <div className="container mx-auto md:px-5">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center sm:gap-[38px] gap-[10px]">
            <p className="2xl:text-lg lg:text-[14px] md:text-[12px] text-[16px] text-white font-medium">
              &#169; {new Date().getFullYear()} Estatein. All Rights Reserved.{" "}
            </p>
            <p className="2xl:text-lg lg:text-[14px] md:text-[12px] sm:text-[16px] text-[14px] text-white font-medium">Terms & Conditions</p>
          </div>
          <div className="flex-center 2xl:gap-[10px] lg:gap-[8px] md:gap-[6px] sm:gap-6 gap-4">
            {subLinkItems.map((item, index) => {
              const IconPath = item.icon;
              return (
                <div key={index} className="bg-grey08 hover:bg-grey15 transition-all duration-300 cursor-pointer 2xl:p-[14px] lg:p-[10px] md:p-[8px] sm:p-6 p-4 rounded-full">
                  <IconPath className="2xl:size-[24px] lg:size-[20px] md:size-[18px] sm:size-[32px] size-[26px] text-white" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubLink;
