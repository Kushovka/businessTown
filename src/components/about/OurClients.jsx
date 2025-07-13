import { useState } from "react";

import clsx from "clsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import { ourClientsItems } from "../../constants";

import Title from "./components/Title";
import icon1 from "/images/aboutOurClients/icon1.svg";
import icon2 from "/images/aboutOurClients/icon2.svg";

gsap.registerPlugin(ScrollTrigger);

const OurClients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = ourClientsItems.length;

  const prevItem = () => {
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextItem = () => {
    setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const currentClient = ourClientsItems[activeIndex];

  useGSAP(() => {
    gsap.from(".ourClients_title", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ourClients_title",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".ourClients_card", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ourClients_card",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    gsap.from(".ourClients_pagination", {
      opacity: 0,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ourClients_pagination",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  });

  return (
    <section id="ourClients">
      <div className="container mx-auto flex flex-col justify-between md:pb-[150px] pb-[100px] gap-[80px] px-5 sm:px-0">
        {/* title */}
        <div className="ourClients_title">
          <Title
            title="Our Valued Clients"
            text="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
          />
        </div>

        {/* card */}
        <div className="w-full mx-auto ourClients_card">
          <div className="border border-grey15 p-[50px] rounded-[12px] shadow-[0_0_0_10px_#191919] space-y-[40px]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-0 sm:items-center justify-between">
              <div className="flex flex-col ">
                <p className="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[18px] text-grey60 font-medium">
                  {currentClient.since}
                </p>
                <h1 className="xl:text-[30px] lg:text-[24px] md:text-[20px] text-[30px] text-white font-semibold">
                  {currentClient.name}
                </h1>
              </div>
              <button className="text-white xl:text-[18px] lg:text-[16px] md:text-[14px] text-[18px] font-medium bg-grey10 border border-grey15 lg:px-[24px] md:px-[20px] px-[24px] lg:py-[18px] md:py-[14px] py-[18px] rounded-[10px]">
                Visit Website
              </button>
            </div>
            {/* Domain & Category */}
            <div className="flex xl:justify-center flex-col sm:flex-row gap-[20px] sm:gap-0 justify-between relative">
              <div className="lg:w-1/3 xl:w-1/2  sm:items-center sm:flex sm:flex-col">
                <div className="flex gap-[6px] ">
                  <img src={icon1} className="w-[24px]" alt="icon" />
                  <h1 className="xl:text-[18px] lg:text-[16px] text-[18px] text-grey60 font-medium">
                    Domain
                  </h1>
                </div>
                <h1 className="xl:text-[20px] lg:text-[18px] md:text-[14px] text-[20px] text-white font-medium">
                  {currentClient.domain}
                </h1>
              </div>
              <div className="w-[1px] h-full lg:absolute hidden top-0 xl:left-[45%] lg:left-[40%] bg-grey15" />
              <div className="w-1/2  sm:items-center sm:flex sm:flex-col">
                <div className="flex gap-[6px]">
                  <img src={icon2} className="w-[24px]" alt="" />
                  <h1 className="xl:text-[18px] lg:text-[16px] text-[18px] text-grey60 font-medium">
                    Category
                  </h1>
                </div>
                <h1 className="xl:text-[20px] lg:text-[18px] md:text-[14px] text-[20px] text-white font-medium">
                  {currentClient.category}
                </h1>
              </div>
            </div>
            {/* Feedback */}
            <div className="flex flex-col border border-grey15 p-[30px] rounded-[12px] gap-[14px]">
              <h1 className="xl:text-[18px] lg:text-[16px] text-[18px] text-grey60 font-medium">
                What They Said 🤗
              </h1>
              <p className="xl:text-[18px] lg:text-[16px] text-[18px] text-white font-medium">
                {currentClient.questions}
              </p>
            </div>
          </div>
        </div>

        {/* pagination */}
        <div className="flex items-center justify-between border-t-[1px] border-grey15 py-8 w-full mx-auto ourClients_pagination">
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
                  activeIndex === totalItems - 1
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

export default OurClients;
