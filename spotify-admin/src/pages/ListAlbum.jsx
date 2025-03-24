import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";

const listAlbum = () => {
  const [data, setData] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);

      if (response.data.success && Array.isArray(response.data.albums)) {
        setData(response.data.albums);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setData([]);
    }
  };

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAlbums();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <p>All Albums List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Color</b>
          <b>Action</b>
        </div>
        {data?.map((item, index) => {
          return (
            <div
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
              key={index}
            >
              <img className="w-12" src={item.image} alt="" />
              <span>{item.name}</span>
              <span>{item.desc}</span>
              <input type="color" value={item.bgColor} readOnly  />
              <span
                onClick={() => removeAlbum(item._id)}
                className="cursor-pointer"
              >
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default listAlbum;
