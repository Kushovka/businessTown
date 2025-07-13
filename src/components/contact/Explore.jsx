import Title from "./components/Title";
import img1 from "/images/contactExplore/img1.png";
import img2 from "/images/contactExplore/img2.png";
import img3 from "/images/contactExplore/img3.png";
import img4 from "/images/contactExplore/img4.png";
import img5 from "/images/contactExplore/img5.png";
import img6 from "/images/contactExplore/img6.png";

import abstract from "/images/contactExplore/abstract.png";

const Explore = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:pb-[150px] sm:pb-[100px] pb-[50px] pt-[50px] px-[25px] lg:gap-[80px] md:gap-[30px] sm:gap-[50px] gap-[35px]">
        <div className="flex xl:hidden">
          <Title
            title="Explore Estatein's World"
            text="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
          />
        </div>
        <div className="relative z-30 grid grid-cols-4 w-full overflow-hidden gap-[20px] border border-grey15 md:p-[80px] sm:p-[50px] p-[15px] rounded-[12px]">
          <img
            src={abstract}
            className="absolute top-0 left-0 z-10 w-full h-full object-cover"
            alt=""
          />
          <img className=" w-full z-30 sm:col-span-2 col-span-4" src={img1} alt="" />
          <img className=" w-full z-30 sm:col-span-2 col-span-4" src={img2} alt="" />
          <img className="w-full z-30 sm:col-span-2 col-span-4" src={img3} alt="" />
          <img className="w-full z-30 col-span-1 hidden sm:block" src={img4} alt="" />
          <img className="w-full z-30 col-span-1 hidden sm:block" src={img5} alt="" />
          <div className="hidden xl:block xl:col-span-2 lg:col-span-2 w-full 2xl:translate-y-[76px] xl:translate-y-[30px] lg:translate-y-[20px] z-30 items-center justify-center">
            <Title
              title="Explore Estatein's World"
              text="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
            />
          </div>
          <img className="xl:col-span-2 col-span-4 w-full z-30" src={img6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
