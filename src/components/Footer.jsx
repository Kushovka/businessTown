import { Link } from "react-router-dom";
import { footerItems } from "../constants";
import SubLink from "./SubLink";

import logo from "/images/Logo.svg";
import iconEmail from "/images/footer/iconEmail.svg";
import iconEmailEnter from "/images/footer/iconEmailEnter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex flex-col md:flex-row justify-between py-[100px] gap-20 md:gap-0 px-5">
        <div className="flex flex-col items-center sm:items-start justify-center md:justify-start gap-[30px] md:w-1/2 w-full ">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="2xl:w-full lg:w-[80%] md:w-[50%] sm:w-[80%] w-[85%]"
            />
          </Link>
          <div className="relative 2xl:w-[85%] lg:w-[75%] md:w-[80%]">
            <img
              className="absolute top-1/2 -translate-y-1/2 left-5 2xl:w-[24px] xl:w-[20px] lg:w-[18px] md:w-[16px]"
              src={iconEmail}
              alt="iconEmail"
            />
            <img
              className="absolute top-1/2 -translate-y-1/2 right-5 2xl:w-[30px] xl:w-[24px] lg:w-[20px] md:w-[18px]"
              src={iconEmailEnter}
              alt="iconEmailEnter"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="rounded-[12px] lg:text-[20px] md:text-[12px] 2xl:py-5 xl:py-[14px] lg:py-[12px] md:py-[10px] 2xl:px-16 xl:px-[50px] lg:px-[45px] md:px-[40px] px-[80px] py-[20px] bg-grey08 border border-grey15 text-white w-full lg:placeholder:text-[16px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 2xl:gap-[100px] xl:gap-[90px] lg:gap-[60px] md:gap-[30px] sm:gap-[70px] gap-[60px]">
          {footerItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center md:items-start"
            >
              <Link to={item.path}>
                <h1 className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] text-white font-medium text-start">
                  {item.title}
                </h1>
              </Link>

              <div className="flex flex-col 2xl:gap-[20px] xl:gap-[16px] lg:gap-[14px] md:gap-[12px] sm:gap-[10px] gap-[8px] 2xl:mt-[30px] xl:mt-[24px] lg:mt-[20px] md:mt-[18px] sm:mt-[16px] mt-[14px]">
                {item.items.map((subItem) => (
                  <a
                    href={subItem.href}
                    className="2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-white/60 hover:text-white transition-all duration-300 cursor-pointer font-medium"
                  >
                    {subItem.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SubLink />
    </footer>
  );
};

export default Footer;
