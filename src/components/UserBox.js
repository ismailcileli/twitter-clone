import React from "react";
import pp from "../images/pp.png";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-700">
      <img src={pp} alt="Profile" className="w-11 h-11 rounded-full" />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">İsmail Çileli</span>
        <span className="text-sm text-gray-dark">@ismailcileli</span>
      </div>

      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
      </div>
    </div>
  );
};

export default UserBox;
