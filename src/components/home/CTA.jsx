import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button2 from "../Button2";

import abstract1 from "/images/homeCTA/abstract1.svg";
import abstract2 from "/images/homeCTA/abstract2.svg";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  useGSAP(() => {
    gsap.from(".home_CTA", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".home_CTA",
        start: "top 90%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  });
  return (
    <section className="relative z-0 border-t border-b border-grey15 overflow-hidden home_CTA">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between pt-[60px] py-10 sm:py-0 md:px-5">
        <img
          className="absolute sm:w-1/2 w-[80%] z-10 left-0 md:top-0 bottom-0"
          src={abstract1}
          alt="abstract1"
        />
        <img
          className="absolute sm:w-1/2 w-[80%] z-10 right-0 sm:top-0 top-0 scale-y-[-1] md:scale-y-[1]"
          src={abstract2}
          alt="abstract2"
        />

        <div className="relative flex flex-col w-[75%] justify-center gap-[14px] py-[100px] z-50">
          <h1 className="2xl:text-5xl xl:text-[38px] lg:text-[30px] md:text-[25px] text-3xl text-white font-semibold">
            Start Your Real Estate Journey Today
          </h1>
          <p className="2xl:text-lg xl:text-[16px] lg:text-[14px] md:text-[12px] text-lg text-grey60 font-medium">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way.
          </p>
        </div>

        <Button2 className="relative z-50" text="Explore Properties" />
      </div>
    </section>
  );
};

export default CTA;
