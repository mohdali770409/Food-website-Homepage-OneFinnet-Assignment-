// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import Navbar from "./Navbar";
// const HeroSection = () => {
//   return (
//     <>

//       <div className="h-[100vh] flex relative max-w-[1300px] mx-auto ">
//         {/* two halfs  */}
//         <div className="w-[55%] bg-[#F2F1EC] flex justify-center items-center">
//           <div className="w-[90%] flex flex-col gap-4 mx-auto">
//             <div className="text-[#313131] font-bold text-xl">
//               Discount upto 20%
//             </div>
//             <div className=" text-[#313131] text-5xl font-semibold">
//               Buy Fresh And Organic <br /> Grocery Food
//             </div>
//             <div className="max-w-[200px] sm:max-w-[400px] md:max-w-[450px] text-wrap text-[#E0DBD5] font-semibold">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
//               accusantium blanditiis iure deserunt quibusdam ad?
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] place-self-start place-items-center max-w-[500px]">
//               <button className="px-4 rounded-3xl py-2 bg-[#345333] text-white font-medium">
//                 SHOP NOW <FaArrowRight className="inline ml-2" />{" "}
//               </button>
//               <div>
//                 <p className="italic text-2xl font-semibold">35k +</p>
//                 <p className="text-[#989898] font-semibold">Users</p>
//               </div>
//               <div>
//                 <p className="italic text-2xl font-semibold">18k +</p>
//                 <p className="text-[#989898] font-semibold">Products</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* 2nd half  */}
//         <div className="w-[45%] bg-[#345333] ">
//           <div className="w-[500px] h-full flex items-center ml-[-150px]">
//             <img src="/vegetable.png" alt="" className="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <div className="h-[100vh] flex flex-col pt-20 md:pt-0 md:flex-row relative max-w-[1300px] mx-auto  ">
        {/* First half */}
        <div className="w-full md:w-[55%] bg-[#F2F1EC] flex justify-center items-center">
          <div className="w-[90%] flex flex-col gap-4 mx-auto">
            <div className="text-[#313131] font-bold text-xl">
              Discount up to 20%
            </div>
            <div className="text-[#313131] text-4xl md:text-5xl font-semibold">
              Buy Fresh And Organic <br /> Grocery Food
            </div>
            <div className="max-w-[200px]  sm:max-w-[400px] md:max-w-[450px] text-wrap text-[#E0DBD5] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              accusantium blanditiis iure deserunt quibusdam ad?
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 w-[90%] place-self-start place-items-center max-w-[500px] gap-4">
              <button className="px-4 rounded-3xl py-2 bg-[#345333] text-white font-medium">
                SHOP NOW <FaArrowRight className="inline ml-2" />
              </button>
              <div>
                <p className="italic text-2xl font-semibold">35k +</p>
                <p className="text-[#989898] font-semibold">Users</p>
              </div>
              <div>
                <p className="italic text-2xl font-semibold">18k +</p>
                <p className="text-[#989898] font-semibold">Products</p>
              </div>
            </div>
          </div>
        </div>
        {/* Second half */}
        <div className="w-full md:w-[45%] bg-[#345333] flex justify-center items-center">
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex justify-center items-center md:ml-[-60%] mt-20">
            <img
              src="/vegetable.png"
              alt="Vegetables"
              className=" max-w-full max-h-full "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
