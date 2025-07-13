const Elevate = () => {
  return (
    <section  id="valuation" className="relative border-b border-grey15 overflow-hidden">
      <div className="absolute top-0 left-0 w-[100px] h-full bg-white blur-[200px] rounded-full opacity-50 pointer-events-none z-0 pulse-blur" />
      <div className="container mx-auto flex flex-col justify-between md:pt-[150px] md:pb-[150px] sm:pt-[100px] sm:pb-[100px] pb-[50px] pt-[50px] px-[25px]">
        <div className="sm:w-[75%] w-full">
          <h1 className="md:text-[48px] sm:text-[34px] text-[30px] text-white font-semibold">
            Elevate Your Real Estate Experience
          </h1>
          <p className="md:text-[18px] sm:text-[16px] text-[14px] text-grey60 font-medium">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Elevate;
