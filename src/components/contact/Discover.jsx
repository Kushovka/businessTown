import React from "react";
import Title from "./components/Title";
import Button1 from "../Button1";
import { discoverItems } from "../../constants";
import Button2 from "../Button2";
import clsx from "clsx";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Discover = () => {
  return (
    <section id="offices">
      <div className="container mx-auto flex flex-col md:pb-[150px] sm:pb-[100px] pb-[50px] pt-[50px] px-[25px] lg:gap-[80px] md:gap-[30px] sm:gap-[50px] gap-[35px]">
        <Title
          title="Discover Our Office Locations"
          text="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
        />
        <div className="space-y-[50px]">
          <div className="inline-flex gap-[10px] bg-grey10 p-[10px] rounded-[12px]">
            <Button1 text="All" />
            <Button1 text="Regional" />
            <Button1 text="International" />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-[30px]">
            {discoverItems.map((discoverItem, index) => (
              <div
                key={index}
                className={clsx(
                  "border border-grey15 rounded-[12px] p-[50px] space-y-[30px] w-full",
                  index === 1 ? "hidden md:block" : ""
                )}
              >
                <div className="w-full flex flex-col gap-[12px]">
                  <h2 className="lg:text-[18px] md:text-[16px] text-white font-medium">
                    {discoverItem.title}
                  </h2>
                  <h1 className="xl:text-[30px] lg:text-[24px] md:text-[20px] sm:text-[24px] text-[20px] 2xl:whitespace-nowrap text-white font-semibold">
                    {discoverItem.loc}
                  </h1>
                  <p className="2xl:text-[18px] sm:text-[16px] text-[14px] text-grey60 font-medium">
                    {discoverItem.text}
                  </p>
                </div>
                <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 w-full gap-[10px]">
                  {discoverItem.containers.map((container, index) => (
                    <div
                      key={index}
                      className="flex border border-grey15 rounded-[28px] 2xl:py-[10px] 2xl:px-[10px] lg:py-[10px] lg:px-[10px] py-[14px] px-[15px] gap-[6px] "
                    >
                      <img
                        className="2xl:w-[24px] xl:w-[20px] lg:w-[18px]"
                        src={container.imgPath}
                        alt={container.name}
                      />
                      <h2 className="2xl:text-[18px] xl:text-[16px] text-white font-medium">
                        {container.name}
                      </h2>
                    </div>
                  ))}
                </div>

                <Button2 className="w-full" text="Get Direction" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:hidden items-center justify-between border-t-[1px] border-grey15 py-8 px-6">
          <div>
            <h1 className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-white font-medium">
              01{" "}
              <strong className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-grey60 font-medium">
                of 02
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
    </section>
  );
};

export default Discover;
