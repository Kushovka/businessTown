import React, { useState } from "react";
import Title from "./components/Title";
import { navExpItems } from "../../constants";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import clsx from "clsx";

const NavExp = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevItem = () => {
    setActiveIndex((prev) => (prev === 0 ? navExpItems.length - 1 : prev - 1));
  };

  const nextItem = () => {
    setActiveIndex((prev) => (prev === navExpItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="ourItWorks">
      <div className="container mx-auto flex flex-col justify-between md:pb-[150px] pb-[100px] gap-[80px] px-5 sm:px-0">
        <Title
          title="Navigating the Estatein Experience"
          text="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
        />

        {/* Desktop view */}
        <div className="hidden md:grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[70px]">
          {navExpItems.map((navExpItem, index) => (
            <div key={index} className="flex flex-col justify-center h-full">
              <div className="border-l border-purple60 flex items-center">
                <div className="px-[20px] py-[16px]">
                  <p className="text-[20px] text-white font-medium">
                    {navExpItem.num}
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden border border-grey15 border-l-purple60 border-t-purple60 p-[50px] flex-grow h-full rounded-r-[12px] rounded-bl-[12px] hover:shadow-[0px_0px_8px_8px_rgba(112,59,247,0.15)] cursor-pointer transition-all duration-300">
                <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-purple60 blur-[40px] rounded-full opacity-50 pointer-events-none z-0" />
                <h1 className="text-[26px] text-white font-semibold">
                  {navExpItem.title}
                </h1>
                <p className="text-[18px] text-grey60 font-medium">
                  {navExpItem.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="md:hidden flex flex-col items-center gap-[40px]">
          <div className="flex flex-col justify-center h-full w-full max-w-[500px]">
            <div className="border-l border-purple60 flex items-center">
              <div className="px-[20px] py-[16px]">
                <p className="text-[20px] text-white font-medium">
                  {navExpItems[activeIndex].num}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden border border-grey15 border-l-purple60 border-t-purple60 p-[30px] rounded-r-[12px] rounded-bl-[12px] hover:shadow-[0px_0px_8px_8px_rgba(112,59,247,0.15)] cursor-pointer transition-all duration-300">
              <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-purple60 blur-[40px] rounded-full opacity-50 pointer-events-none z-0" />
              <h1 className="text-[22px] text-white font-semibold">
                {navExpItems[activeIndex].title}
              </h1>
              <p className="text-[16px] text-grey60 font-medium">
                {navExpItems[activeIndex].text}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination & arrows */}
        <div className="flex items-center justify-between border-t-[1px] border-grey15 py-8">
          <h1 className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-white font-medium">
            {String(activeIndex + 1).padStart(2, "0")}{" "}
            <strong className="text-grey60 font-medium">
              of {String(navExpItems.length).padStart(2, "0")}
            </strong>
          </h1>
          <div className="flex items-center justify-center gap-[10px]">
            <button
              onClick={prevItem}
              className={clsx(
                "border-[1px] border-grey15 2xl:p-[14px] xl:p-[10px] lg:p-[8px] md:p-[7px] p-[10px] rounded-full",
                activeIndex === 0 ? "bg-grey08" : "bg-grey10"
              )}
            >
              <IoIosArrowBack
                className={clsx(
                  "text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] md:size-[18px] size-[20px]",
                  activeIndex === 0 ? "text-white/50" : "text-white"
                )}
              />
            </button>
            <button
              onClick={nextItem}
              className={clsx(
                "border-[1px] border-grey15 2xl:p-[14px] xl:p-[10px] lg:p-[8px] md:p-[7px] p-[10px] rounded-full",
                activeIndex === navExpItems.length - 1 ? "bg-grey08" : "bg-grey10"
              )}
            >
              <IoIosArrowForward
                className={clsx(
                  "text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] md:size-[18px] size-[20px]",
                  activeIndex === navExpItems.length - 1
                    ? "text-white/50"
                    : "text-white"
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavExp;
