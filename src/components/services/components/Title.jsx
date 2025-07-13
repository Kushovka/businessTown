import abstract from "/images/homeCompTitle/Abstract.svg";

const Title = ({ title, text }) => {
  return (
    <div>
      <img
        src={abstract}
        className="lg:size-16  md:size-12 sm:size-10 size-14 absolute sm:-translate-y-7 md:-translate-y-12 -translate-y-[40px] -translate-x-5"
        alt="abstract"
      />
      <div className="relative w-[85%] flex flex-col gap-6">
        <h1 className="text-white xl:text-6xl lg:text-[46px] md:text-[36px] sm:text-[28px] text-[30px] font-semibold">
          {title}
        </h1>
        <p className="text-grey60 xl:text-lg text-base font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Title;
