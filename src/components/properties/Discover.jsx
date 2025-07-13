import React from "react";
import Title from "./components/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import Button2 from "../Button2";
import { homeFeatureds } from "../../constants";

const Discover = () => {
  return (
    <section id="portfolio">
      <div className="container mx-auto flex flex-col justify-between md:pb-[150px] sm:pb-[100px] pb-[50px] px-[25px]  gap-[80px]">
        <Title
          title="Discover a World of Possibilities"
          text="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
        />
        <div>
          <div
            className={clsx(
              "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pb-[50px] px-4"
            )}
          >
            {homeFeatureds.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "border-[1px] border-grey15 w-full rounded-[10px] space-y-[30px] 2xl:p-10 lg:p-[25px] md:p-[20px] p-[15px] overflow-hidden",
                  index === 2 ? "sm:hidden lg:block" : "",
                  index > 0 ? "hidden sm:block" : ""
                 )}
              >
                <img src={item.imgPath} alt={item.title} className="w-full" />
                <div className="border border-grey15 bg-grey10 rounded-[28px] py-[8px] xl:px-[14px] lg:px-[8px] md:px-[14px] sm:px-[8px] px-[6px] inline-flex items-center">
                  <h2 className="2xl:text-[16px] xl:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] whitespace-nowrap lg:text-[12px] text-white font-medium">
                    {item.mark}
                  </h2>
                </div>
                <div className="flex flex-col sm:items-start items-center justify-center gap-1">
                  <h1 className="2xl:text-2xl xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[20px] text-white font-semibold">
                    {item.title}
                  </h1>
                  <p className="2xl:text-lg xl:text-[15px] sm:text-[13px] text-[14px] text-grey60 font-medium">
                    {item.description}{" "}
                    <a className="text-white">... Read More</a>
                  </p>
                </div>

                <div className="flex flex-col xl:flex-row items-center justify-center md:justify-between 2xl:gap-[50px] xl:gap-[10px] lg:gap-[5px] md:gap-[20px] sm:gap-[15px] gap-[20px]">
                  <div className="flex flex-col justify-center">
                    <h2 className="2xl:text-lg lg:text-[14px] md:text-[12px] text-lg text-grey60 font-medium">
                      Price
                    </h2>
                    <h1 className="2xl:text-2xl xl:text-[20px] lg:text-[18px] md:text-[16px] text-2xl text-white font-semibold">
                      {item.price}
                    </h1>
                  </div>
                  <Button2 className={clsx("lg:text-[12px] lg:px-[10px] lg:py-[12px]")} text="View Property Details" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t-[1px] border-grey15 py-8 px-6">
            <div>
              <h1 className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-white font-medium">
                01{" "}
                <strong className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-grey60 font-medium">
                  of 60
                </strong>
              </h1>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
              <div className=" bg-grey08 border-[1px] border-grey15 2xl:p-[14px] xl:p-[10px] lg:p-[8px] sm:p-[7px] p-[10px] rounded-full">
                <IoIosArrowBack className="text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] sm:size-[18px] size-[20px] text-white/50" />
              </div>
              <div className=" bg-grey10 border-[1px] border-grey15 2xl:p-[14px] xl:p-[10px] lg:p-[8px] sm:p-[7px] p-[10px] rounded-full">
                <IoIosArrowForward className="text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] sm:size-[18px] size-[20px] text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
