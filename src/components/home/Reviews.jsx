import { useState, useEffect } from "react";

import clsx from "clsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import { homeReviewsItems } from "../../constants";

import StarRating from "./components/StarRating";
import Title from "./components/Title";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useGSAP(() => {
    gsap.from(".reviews_title", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".reviews_title",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".reviews_card", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".reviews_card",
        start: "top 90%",
        end: "bottom 40%",
        scrub: true,
      },
    });
    gsap.from(".reviews_pagination", {
      opacity: 0,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".reviews_pagination",
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

  const totalPages = Math.ceil(homeReviewsItems.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const visibleItems = homeReviewsItems.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section id="testimonial">
      <div className="container mx-auto pt-10 px-5">
        {/* title */}
        <div className="reviews_title">
          <Title
            title="What Our Clients Say"
            text="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
            textBtn="View All Testimonials"
          />
        </div>

        {/* card */}
        <div className="flex items-center justify-center gap-[30px] pb-[50px] min-h-[400px]">
          {visibleItems.map((item, i) => (
            <div
              key={i}
              className="bg-grey08 border-[1px] border-grey15 rounded-[12px] p-[30px] space-y-[40px] sm:min-h-[350px] md:h-full reviews_card"
            >
              <div>
                <StarRating rating={5} />
              </div>
              <div className="flex flex-col justify-center gap-[14px] ">
                <h1 className="2xl:text-2xl xl:text-[20px] md:text-[18px] sm:text-[14px] text-2xl text-white font-semibold">
                  {item.title}
                </h1>
                <p className="2xl:text-lg xl:text-[16px] md:text-[14px] sm:text-[12px] text-lg text-white font-medium">
                  {item.text}
                </p>
              </div>
              <div>
                {item.profiles.map((profile, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <img
                      src={profile.imgPath}
                      alt="profile"
                      className="2xl:w-[60px] xl:w-[50px] md:w-[40px] sm:w-[35px] w-[60px]"
                    />
                    <div>
                      <h2 className="2xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-white font-medium">
                        {profile.name}
                      </h2>
                      <p className="2xl:text-lg lg:text-[16px] md:text-[14px] sm:text-[12px] text-grey60 font-medium">
                        {profile.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="flex items-center justify-between border-t-[1px] border-grey15 py-8 reviews_pagination">
          <div>
            <h1 className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-white font-medium">
              {String(currentPage + 1).padStart(2, "0")}{" "}
              <strong className="2xl:text-xl lg:text-[16px] sm:text-[14px] text-xl text-grey60 font-medium">
                of {String(totalPages).padStart(2, "0")}
              </strong>
            </h1>
          </div>
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
                  "text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] sm:size-[18px] size-[24px]",
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
                  "text-center 2xl:size-[30px] xl:size-[24px] lg:size-[20px] sm:size-[18px] size-[24px]",
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

export default Reviews;
