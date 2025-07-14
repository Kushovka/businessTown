import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import { smartItems } from "../../constants";

import Title from "./components/Title";
import Button1 from "../Button1";
import abstract from "/images/servicesSmart/abstract.png";

gsap.registerPlugin(ScrollTrigger);

const Smart = () => {
  useGSAP(() => {
    gsap.from(".smart_title", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".smart_title",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".smart_card", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".smart_card",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
    });
  });
  return (
    <section id="closing">
      <div className="container mx-auto flex flex-col lg:flex-row md:pb-[150px] sm:pb-[100px] pb-[50px] px-[25px] lg:gap-[80px] md:gap-[30px] sm:gap-[50px] gap-[35px]">
        {/* title + sub */}
        <div className="flex lg:flex-col flex-col lg:w-1/2 md:w-full  gap-[50px] self-start smart_title">
          <Title
            title="Smart Investments, Informed Decisions"
            text="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
          />
          <div className="relative w-full border border-grey15 rounded-[12px] p-[50px] overflow-hidden z-20">
            <img
              className="absolute top-0 left-0 w-full h-full z-10 object-cover"
              src={abstract}
              alt="abstract"
            />
            <div className="relative z-20 space-y-[30px] ">
              <h1 className="xl:text-[24px] lg:text-[20px] text-[18px] text-white font-semibold">
                Unlock Your Investment Potential
              </h1>
              <p className="xl:text-[18px] lg:text-[16px] text-white90 font-medium">
                Explore our Property Management Service categories and let us
                handle the complexities while you enjoy the benefits of property
                ownership.
              </p>
              <Button1 text="Learn More" className="lg:w-full" />
            </div>
          </div>
        </div>

        {/* card */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[10px] w-full h-full auto-rows-fr rounded-[12px] bg-[#191919] shadow-[0_0_0_10px_#191919]">
          {smartItems.map((smartItem, index) => (
            <div
              key={index}
              className="flex flex-col gap-[20px] p-[30px] md:p-[50px] border border-grey15 rounded-[12px] bg-grey08 w-full smart_card"
            >
              <div className="flex items-center gap-[20px] w-full">
                <img
                  src={smartItem.imgPath}
                  className="xl:w-[82px] sm:w-[68px] w-[70px]"
                  alt="icon"
                />
                <h1 className="xl:text-[24px] md:text-[20px] text-[18px] text-white font-semibold">
                  {smartItem.title}
                </h1>
              </div>
              <p className="xl:text-[18px] lg:text-[16px] text-grey60 font-medium">
                {smartItem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Smart;
