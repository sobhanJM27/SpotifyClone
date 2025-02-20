import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import { useState } from "react";
import { useEffect } from "react";

const DisplayAlbum = ({ album }) => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState("");
  const { playWithId, albumsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    albumsData.map((item) => {
      if (item.id === id) {
        setAlbumData(item);
      }
    });
  });

  return albumData ? (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <span>Playlist</span>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <span className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>
            <b className="pl-2">• 1,323,154</b> likes
            <b className="pl-2">• 50 songs,</b> about 2 hr 30 min
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <span>
          <b className="mr-4">#</b>Title
        </span>
        <span>Album</span>
        <span className="hidden sm:block">Date Added</span>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData
        .filter((item) => item.album === album.name)
        .map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
            onClick={() => playWithId(item._id)}
          >
            <span className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-10 mr-5" src={item.image} alt="" />
              {item.name}
            </span>
            <span className="text-[15px]">{albumData.name}</span>
            <span className="text-[15px] hidden sm:block">5 days ago</span>
            <span className="text-[15px] text-center">{item.duration}</span>
          </div>
        ))}
    </>
  ) : null;
};

export default DisplayAlbum;
