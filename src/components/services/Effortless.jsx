import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import { effortlessItems } from "../../constants";

import abstarct from "/images/servicesUnlock/abstract.png";
import Title from "./components/Title";
import Button1 from "../Button1";

gsap.registerPlugin(ScrollTrigger);

const Effortless = () => {
  useGSAP(() => {
    gsap.from(".effortless_title", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".effortless_title",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".effortless_card", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".effortless_card",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
    });
  });
  return (
    <section id="negotiation">
      <div className="container mx-auto flex flex-col justify-between md:pb-[150px] sm:pb-[100px] pb-[50px] px-[25px] lg:gap-[80px] md:gap-[50px] sm:gap-[30px] gap-[15px]">
        {/* title */}
        <div className="effortless_title">
          <Title
            title="Effortless Property Management"
            text="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
          />
        </div>

        {/* card */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[30px] gap-[15px]">
          {effortlessItems.map((effortlessItem, index) => (
            <div key={index} className="h-full effortless_card">
              <div className="flex flex-col border border-grey15 rounded-[12px] p-[50px] gap-[30px] h-full">
                <div className="flex items-center gap-[20px]">
                  <img
                    src={effortlessItem.imgPath}
                    className="xl:w-[82px] sm:w-[68px] w-[70px]"
                    alt="icon"
                  />
                  <h1 className="text-white xl:text-[24px] lg:text-[20px] text-[18px] font-semibold">
                    {effortlessItem.title}
                  </h1>
                </div>
                <p className="text-grey60 xl:text-[18px] lg:text-[16px] font-medium">
                  {effortlessItem.text}
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
                <h1 className="text-white xl:text-[30px] lg:text-[24px] md:text-[20px] font-bold">
                  Experience Effortless Property Management
                </h1>
                <Button1 text="Learn More" />
              </div>
              <p className="text-grey60 xl:text-[18px] lg:text-[16px] font-medium">
                Ready to experience hassle-free property management? Explore our
                Property Management Service categories and let us handle the
                complexities while you enjoy the benefits of property ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effortless;
