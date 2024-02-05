/* eslint-disable */
"use client";
import React, { useRef, useState } from "react";

// import "../../../../styles/newTab.css";
import { FaFile } from "react-icons/fa";
import { labelStyle } from "../constant";

const AddUser = () => {
  const fileInputRef = useRef<any>(null);
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleLabelClick: any = () => {
    fileInputRef?.current.click();
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[762px] h-[317px]  mt-7">
        <div className="mr-5 flex flex-col ">
          <h3 style={{ fontSize: "17px", fontWeight: "400" }}>Add User</h3>
          <p style={{ color: "#676767", fontFamily: "sans-serif" }}>
            You can effortlessly manage users here.
          </p>
        </div>

        <div className="w-[762px] h-[421px]  mt-7">
          <div className="flex  gap-6 w-72">
            <div className="relative h-11 w-full min-w-[230px]">
              <input
                placeholder="John"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className={labelStyle}>
                First Name
                <span
                  style={{
                    position: "absolute",
                    color: "red",
                    top: "-4px",
                    left: "70px",
                  }}
                >
                  *
                </span>
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[230px]">
              <input
                placeholder="Deo"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className={labelStyle}>
                Last Name
                <span
                  style={{
                    position: "absolute",
                    color: "red",
                    top: "-4px",
                    left: "70px",
                  }}
                >
                  *
                </span>
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[230px]">
              <input
                placeholder="johnDoe@gmail.com"
                type="email"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className={labelStyle}>
                Email
                <span
                  style={{
                    position: "absolute",
                    color: "red",
                    top: "-4px",
                    left: "39px",
                  }}
                >
                  *
                </span>
              </label>
            </div>
          </div>

          {/* select box */}
          <div className="flex  gap-6 mt-[66px] w-72">
            <div className="relative h-11 w-full min-w-[230px]">
              <select
                aria-placeholder="dddddd"
                id="underline_select"
                className="peer h-full w-[230px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                <option>Rewa</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <label className={labelStyle}>
                City
                <span
                  style={{
                    position: "absolute",
                    color: "red",
                    top: "-4px",
                    left: "70px",
                  }}
                >
                  *
                </span>
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[230px]">
              <select
                aria-placeholder="dddddd"
                id="underline_select"
                className="peer h-full w-[230px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                <option>Madhya Pradesh</option>
                <option value="US">Madhya Pradesh</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <label className={labelStyle}>
                State
                <span
                  style={{
                    position: "absolute",
                    color: "red",
                    top: "-4px",
                    left: "70px",
                  }}
                >
                  *
                </span>
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[230px]">
              <select
                aria-placeholder="dddddd"
                id="underline_select"
                className="peer h-full w-[230px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                <option>Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <label className={labelStyle}>
                Country
                <span
                  style={{
                    position: "absolute",
                    color: "red",
                    top: "-4px",
                    left: "70px",
                  }}
                >
                  *
                </span>
              </label>
            </div>
          </div>

          {/* date picker */}
          <div className="flex gap-6 mt-[66px] w-72 date-picker">
            <div className="relative flex h-11 w-full min-w-[230px]">
              <div className="flex justify-between items-center h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                <div>
                  {selectedFile ? <span>{selectedFile?.name}</span> : <span>Upload Image</span>}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  //   placeholder="upload Image"
                  className="peer  sr-only"
                  onChange={handleFileChange}
                />
                <label className="mr-2" onClick={handleLabelClick} style={{ cursor: "pointer" }}>
                  <FaFile />
                </label>
              </div>
            </div>
            <div className="relative h-11 w-full min-w-[230px]">
              <input
                type="date"
                // name="dateofbirth"
                // id="dateofbirth"
                placeholder="Select Birth Date"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
          </div>

          {/* bottom buttons */}

          <div className="flex gap-6  w-full  justify-end mt-[95px] date-picker">
            <button className="w-24 h-8  border border-[#19115d]  text-[#19115d] rounded-full  hover:bg-[#EBF6FE] font-Montserrat font-semibold text-sm leading-17 tracking-wide text-center">
              Back
            </button>

            <button className="w-24 h-8 bg-[#19115d] rounded-full text-white font-Montserrat font-semibold text-sm leading-17 tracking-wide text-center">
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
