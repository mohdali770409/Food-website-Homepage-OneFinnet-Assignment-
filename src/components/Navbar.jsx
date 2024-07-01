import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="w-full max-w-[1200px] mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 z-50 px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl cursor-pointer">
            GO <span className="font-bold">FOOD</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <div className="cursor-pointer">
              Home <IoIosArrowDown className="inline ml-1 " />
            </div>
            <div className="cursor-pointer">
              Groceries <IoIosArrowDown className="inline ml-1 " />
            </div>
            <div className="cursor-pointer">
              Pages <IoIosArrowDown className="inline ml-1 " />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-white cursor-pointer">
              Connect with us <FaArrowRight className="inline ml-1" />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#4D6649] cursor-pointer">
              <BiMessageRounded />
            </div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#4D6649] cursor-pointer">
              <RxPerson className="text-xl" />
            </div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#4D6649] cursor-pointer">
              <CiHeart className="text-xl" />
            </div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#4D6649] cursor-pointer">
              <CiShoppingCart className="text-xl" />
            </div>
          </div>
          <div className="block md:hidden">
            <button
              className="text-black md:text-white"
              onClick={() => setOpen(!open)}
            >
              <GiHamburgerMenu className="text-xl" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden bg-white shadow-lg rounded-lg p-4 mt-2">
            <div className="flex flex-col space-y-4">
              <div>
                Home <IoIosArrowDown className="inline ml-1 cursor-pointer" />
              </div>
              <div>
                Groceries{" "}
                <IoIosArrowDown className="inline ml-1 cursor-pointer" />
              </div>
              <div>
                Pages <IoIosArrowDown className="inline ml-1 cursor-pointer" />
              </div>
              <div className="text-black md:text-white cursor-pointer">
                Connect with us <FaArrowRight className="inline ml-1" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
