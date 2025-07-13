import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating = 0, max = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center 2xl:gap-1 lg:gap-[8px] md:gap-[3px] gap-1 text-yellow-400 ">
      {[...Array(fullStars)].map((_, i) => (
        <div className="border-[1px] border-grey15 bg-grey10 2xl:p-[10px] xl:p-[9px] lg:p-[6px] md:p-[4px] sm:p-[3px] p-[10px] rounded-full">
          <FaStar className="2xl:size-6 xl:size-[20px] lg:size-[20px] md:size-[18px] sm:size-[18px] size-6" key={`full-${i}`} />
        </div>
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt className="2xl:size-6 xl:size-[20px] lg:size-[18px] md:size-[16px] sm:size-[12px] size-6" key="half" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <div className="border-[1px] border-grey15 bg-grey10 p-[10px] rounded-full">
          <FaRegStar className="2xl:size-6 xl:size-[20px] lg:size-[18px] md:size-[16px] sm:size-[12px] size-6" key={`empty-${i}`} />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
