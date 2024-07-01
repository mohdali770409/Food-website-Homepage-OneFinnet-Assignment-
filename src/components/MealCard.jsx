import React from "react";
import { FaArrowRight } from "react-icons/fa";

const MealCard = ({ name, pic }) => {
  if (name.length > 20) {
    name = name.slice(0, 20);
    name = name + "...";
  }

  return (
    <div className="flex h-[60px] justify-between w-full space-x-5">
      <div className="flex items-center ">
        <img
          src={pic}
          alt="img"
          className="h-[70px] w-[70px] rounded-full mr-2"
        />

        <div className="flex flex-col justify-between ">
          <h1 className="font-semibold text-lg">{name}</h1>
          <div className="p-[2px]  border-b-2  border-dashed  border-[#ECECEC] "></div>
          <p className="text-xs"> Lorem ipsum, dolor sit amet consectetur...</p>
        </div>
      </div>
      <div className="flex flex-col justify-between ">
        <p className="text-[#345333] font-semibold text-lg">$8.45</p>
        <button className="text-[#345333]">
          SHOP NOW <FaArrowRight className="inline ml-1" />{" "}
        </button>
      </div>
    </div>
  );
};

export default MealCard;
