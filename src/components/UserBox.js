import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-700">
      <img src="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/84326163_200631494345942_6684260544817397760_n.jpg?_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=uN4FvplIekIAX8-2TH0&edm=AP_V10EBAAAA&ccb=7-4&oh=21aa26cb8e07683e2b18fb6c5de7da1a&oe=612C6102&_nc_sid=4f375e" alt="Profile" className="w-11 h-11 rounded-full" />
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
