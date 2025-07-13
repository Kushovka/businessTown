import { useState } from "react";
import clsx from "clsx";
import { GoArrowUpRight } from "react-icons/go";

import { homeHeroItems } from "../../constants";
import HeroExperience from "./components/HeroModel/HeroExperience";

import Button1 from "../Button1";
import Sub from "./Sub";
import Button2 from "../Button2";

const Hero = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <section id="hero" className="relative z-10 overflow-hidden">
      <div>
        {/* content */}
        <div className="container mx-auto relative z-10 flex flex-col-reverse sm:flex-row items-center justify-between md:px-4 lg:px-8">
          {/* left */}
          <div className="w-full xl:w-1/3 md:w-[45%] sm:w-[40%] translate-y-10 flex flex-col lg:gap-[60px] md:gap-[45px] sm:gap-[30px] gap-[45px] sm:py-10 sm:pb-12 pb-14 md:pt-14 sm:px-0  px-2">
            <Header />
            <Actions />
            <Stats />
          </div>
          {/* model */}
          <div className="sm:w-1/2 w-full z-20 py-4 px-4 rounded-lg">
            <div
              className={clsx(
                "w-full sm:h-[700px] h-[400px] lg:translate-x-[40px] md:translate-x-[30px] sm:translate-x-[20px] rounded-lg border border-grey30 sm:border-l sm:border-grey30 overflow-hidden",
                isGrabbing ? "cursor-grabbing" : "cursor-grab"
              )}
              onMouseDown={() => setIsGrabbing(true)}
              onMouseUp={() => setIsGrabbing(false)}
              onMouseLeave={() => setIsGrabbing(false)}
            >
              <HeroExperience />
            </div>
          </div>
        </div>
        {/* animate text */}
        <CircleButton />
      </div>
      <Sub />
    </section>
  );
};

export default Hero;

// ----------------------- local components -------------------------

const Header = () => (
  <div className="xl:w-[84%] md:w-full flex flex-col gap-6">
    <h1 className="text-white xl:text-6xl lg:text-[46px] md:text-[36px] sm:text-[28px] text-[36px] font-semibold">
      Discover Your Dream Property with Estatein
    </h1>
    <p className="text-grey60 xl:text-lg text-base font-medium">
      Your journey to finding the perfect property begins here. Explore our
      listings to find the home that matches your dreams.
    </p>
  </div>
);

const Actions = () => (
  <div className="sm:self-start flex flex-col sm:flex-row sm:items-center lg:gap-5 gap-3">
    <Button1 className="w-full sm:w-auto" text="Learn More" />
    <Button2 className="w-full sm:w-auto" text="Browse Properties" />
  </div>
);

const Stats = () => (
  <div className="sm:flex grid grid-cols-2 lg:gap-5 gap-3">
    {homeHeroItems.map((item, index) => (
      <div
        key={index}
        className={clsx(
          "bg-grey10 border border-grey15 rounded-[12px] 2xl:py-4 2xl:px-6 xl:py-3 xl:px-5 2xl:min-w-[240px] xl:min-w-[190px] lg:min-w-[150px] md:min-w-[120px] sm:min-w-[90px] lg:py-3 lg:px-4 py-2 px-3",
          index === 2 && "col-span-2 sm:col-span-1"
        )}
      >
        <div
          className={clsx(
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
);

const CircleButton = () => {
  const circleSize =
    "xl:w-[175px] xl:h-[175px] lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px] w-[120px] h-[120px]";
  return (
    <a
      href="#features"
      className={clsx(
        "absolute z-50 sm:bottom-12 sm:left-1/2 left-[0%] sm:top-[15%] top-[25%] transform sm:-translate-x-[28%] -translate-y-[20%] bg-grey08 rounded-full border border-grey15 group cursor-pointer",
        circleSize
      )}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-grey10 border border-grey15 rounded-full xl:p-6 md:p-4 sm:p-3 p-4 flex items-center justify-center">
        <GoArrowUpRight className="text-white xl:size-[34px] md:size-[28px] sm:size-[22px] size-[28px] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
      </div>
      <svg
        viewBox="0 0 200 200"
        className={clsx("animate-spin-slow", circleSize)}
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text
          fill="white"
          fontSize="15"
          fontWeight="600"
          letterSpacing="2"
          textLength="471"
          lengthAdjust="spacing"
        >
          <textPath href="#circlePath">
            Discover Your Dream Property ✨
          </textPath>
        </text>
      </svg>
    </a>
  );
};
