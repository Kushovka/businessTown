import { GoArrowUpRight } from "react-icons/go";
import { getItems } from '../../constants'

const Sub = () => {
  return (
    <section id="properties">
      <div className="max-w-full mx-auto md:p-0 sm:p-10 md:pb-[150px] sm:pb-[100px] pb-[50px] pt-[50px] px-[25px]">
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 items-center justify-between bg-grey08 border-[1px] border-grey15 rounded-[12px] md:rounded-none lg:px-5 lg:py-5 md:px-2 md:py-2 sm:py-5 sm:px-5 py-3 px-3 shadow-[0_0_0_10px_#191919]">
          {getItems.map((getItem, index) => (
            <div key={index}>
              <div className="relative bg-grey10 border-[1px] border-grey15 flex flex-col items-center justify-center 2xl:py-[40px] xl:py-[30px] 2xl:px-[10px] xl:px-[7px] lg:py-[20px] lg:px-[5px] md:py-[12px] md:px-[8px] sm:py-[10px] sm:px-[6px] py-[12px] px-[8px] rounded-[12px]  gap-5 cursor-pointer  group">
                <GoArrowUpRight className="absolute 2xl:size-8 xl:size-[26px] sm:size-[24px] size-[20px] top-2 right-2 text-grey30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 group-hover:text-white" />
                <div className="flex flex-col items-center justify-center gap-5">
                  <img
                    src={getItem.imgPath}
                    className="2xl:size-20 xl:size-[60px] lg:size-[50px] sm:size-[70px] size-[50px]"
                    alt={getItem.text}
                  />

                  <h1 className="2xl:w-[415px] xl:w-[315px] lg:w-[250px] md:w-[315px] sm:w-[315px] text-center 2xl:text-xl xl:text-base lg:text-sm sm:text-sm text-sm text-white font-semibold">
                    {getItem.text}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sub