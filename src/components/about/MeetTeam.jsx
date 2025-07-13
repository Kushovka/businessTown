import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import { meetTeamItems } from "../../constants";

import icon from "/images/aboutTeam/Icon1.svg";
import Message from "./components/meetTeamComp/Message";
import Title from "./components/Title";

gsap.registerPlugin(ScrollTrigger);

const MeetTeam = () => {
  useGSAP(() => {
    gsap.from(".meetTeam_title", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".meetTeam_title",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".meetTeam_card", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".meetTeam_card",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
    });
  });

  return (
    <section id="ourTeam">
      <div className="container mx-auto flex flex-col justify-between md:pb-[150px] pb-[100px] gap-[80px] px-5 sm:px-0">
        {/* title */}
        <div className="meetTeam_title">
          <Title
            title="Meet the Estatein Team"
            text="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
          />
        </div>

        {/* cards */}
        <div className="flex justify-center flex-wrap gap-[30px]">
          {meetTeamItems.map((item, index) => (
            <div
              key={index}
              className="relative border border-grey15 p-[30px] rounded-[12px] flex flex-col items-center justify-center gap-[50px] group max-w-[300px] w-full meetTeam_card"
            >
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 bg-purple60 px-[26px] py-[14px] rounded-full group-hover:scale-105 transition-all duration-300">
                <img src={icon} alt="icon" className="icon" />
              </div>
              <img src={item.imgPath} className="w-full" alt={item.name} />
              <div className="text-center">
                <h1 className="2xl:text-[24px] xl:text-[20px] text-white font-semibold">
                  {item.name}
                </h1>
                <p className="2xl:text-[16px] xl:text-[14px] text-grey60 font-medium">
                  {item.post}
                </p>
              </div>
              <Message />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
