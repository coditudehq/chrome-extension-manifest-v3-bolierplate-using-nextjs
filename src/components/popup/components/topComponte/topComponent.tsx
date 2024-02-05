/* eslint-disable */

import React, { useState } from "react";
// import "../../../../styles/newTab.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import Modal from "../modals/modal";

const TopComponent = ({ setTabIndex }: any) => {
  const navItems = [
    {
      tabId: 1,
      title: "Users",
    },
    {
      tabId: 2,
      title: "Add-User",
    },
    {
      tabId: 3,
      title: "Settings",
    },
    {
      tabId: 4,
      title: "Billings",
    },
  ];
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setPopoverOpen(!isPopoverOpen);
  };
  const handleEnterKeyPress = (event: any) => {
    if (event.key === "Enter") {
      // Perform the action you want when Enter is pressed
      alert("Enter key pressed!");
    }
  };

  return (
    <div>
      <div className="w-full h-[55px]  flex justify-between items-center ">
        <div className="logo-container flex items-center gap-12 ml-5">
          <div className="logo">
            <h3 className="text-[#333333] font-poppins text-[26px] font-semibold leading-33 tracking-normal text-center">
              GenAI-2024
            </h3>
          </div>
          <div className="nav-links flex gap-3">
            {navItems?.map((items, index) => {
              return (
                <button
                  key={items.tabId}
                  className="hover:bg-[#EBF6FE]  h-[50px] font-poppin text-[17px] font-medium leading-15 tracking-normal text-left hoverBtn"
                  onClick={() => {
                    setTabIndex(items.tabId);
                  }}
                >
                  {items.title}
                </button>
              );
            })}
          </div>
        </div>

        <div
          onKeyPress={handleEnterKeyPress}
          className="flex hover:bg-[#EBF6FE] items-center  gap-4"
          role="presentasion"
          onClick={handleButtonClick}
        >
          <img
            className="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />

          <div className="hover:bg-[#EBF6FE] font-medium flex items-center justify-center flex-col">
            <div className="font-poppin text-base  leading-5 font-semibold tracking-normal text-left cursor-pointer">
              User
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 font-montserrat font-medium leading-4 tracking-normal text-left cursor-pointer">
              Coditude
            </div>
          </div>

          <button style={{ fontSize: "28px" }} type="button" className=" mr-2">
            <RiArrowDropDownLine />
          </button>
        </div>
      </div>
      <hr />
      <div className="w-full flex justify-end">{isPopoverOpen && <Modal />}</div>
    </div>
  );
};

export default TopComponent;
