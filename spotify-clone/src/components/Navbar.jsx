import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
            onClick={() => navigate(-1)}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
            onClick={() => navigate(1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </span>
          <span className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </span>
          <span className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            S
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </span>
        <span className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </span>
        <span className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </span>
      </div>
    </>
  );
};

export default Navbar;
