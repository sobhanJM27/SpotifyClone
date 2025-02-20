import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#003A10] min-h-screen pl-[4vw]">
      <img
        className="mt-5 mr-10 w-[150px] hidden sm:block"
        src={assets.logo}
        alt=""
      />
      <img
        className="mt-5 w-[50px] mr-5 sm:hidden block"
        src={assets.logo_small}
        alt=""
      />
      <div className="flex flex-col gap-5 mt-10">
        <NavLink
          to="/add-song"
          className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[12px] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium"
        >
          <img className="w-5" src={assets.add_song} alt="" />
          <span className="hidden sm:block">Add Song</span>
        </NavLink>
        <NavLink
          to="/list-song"
          className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[12px] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium"
        >
          <img className="w-5" src={assets.song_icon} alt="" />
          <span className="hidden sm:block">List Song</span>
        </NavLink>
        <NavLink
          to="/add-album"
          className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[12px] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium"
        >
          <img className="w-5" src={assets.add_album} alt="" />
          <span className="hidden sm:block">Add Album</span>
        </NavLink>
        <NavLink
          to="/list-album"
          className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[12px] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium"
        >
          <img className="w-5" src={assets.album_icon} alt="" />
          <span className="hidden sm:block">List Album</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
