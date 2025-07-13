import React from "react";
import Title from "./components/Title";
import { unlockItems } from "../../constants";

import abstarct from "/images/servicesUnlock/abstract.png";
import Button1 from "../Button1";

const Unlock = () => {
  return (
    <section id="strategic">
      <div className="container mx-auto flex flex-col justify-between md:pb-[150px] sm:pb-[100px] pb-[50px] px-[25px] lg:gap-[80px] md:gap-[50px] sm:gap-[30px] gap-[15px]">
        <Title
          title="Unlock Property Value"
          text="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
        />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[30px] gap-[15px]">
          {unlockItems.map((unlockItem, index) => (
            <div key={index} className="h-full">
              <div className="flex flex-col border border-grey15 rounded-[12px] p-[50px] gap-[30px] h-full">
                <div className="flex items-center gap-[20px]">
                  <img
                    src={unlockItem.imgPath}
                    className="xl:w-[82px] sm:w-[68px] w-[70px]"
                    alt="icon"
                  />
                  <h1 className="text-white xl:text-[24px] lg:text-[20px] text-[18px] font-semibold">
                    {unlockItem.title}
                  </h1>
                </div>
                <p className="text-grey60 xl:text-[18px] lg:text-[16px] font-medium">
                  {unlockItem.text}
                </p>
              </div>
            </div>
          ))}
          <div className="relative border border-grey15 rounded-[12px] sm:col-span-2 col-span-1 p-[50px]">
            <img
              src={abstarct}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt=""
            />
            <div className="flex flex-col gap-[30px] z-30 relative">
              <div className="flex flex-col sm:flex-row gap-[15px] items-center sm:justify-between text-center sm:text-left">
                <h1 className="text-white xl:text-[30px] lg:text-[24px] md:text-[20px] text-[18px] font-bold">
                  Unlock the Value of Your Property Today
                </h1>
                <Button1 text="Learn More" />
              </div>
              <p className="text-grey60 xl:text-[18px] lg:text-[16px] font-medium">
                Ready to unlock the true value of your property? Explore our
                Property Selling Service categories and let us help you achieve
                the best deal possible for your valuable asset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unlock;
