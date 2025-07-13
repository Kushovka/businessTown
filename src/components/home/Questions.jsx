import { useEffect, useState } from "react";

import clsx from "clsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { homeQuestionsItems } from "../../constants";

import Button1 from "../Button1";
import Title from "./components/Title";

gsap.registerPlugin(ScrollTrigger);

const Questions = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const totalPages = Math.ceil(homeQuestionsItems.length / cardsPerPage);

  useGSAP(() => {
    gsap.from(".questions_title", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".questions_title",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".questions_card", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".questions_card",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    gsap.from(".questions_pagination", {
      opacity: 0,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".questions_pagination",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  });

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCardsPerPage(3);
      else if (width >= 768) setCardsPerPage(2);
      else if (width >= 640) setCardsPerPage(1);
      else setCardsPerPage(1);
      setCurrentPage(0);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const startIndex = currentPage * cardsPerPage;
  const visibleItems = homeQuestionsItems.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section id="faqs">
      <div className="container mx-auto py-10 px-6">
        {/* title */}
        <div className="questions_title">
          <Title
            title="Frequently Asked Questions"
            text="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            textBtn="View All FAQ’s"
          />
        </div>

        {/* card */}
        <div className="flex lg:gap-[30px] md:gap-[20px] sm:gap-[15px] pb-[50px]">
          {visibleItems.map((item, i) => (
            <div
              key={i}
              className={clsx(
                "bg-grey08 border-[1px] border-grey15 rounded-[12px] 2xl:p-[50px] xl:p-[40px] md:p-[25px] sm:p-[15px] p-[50px] space-y-[30px] w-full h-full questions_card"
              )}
            >
              <div className="flex flex-col w-full h-full justify-center lg:gap-[30px] md:gap-[20px] sm:gap-[15px] gap-[25px]">
                <h1 className="2xl:text-2xl xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-2xl text-white font-semibold ">
                  {item.title}
                </h1>
                <p className="2xl:text-lg xl:text-[15px] md:text-[12px] sm:text-[12px] text-lg text-grey60 font-medium">
                  {item.text}
                </p>
              </div>
              <div>
                <Button1
                  text="Read More"
                  className="bg-grey10 xl:py-[14px] xl:px-[20px] lg:py-[12px] lg:px-[18px] md:py-[10px] md:px-[16px] md:text-[14px]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="flex items-center justify-between border-t-[1px] border-grey15 py-8 questions_pagination">
          <div>
            <h1 className="2xl:text-xl lg:text-[16px] md:text-[14px] text-xl  text-white font-medium">
              {String(currentPage + 1).padStart(2, "0")}{" "}
              <strong className="2xl:text-xl lg:text-[16px] md:text-[14px] text-xl text-grey60 font-medium">
                of {String(totalPages).padStart(2, "0")}
              </strong>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className={clsx(
                "border-[1px] border-grey15 2xl:p-[14px] xl:p-[10px] lg:p-[8px] md:p-[7px] p-[10px] rounded-full",
                currentPage === 0 ? "bg-grey08" : "bg-grey10"
              )}
            >
              <IoIosArrowBack
                className={clsx(
                  "text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] md:size-[18px] size-[20px]",
                  currentPage === 0 ? "text-white/50" : "text-white"
                )}
              />
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={currentPage === totalPages - 1}
              className={clsx(
                "border-[1px] border-grey15 2xl:p-[14px] xl:p-[10px] lg:p-[8px] md:p-[7px] p-[10px] rounded-full",
                currentPage === totalPages - 1 ? "bg-grey08" : "bg-grey10"
              )}
            >
              <IoIosArrowForward
                className={clsx(
                  "text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] md:size-[18px] size-[20px]",
                  currentPage === totalPages - 1
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

export default Questions;
