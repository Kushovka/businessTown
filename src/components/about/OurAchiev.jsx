import clsx from "clsx";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import { ourAchievItems } from "../../constants";

import Title from "./components/Title";

gsap.registerPlugin(ScrollTrigger);

const OurAchiev = () => {
  useGSAP(() => {
    gsap.from(".ourAchiev_title", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ourAchiev_title",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".ourAchiev_card", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".ourAchiev_card",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
    });
  });
  return (
    <section id="ourWorks">
      <div className="container mx-auto flex flex-col justify-between md:pb-[150px] pb-[100px] gap-[80px] px-5 sm:px-0">
        {/* title */}
        <div className="ourAchiev_title">
          <Title
            title="Our Achievements"
            text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          />
        </div>

        {/* card */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[40px]">
          {ourAchievItems.map((ourAchievItem, index) => (
            <div
              key={index}
              className={clsx(
                "border border-grey15 rounded-[12px] p-[40px] shadow-[0_0_0_10px_#191919] ourAchiev_card",
                index === 2 ? "lg:block hidden" : ""
              )}
            >
              <div className="space-y-[30px]">
                <h1 className="text-[30px] text-white font-semibold">
                  {ourAchievItem.title}
                </h1>
                <p className="text-[18px] text-grey60 font-medium">
                  {ourAchievItem.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchiev;
