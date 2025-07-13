import abstract from "/images/homeCompTitle/Abstract.svg";

const Title = ({ title, text }) => {
  return (
    <div>
      <img
        src={abstract}
        className="lg:size-16 md:size-12 sm:size-10 size-16 absolute sm:-translate-y-14 -translate-y-[40px] -translate-x-5"
        alt="abstract"
      />
      <div className="relative w-full flex flex-col gap-6">
        <h1 className="text-white xl:text-6xl lg:text-[46px] md:text-[36px] sm:text-[28px] text-[36px] font-semibold">
          {title}
        </h1>
        <p className="text-grey60 xl:text-lg text-base font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Title;
