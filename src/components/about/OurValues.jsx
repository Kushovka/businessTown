import clsx from "clsx";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import { ourValuesItems } from "../../constants";

import Title from "./components/Title";

gsap.registerPlugin(ScrollTrigger);

const OurValues = () => {
  useGSAP(() => {
    gsap.from(".ourValues_title", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ourValues_title",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".ourValues_card", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ourValues_card",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
    });
  });
  return (
    <section>
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between md:pb-[150px] pb-[100px] gap-[80px] px-5 sm:px-0">
        {/* title */}
        <div className="xl:w-[50%] ourValues_title">
          <Title
            title="Our Values"
            text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          />
        </div>

        {/* content */}
        <div className="relative grid sm:grid-cols-2 grid-cols-1 gap-[60px] border sm:p-[60px] p-[30px] border-grey15 shadow-[0_0_0_10px_#191919] rounded-[12px] ourValues_card">
          <div className="sm:absolute hidden border w-[90%] top-1/2 left-1/2 -translate-x-1/2 border-grey15/50" />
          <div className="sm:absolute hidden border h-[40%] top-[60%] -translate-y-[15%] left-1/2 -translate-x-1/2 border-grey15/50 " />
          <div className="sm:absolute hidden border h-[40%] top-[10%] -translate-y-[10%]  left-1/2 -translate-x-1/2 border-grey15/50" />
          {ourValuesItems.map((ourValuesItem, index) => (
            <div key={index} className={clsx(" flex flex-col gap-[20px]")}>
              <div className="flex items-center gap-[14px]">
                <div className="border border-purple60 rounded-full sm:p-[20px] p-[12px]">
                  <img
                    src={ourValuesItem.imgPath}
                    className="sm:w-[34px] w-[24px]"
                    alt="icon"
                  />
                </div>
                <h1 className="sm:text-[24px] text-[18px] w-full text-white font-semibold">
                  {ourValuesItem.title}
                </h1>
              </div>

              <p className="sm:text-[18px] text-[14px] text-grey60 font-medium">
                {ourValuesItem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
