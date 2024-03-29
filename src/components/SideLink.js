import React from "react";

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
  const isActive = active === name;
  return (
    <li className="group" onClick={() => onMenuItemClick(name)}>
      <a
        href={name.toLowerCase()}
        className="cursor-pointer block text-xl pointer-events-none"
      >
        <div className="inline-block">
          <div
            className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-4 pr-8 py-4
          
          ${isActive ? `text-primary-base font-bold` : ""}

          `}
          >
            <Icon />
            <span className="ml-4 ">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
