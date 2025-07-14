import { SlMagnifier } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { propertySearchItems } from "../../constants";

const PropertySearch = () => {
  useGSAP(() => {
    gsap.from(".propertySearch-content", {
      opacity: 0,
      y: 100,
      duration: 1.8,
      ease: "power4.out",
      delay: 0.2,
    });
  });
  return (
    <section>
      <div className="container mx-auto flex flex-col justify-between md:-translate-y-[50px] sm:-translate-y-[20px] -translate-y-[30px] md:pb-[150px] sm:pb-[100px] pb-[50px] px-[15px] propertySearch-content">
        <div className="flex flex-col md:gap-[20px] gap-[30px]">
          {/*  */}
          <div className="flex items-center justify-center">
            <div className="relative w-[80%]">
              <input
                type="text"
                placeholder="Search For A Property"
                className="xl:py-[33px] lg:py-[27px] md:py-[20px] py-[18px] xl:px-[24px] lg:px-[18px] px-[12px] w-full md:rounded-t-[12px] rounded-[12px] bg-grey08 border border-grey15 shadow-[0_0_0_10px_#191919] xl:text-[24px] lg:text-[20px] text-white  placeholder:text-grey40 xl:placeholder:text-[24px] lg:placeholder:text-[20px]"
              />
              <div className="w-full ">
                <button className="absolute top-1/2 right-[16px] -translate-y-1/2 text-white xl:text-[18px] lg:text-[16px] bg-purple60 rounded-[10px] lg:py-[18px] lg:px-[24px] md:py-[12px] md:px-[18px] sm:py-[10px] sm:px-[16px] py-[10px] px-[10px]">
                  <div className="flex items-center justify-center gap-[8px]">
                    <SlMagnifier className="xl:size-[24px] lg:size-[20px] md:size-[16px]" />
                    <h2 className="hidden sm:block"> Find Property</h2>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col md:flex-row w-full items-center justify-between shadow-[0_0_0_10px_#191919] p-[20px] md:p-0 rounded-[12px] bg-[#191919] gap-[10px]">
            {propertySearchItems.map((propertySearchItem, index) => (
              <div
                key={index}
                className="border border-grey15 rounded-[12px] w-full md:w-auto bg-grey08 2xl:py-[22px] xl:px-[18px] lg:py-[14px] lg:px-[12px] md:py-[8px] md:px-[6px] py-[16px] px-[14px]"
              >
                <div className="flex items-center justify-between 2xl:gap-[50px] xl:gap-[30px] lg:gap-[20px] md:gap-[5px]">
                  <div className=" flex items-center justify-center h-full xl:gap-[10px] md:gap-[5px] gap-[10px]">
                    <img
                      src={propertySearchItem.imgPath}
                      alt="icon"
                      className="lg:w-[24px] md:w-[18px]"
                    />
                    <div className="w-[1px] h-[24px] bg-grey15" />
                    <h1 className="xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[18px] text-grey60 font-medium">
                      {propertySearchItem.title}
                    </h1>
                  </div>
                  <div className="bg-grey10 xl:p-[4px] lg:p-[2px] rounded-full">
                    <IoIosArrowDown className="xl:size-[24px] lg:size-[20px] text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
