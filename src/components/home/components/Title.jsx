import abstract from "/images/homeCompTitle/Abstract.svg";

const Title = ({ title, text, textBtn }) => {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-between w-full px-8 md:px-12 md:py-20 sm:px-10 sm:py-16 py-14">
        <img
          src={abstract}
          className="lg:size-16 md:size-12 sm:size-10 size-16 absolute sm:-translate-y-20 -translate-y-[87px] -translate-x-5"
          alt="abstract"
        />
        <div className="relative lg:w-[80%] md:w-[65%] sm:w-[65%] w-full sm:space-y-5 space-y-1">
          <h1 className="2xl:text-5xl xl:text-[38px] lg:text-[30px] md:text-[24px] sm:text-[20px] text-[28px] text-white font-semibold">{title}</h1>
          <p className="2xl:text-lg xl:text-base lg:text-base text-sm text-grey60 font-medium">{text}</p>
        </div>
        <div className="sm:flex hidden items-center justify-center bg-grey10 border-[1px] border-grey15 2xl:py-[18px] xl:py-[14px] 2xl:px-[24px] xl:px-[20px] lg:py-[12px] lg:px-[18px] md:py-[10px] md:px-[16px] sm:py-[10px] sm:px-[16px] rounded-[10px]  duration-300 hover:bg-grey15 transition-all">
          <button className="text-white 2xl:text-lg md:text-[14px] font-medium ">{textBtn}</button>
        </div>
      </div>
    </section>
  );
};

export default Title;
