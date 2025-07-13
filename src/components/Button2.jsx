import clsx from "clsx";

const Button2 = ({ text, className }) => {
  return (
    <button
      className={clsx(
        "bg-purple60 xl:py-[18px] xl:px-6 lg:py-[14px] lg:px-[20px] md:py-[12px] md:px-[18px] sm:py-[12px] sm:px-[18px] py-[12px] px-[18px] rounded-[10px] z-20 text-white xl:text-lg lg:text-[16px] sm:text-[12px] font-medium hover:bg-purple60/70 transition-all duration-300",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button2;
