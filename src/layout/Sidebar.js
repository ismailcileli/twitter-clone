import React, { useState } from "react";
import twitterLogo from "../images/twitterLogo.svg";
import SideLink from "../components/SideLink";
import {
  ExploreIcon,
  HomeIcon,
  NotificationIcon,
  MessagesIcon,
  BookmarksIcon,
  ProfileIcon,
  ListIcon,
  MoreIcon,
} from "../icons/Icon";
import UserBox from "../components/UserBox";

const sideLink = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notification",
    icon: NotificationIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "List",
    icon: ListIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const handleMenuItemClick = (name) => {
    setActive(name); 
  };
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between px-2 w-72 ">
      <div>
        <div className=" mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-primary-light">
          <img src={twitterLogo} alt="Twitter" className="w-7 h-7" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLink.map( ({ name, icon}) => (
              <SideLink key = {name} name = {name} Icon = {icon} active = {active} onMenuItemClick={handleMenuItemClick}/>
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full  py-3 px-8 w-11/12 transform transition-colors duration-200">
          Tweet
        </button>
      </div>
      <UserBox/>
    </div>
  );
};

export default Sidebar;
