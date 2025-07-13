
const GetInTouch = () => {
  return (
    <section className="relative border-b border-grey15 overflow-hidden">
      <div className="absolute top-0 left-0 w-[100px] h-full bg-white blur-[200px] rounded-full opacity-50 pointer-events-none z-0 pulse-blur" />
      <div className="container mx-auto flex flex-col justify-between md:pt-[150px] md:pb-[150px] sm:pt-[100px] sm:pb-[100px] pb-[50px] pt-[50px] px-[25px]">
        <div className="w-[75%]"> 
          <h1 className="md:text-[48px] sm:text-[34px] text-[30px] text-white font-semibold">
            Get in Touch with Estatein
          </h1>
          <p className="md:text-[18px] sm:text-[16px] text-[14px] text-grey60 font-medium">
            Welcome to Estatein's Contact Us page. We're here to assist you with
            any inquiries, requests, or feedback you may have. Whether you're
            looking to buy or sell a property, explore investment opportunities,
            or simply want to connect, we're just a message away. Reach out to
            us, and let's start a conversation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
