import clsx from "clsx";
import Title from "./components/Title";

import icon1 from "/images/propertiesContact/icon1.svg";
import icon2 from "/images/propertiesContact/icon2.svg";
import Button2 from "../Button2";
import { useState } from "react";

const Connect = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section id="contact">
      <div className="container mx-auto flex flex-col md:pb-[150px] sm:pb-[100px] pb-[50px] pt-[50px] px-[25px] lg:gap-[80px] md:gap-[30px] sm:gap-[50px] gap-[35px]">
        <Title
          title="Let's Connect"
          text="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
        />
        <div className="border border-grey15 sm:p-[100px] p-[30px] rounded-[12px] space-y-[50px]">
          {/* 1 */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-[50px]">
            {/* name */}
            <div className="flex flex-col gap-[18px] w-full">
              <h1 className="xl:text-[20px] lg:text-[16px] text-white font-semibold">
                First Name
              </h1>

              <input
                type="name"
                placeholder="Enter First Name"
                className="border border-grey15 bg-grey10 rounded-[8px] px-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
              />
            </div>
            {/* last name */}
            <div className="flex flex-col gap-[18px] w-full">
              <h1 className="xl:text-[20px] lg:text-[16px] text-white font-semibold">
                Last Name
              </h1>

              <input
                type="name"
                placeholder="Enter Last Name"
                className="border border-grey15 bg-grey10 rounded-[8px] px-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
              />
            </div>
            {/* email */}
            <div className="flex flex-col gap-[18px] w-full lg:col-span-1 md:col-span-2">
              <h1 className="xl:text-[20px] lg:text-[16px] text-white font-semibold">
                Email
              </h1>

              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-grey15 bg-grey10 rounded-[8px] px-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-[50px]">
            {/* Phone */}
            <div className="flex flex-col gap-[18px] w-full">
              <h1 className="xl:text-[20px] lg:text-[16px] text-white font-semibold">
                Phone
              </h1>

              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="border border-grey15 bg-grey10 rounded-[8px] px-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
              />
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-[16px]">
              <h1 className="xl:text-[20px] lg:text-[16px] text-white font-semibold">
                Inquiry Type
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
                  Select Inquiry Type
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
            <div className="flex flex-col gap-[16px] lg:col-span-1 md:col-span-2">
              <h1 className="xl:text-[20px] lg:text-[16px] text-white font-semibold">
                How Did You Hear About Us?
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
                  Select
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
          <div>
            {/* textarea */}
            <div className="flex flex-col gap-[18px] w-full">
              <h1 className="xl:text-[20px] lg:text-[16px] text-white font-semibold">
                Message
              </h1>

              <textarea
                type="text"
                placeholder="Enter your Message here.."
                className="h-[200px] border border-grey15 bg-grey10 rounded-[8px] px-[20px] py-[24px] placeholder:text-grey40 placeholder:text-[18px] w-full"
              />
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col sm:flex-row gap-[15px] items-center justify-between">
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

                <span className="text-grey40 text-[16px]">
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

export default Connect;
