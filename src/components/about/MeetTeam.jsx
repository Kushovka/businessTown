import React, { useState } from "react";
import Title from "./components/Title";
import { meetTeamItems } from "../../constants";
import Message from "./components/meetTeamComp/Message";

import icon from "/images/aboutTeam/Icon1.svg";
import clsx from "clsx";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const MeetTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = meetTeamItems.length;

  const prevItem = () => {
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextItem = () => {
    setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const currentItem = meetTeamItems[activeIndex];

  return (
    <section id="ourTeam">
      <div className="container mx-auto flex flex-col justify-between md:pb-[150px] pb-[100px] gap-[80px] px-5 sm:px-0">
        <Title
          title="Meet the Estatein Team"
          text="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        />

        <div className="flex justify-center">
          <div className="relative border border-grey15 p-[30px] rounded-[12px] flex flex-col items-center justify-center gap-[50px] group max-w-[300px] w-full">
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 bg-purple60 px-[26px] py-[14px] rounded-full group-hover:scale-105 transition-all duration-300">
              <img src={icon} alt="icon" className="icon" />
            </div>
            <img
              src={currentItem.imgPath}
              className="w-full"
              alt={currentItem.name}
            />
            <div className="text-center">
              <h1 className="2xl:text-[24px] xl:text-[20px] text-white font-semibold">
                {currentItem.name}
              </h1>
              <p className="2xl:text-[18px] xl:text-[16px] text-grey60 font-medium">
                {currentItem.post}
              </p>
            </div>
            <Message />
          </div>
        </div>

        <div className="flex items-center justify-between border-t-[1px] border-grey15 py-8">
          <div>
            <h1 className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-white font-medium">
              {String(activeIndex + 1).padStart(2, "0")}{" "}
              <strong className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-grey60 font-medium">
                of {String(totalItems).padStart(2, "0")}
              </strong>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            <button
              onClick={prevItem}
              className={clsx(
                "border-[1px] border-grey15 2xl:p-[14px] xl:p-[10px] lg:p-[8px] sm:p-[7px] p-[10px] rounded-full",
                activeIndex === 0 ? "bg-grey08" : "bg-grey10"
              )}
            >
              <IoIosArrowBack
                className={clsx(
                  "text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] sm:size-[18px] size-[24px]",
                  activeIndex === 0 ? "text-white/50" : "text-white"
                )}
              />
            </button>
            <button
              onClick={nextItem}
              className={clsx(
                "border-[1px] border-grey15 2xl:p-[14px] xl:p-[10px] lg:p-[8px] sm:p-[7px] p-[10px] rounded-full",
                activeIndex === totalItems - 1 ? "bg-grey08" : "bg-grey10"
              )}
            >
              <IoIosArrowForward
                className={clsx(
                  "text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] sm:size-[18px] size-[24px]",
                  activeIndex === totalItems - 1 ? "text-white/50" : "text-white"
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
