import icon from "/images/aboutTeam/Icon.svg";

const Message = () => {
  return (
    <div className="flex items-center justify-between border border-grey15 bg-grey10 rounded-[100px] pr-[14px] pt-[14px] pb-[14px] pl-[24px] w-full">
      <h1 className="text-[18px] text-white font-medium">Say Hello 👋</h1>
      <div className="bg-purple60 p-[10px] rounded-full">
        <img src={icon} className="w-[24px]" alt="" />
      </div>
    </div>
  );
};

export default Message;
