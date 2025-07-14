import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Property = () => {
  useGSAP(() => {
    gsap.from(".property-content", {
      opacity: 0,
      y: 100,
      duration: 1.8,
      ease: "power4.out",
      delay: 0.2,
    });
  });
  return (
    <section className="relative border-b border-grey15 overflow-hidden ">
      <div className="absolute top-0 left-0 w-[100px] h-full bg-white blur-[200px] rounded-full opacity-50 pointer-events-none z-0 pulse-blur" />
      <div className="container mx-auto flex flex-col justify-between md:py-[150px] sm:py-[100px] py-[50px] px-[15px] property-content">
        <div className="sm:w-[75%] w-full">
          <h1 className="md:text-[48px] sm:text-[34px] text-[30px] text-white font-semibold">
            Find Your Dream Property
          </h1>
          <p className="md:text-[18px] sm:text-[16px] text-[14px] text-grey60 font-medium">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Property;
