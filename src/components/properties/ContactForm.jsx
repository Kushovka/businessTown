import { useState } from "react";
import clsx from "clsx";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import Title from "./components/Title";
import Button2 from "../Button2";

import icon1 from "/images/propertiesContact/icon1.svg";
import icon2 from "/images/propertiesContact/icon2.svg";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedInput, setSelectedInput] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useGSAP(() => {
    gsap.from(".contactForm_title", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".contactForm_title",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".contactForm_form", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".contactForm_form",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
    });
  });
  return (
    <section id="categories">
      <div className="container mx-auto flex flex-col justify-between md:pb-[150px] sm:pb-[100px] pb-[50px] px-[25px] gap-[80px]">
        {/* title */}
        <div className="contactForm_title">
          <Title
            title="Let's Make it Happen"
            text="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
          />
        </div>

        {/* form */}
        <div className="border border-grey15 md:p-[100px] p-[20px] rounded-[12px] space-y-[50px] contactForm_form">
          {/* 1 */}
          <div className="grid md:grid-cols-4 grid-cols-1 items-center gap-[50px]">
            {/* name */}
            <div className="contact-form-1">
              <h1 className="text-[20px] text-white font-semibold">
                First Name
              </h1>

              <input
                type="name"
                placeholder="Enter First Name"
                className="border border-grey15 bg-grey10 rounded-[8px] px-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
              />
            </div>
            {/* last name */}
            <div className="contact-form-1">
              <h1 className="text-[20px] text-white font-semibold">
                Last Name
              </h1>

              <input
                type="name"
                placeholder="Enter Last Name"
                className="border border-grey15 bg-grey10 rounded-[8px] px-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
              />
            </div>
            {/* email */}
            <div className="contact-form-1">
              <h1 className="text-[20px] text-white font-semibold">Email</h1>

              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-grey15 bg-grey10 rounded-[8px] px-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
              />
            </div>
            {/* phone */}
            <div className="contact-form-1">
              <h1 className="text-[20px] text-white font-semibold">Phone</h1>

              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="border border-grey15 bg-grey10 rounded-[8px] px-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="grid md:grid-cols-4 grid-cols-1 items-center gap-[50px]">
            {/* 1 */}
            <div className="contact-form-2">
              <h1 className="text-[20px] text-white font-semibold">
                Preferred Location
              </h1>
              <select
                className="border border-grey15 bg-grey10 text-grey40 text-[18px] rounded-[8px] px-[20px] py-[24px] w-full"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option
                  value=""
                  disabled
                  hidden
                  className=" text-grey40 font-medium"
                >
                  Select Location
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="apple"
                >
                  Estatein
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="banana"
                >
                  Estatein
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="orange"
                >
                  Estatein
                </option>
              </select>
            </div>
            {/* 2 */}
            <div className="contact-form-2">
              <h1 className="text-[20px] text-white font-semibold">
                Property Type
              </h1>
              <select
                className="border border-grey15 bg-grey10 text-grey40 text-[18px] rounded-[8px] px-[20px] py-[24px] w-full"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option
                  value=""
                  disabled
                  hidden
                  className=" text-grey40 font-medium"
                >
                  Select Property Type
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="apple"
                >
                  Estatein
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="banana"
                >
                  Estatein
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="orange"
                >
                  Estatein
                </option>
              </select>
            </div>
            {/* 3 */}
            <div className="contact-form-2">
              <h1 className="text-[20px] text-white font-semibold">
                No. of Bathrooms
              </h1>
              <select
                className="border border-grey15 bg-grey10 text-grey40 text-[18px] rounded-[8px] px-[20px] py-[24px] w-full"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option
                  value=""
                  disabled
                  hidden
                  className=" text-grey40 font-medium"
                >
                  Select no. of Bedrooms
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="apple"
                >
                  Estatein
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="banana"
                >
                  Estatein
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="orange"
                >
                  Estatein
                </option>
              </select>
            </div>
            {/* 4 */}
            <div className="contact-form-2">
              <h1 className="text-[20px] text-white font-semibold">
                No. of Bedrooms
              </h1>
              <select
                className="border border-grey15 bg-grey10 text-grey40 text-[18px] rounded-[8px] px-[20px] py-[24px] w-full"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option
                  value=""
                  disabled
                  hidden
                  className=" text-grey40 font-medium"
                >
                  Select no. of Bedrooms
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="apple"
                >
                  Estatein
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="banana"
                >
                  Estatein
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="orange"
                >
                  Estatein
                </option>
              </select>
            </div>
          </div>
          {/* 3 */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[50px]">
            {/* 1 */}
            <div className="flex flex-col gap-[16px] xl:col-span-1 md:col-span-2">
              <h1 className="text-[20px] text-white font-semibold">Budget</h1>
              <select
                className="border border-grey15 bg-grey10 text-grey40 text-[18px] rounded-[8px] px-[20px] py-[24px] w-full"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option
                  value=""
                  disabled
                  hidden
                  className=" text-grey40 font-medium"
                >
                  Select Budget
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="apple"
                >
                  Estatein
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="banana"
                >
                  Estatein
                </option>
                <option
                  className="text-white text-[18px] font-medium"
                  value="orange"
                >
                  Estatein
                </option>
              </select>
            </div>
            {/* 2 */}
            <div className="flex flex-col w-full gap-[16px] xl:col-span-1 md:col-span-2">
              <h1 className="text-[20px] text-white font-semibold">
                Preferred Contact Method
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-[16px]">
                <div className="relative flex flex-col gap-[18px] w-full">
                  <div
                    onClick={() => setSelectedInput("phone")}
                    className={clsx(
                      "w-[20px] h-[20px] top-1/2 -translate-y-1/2 2xl:right-[20px] right-[10px] rounded-full border-2 absolute",
                      selectedInput === "phone"
                        ? " bg-purple60"
                        : "border-purple60",
                      "cursor-pointer transition-colors duration-200"
                    )}
                  ></div>
                  <input
                    type="tel"
                    placeholder="Enter Your Number"
                    className="border border-grey15 bg-grey10 rounded-[8px] pl-[56px] pr-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
                  />
                  <img
                    src={icon1}
                    className="w-[24px] absolute top-1/2 -translate-y-1/2 left-[20px]"
                    alt="icon"
                  />
                </div>
                <div className="relative flex flex-col gap-[18px] w-full">
                  <div
                    onClick={() => setSelectedInput("email")}
                    className={clsx(
                      "w-[20px] h-[20px] top-1/2 -translate-y-1/2 2xl:right-[20px] right-[10px] rounded-full border-2 absolute",
                      selectedInput === "email"
                        ? "bg-purple60"
                        : "border-purple60",
                      "cursor-pointer transition-colors duration-200"
                    )}
                  ></div>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="border border-grey15 bg-grey10 rounded-[8px] pl-[56px] pr-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
                  />
                  <img
                    src={icon2}
                    className="w-[24px] absolute top-1/2 -translate-y-1/2 left-[20px]"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div>
            {/* textarea */}
            <div className="flex flex-col gap-[18px] w-full">
              <h1 className="text-[20px] text-white font-semibold">Message</h1>

              <textarea
                type="text"
                placeholder="Enter your Message here.."
                className="border border-grey15 bg-grey10 rounded-[8px] px-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
              />
            </div>
          </div>
          {/* 5 */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between justify-center gap-[50px] sm:gap-0">
            <div>
              <label className="flex items-center gap-[12px] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="hidden"
                />
                <div
                  className={`w-[20px] h-[20px] rounded-[4px] flex items-center justify-center border-2 transition-all duration-200
                  ${
                    isChecked
                      ? "bg-primary border-primary"
                      : "border-grey40 bg-transparent"
                  }
                  `}
                >
                  {isChecked && (
                    <svg
                      className="w-[12px] h-[12px] text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>

                <span className="text-grey40 md:text-[16px] sm:text-[12px]">
                  I agree with Terms of Use and Privacy Policy
                </span>
              </label>
            </div>
            <div>
              <Button2 text="Send Your Message" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
