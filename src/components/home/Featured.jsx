import { useState, useEffect } from "react";

import clsx from "clsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import { homeFeatureds } from "../../constants";

import Button2 from "../Button2";
import Title from "./components/Title";

gsap.registerPlugin(ScrollTrigger);
 
const Featured = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const totalPages = Math.ceil(homeFeatureds.length / cardsPerPage);

  useGSAP(() => {
    gsap.from(".featured_title", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".featured_title",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".featured_card", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".featured_card",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    gsap.from(".featured_pagination", {
      opacity: 0,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".featured_pagination",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  });

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      let newCardsPerPage;
      if (width >= 1024) newCardsPerPage = 3;
      else if (width >= 768) newCardsPerPage = 2;
      else newCardsPerPage = 1;

      setCardsPerPage((prev) => {
        if (prev !== newCardsPerPage) {
          setCurrentPage(0);
          return newCardsPerPage;
        }
        return prev;
      });
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const startIndex = currentPage * cardsPerPage;
  const visibleItems = homeFeatureds.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section id="features">
      <div className="container mx-auto pt-10">
        {/* title */}
        <div className="featured_title">
          <Title
            title="Featured Properties"
            text="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information."
            textBtn="View All Properties"
          />
        </div>

        {/* card */}
        <div className="flex items-center justify-between gap-5 pb-[50px] px-4 ">
          {visibleItems.map((item, index) => (
            <div
              key={item.id || index}
              className="border-[1px] border-grey15 w-full rounded-[10px] space-y-[30px] 2xl:p-10 lg:p-[25px] md:p-[20px] p-[15px] overflow-hidden featured_card"
            >
              <img src={item.imgPath} alt={item.title} className="w-full" />

              <div className="flex flex-col sm:items-start items-center justify-center gap-1">
                <h1 className="2xl:text-2xl xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[24px] text-2xl text-white font-semibold">
                  {item.title}
                </h1>
                <p className="2xl:text-lg xl:text-base md:text-sm sm:text-[18px] text-lg text-grey60 font-medium">
                  {item.description} <a className="text-white">... Read More</a>
                </p>
              </div>

              <div className="lg:flex grid md:grid-cols-2 sm:grid-cols-3 justify-center items-center gap-[10px]">
                {item.containers.map((container, cIndex) => (
                  <div
                    key={cIndex}
                    className="border-[1px] w-auto border-grey15 bg-grey10 2xl:py-[8px] xl:py-[6px] xl:px-[12px] lg:py-[5px] lg:px-[6px] md:py-[3px] md:px-[3px] sm:py-[3px] sm:px-[8px] py-[8px] px-[6px] rounded-[28px] flex items-center sm:items-center justify-center sm:justify-center"
                  >
                    <div className="flex items-center gap-[3px]">
                      <img
                        src={container.imgPath}
                        alt={container.text}
                        className="2xl:w-[24px] xl:w-[20px] lg:w-[16px] md:w-[14px] sm:w-[12px]"
                      />
                      <h1 className="2xl:text-lg xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[18px] text-white font-medium">
                        {container.text}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center 2xl:gap-[50px] xl:gap-[40px] lg:gap-[30px] md:gap-[20px] sm:gap-[50px] gap-[20px]">
                <div className="flex flex-col justify-center">
                  <h2 className="2xl:text-lg lg:text-[14px] md:text-[12px] text-lg text-grey60 font-medium">
                    Price
                  </h2>
                  <h1 className="2xl:text-2xl xl:text-[18px] lg:text-[16px] md:text-[12px] text-2xl text-white font-semibold">
                    {item.price}
                  </h1>
                </div>
                <Button2
                  className="lg:text-[11px] md:text-[8px]"
                  text="View Property Details"
                />
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="flex items-center justify-between border-t-[1px] border-grey15 py-8 px-6 featured_pagination">
          <h1 className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-white font-medium">
            {String(currentPage + 1).padStart(2, "0")}{" "}
            <strong className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-grey60 font-medium">
              of {String(totalPages).padStart(2, "0")}
            </strong>
          </h1>
          <div className="flex items-center justify-center gap-[10px]">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className={clsx(
                "border-[1px] border-grey15 2xl:p-[14px] xl:p-[10px] lg:p-[8px] sm:p-[7px] p-[10px] rounded-full",
                currentPage === 0 ? "bg-grey08" : "bg-grey10"
              )}
            >
              <IoIosArrowBack
                className={clsx(
                  "text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] sm:size-[18px] size-[20px]",
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
                "border-[1px] border-grey15 2xl:p-[14px] xl:p-[10px] lg:p-[8px] sm:p-[7px] p-[10px] rounded-full",
                currentPage === totalPages - 1 ? "bg-grey08" : "bg-grey10"
              )}
            >
              <IoIosArrowForward
                className={clsx(
                  "text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] sm:size-[18px] size-[20px]",
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

export default Featured;
