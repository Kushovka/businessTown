import { useState } from "react";
import clsx from "clsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { homeHeroItems } from "../../constants";

import abstarct from "/images/aboutStory/abstract.svg";
import OurStoryExperience from "./components/ourStoryModels/OurStoryExperience";
import Title from "./components/Title";

const OurStory = () => {
  useGSAP(() => {
    gsap.from(".left-content", {
      opacity: 0,
      x: -100,
      duration: 1.8,
      ease: "power4.out",
      delay: 0.2,
    });
    gsap.from(".rigth-content", {
      opacity: 0,
      x: 100,
      duration: 1.8,
      ease: "power4.out",
      delay: 0.2,
    });
  });
  const [isGrabbing, setIsGrabbing] = useState(false);
  return (
    <section id="ourStory" className="relative z-10 overflow-hidden">
      <div>
        {/* content */}
        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between md:pb-[150px] pb-[100px] md:pt-[100px] pt-[40px] sm:gap-[30px] px-5 sm:px-0 md:gap-0">
          {/* left */}
          <div className="md:w-[45%] translate-y-10 flex flex-col lg:gap-[60px] md:gap-[45px] sm:gap-[30px] gap-[45px] sm:py-10 sm:pb-12 pb-14 md:pt-14 sm:px-0  px-2 left-content">
            <Title
              title="Our Journey"
              text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
            />

            <div className="sm:flex grid grid-cols-2 lg:gap-5 gap-3">
              {homeHeroItems.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "bg-grey10 border-[1px]  border-grey15 rounded-[12px] 2xl:py-4 2xl:px-6 xl:py-3 xl:px-5 2xl:min-w-[240px] xl:min-w-[190px] lg:min-w-[150px] md:min-w-[120px] sm:min-w-[90px] lg:py-3 lg:px-4 py-2 px-3",
                    index === 2 && "col-span-2 sm:col-span-1"
                  )}
                >
                  <div
                    className={clsx(
                      "",
                      index === 2 && "flex flex-col items-center sm:items-start"
                    )}
                  >
                    <h1 className="text-white 2xl:text-[40px] xl:text-[30px] lg:text-[20px] md:text-[18px] sm:text-[14px] text-[24px] font-bold">
                      {item.num}
                    </h1>
                    <p className="text-grey60 2xl:text-lg xl:text-base text-sm font-medium">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* model */}
          <div className="relative md:w-[45%] w-full z-20 rounded-lg rigth-content">
            <div
              className={clsx(
                "relative w-full xl:h-[500px] lg:h-[400px] md:h-[350px] rounded-lg border border-grey15 sm:border-l overflow-hidden",
                isGrabbing ? "cursor-grabbing" : "cursor-grab"
              )}
              onMouseDown={() => setIsGrabbing(true)}
              onMouseUp={() => setIsGrabbing(false)}
              onMouseLeave={() => setIsGrabbing(false)}
            >
              <OurStoryExperience />
              <img
                src={abstarct}
                className="absolute left-0 top-0 pointer-events-none z-10 opacity-15 h-full"
                alt="abstarct"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
