import { useEffect, useState } from "react";
import { navItems } from "../constants";
import Button1 from "./Button1";
import clsx from "clsx";

import logo from "/images/Logo.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      {isScrolled && <div className="h-[106px]" />}

      <nav className="bg-grey10 border border-grey15">
        <div
          className={clsx(
            "container mx-auto z-50 px-6 md:px-7 transition-all duration-500",
            isScrolled
              ? "fixed top-0 left-1/2 -translate-x-1/2 py-3 mt-2 bg-black/40 backdrop-blur-md rounded-[40px] w-full"
              : "py-5 sm:py-[14px] lg:py-5"
          )}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <Link to="/" className="flex-center">
              <img
                src={logo}
                alt="logo"
                className="2xl:w-full lg:w-[80%] md:w-[70%] w-[80%]"
              />
            </Link>

            {/* Nav items */}
            <div className="hidden md:flex items-center justify-center xl:gap-[30px] lg:gap-[20px] md:gap-[8px]">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={clsx(
                      "py-[10px] px-[24px] rounded-[10px]",
                      isActive
                        ? "bg-grey08 border border-grey15"
                        : "hover:bg-grey08/40"
                    )}
                  >
                    <span className="text-white xl:text-lg lg:text-[16px] md:text-[14px] font-medium">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Contact button */}
            <Link to="/contact" className="hidden md:flex">
              <Button1 text="Contact Us" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoMdClose className="size-8 text-white" />
              ) : (
                <HiOutlineMenuAlt3 className="size-8 text-white" />
              )}
            </button>
          </div>

          {/* Mobile nav */}
          {isMenuOpen && (
            <div className="md:hidden rounded-lg p-5 flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-white xl:text-lg lg:text-[16px] font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
