import React from "react";

const Modal = () => {
  return (
    <div
      data-popover
      id="popover-bottom"
      role="tooltip"
      className="absolute w-[350px] mr-[19px] mt-[12px] z-10  h-[200px] text-sm text-gray-500 transition-opacity duration-300 bg-[#EBF6FE]  rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 flex flex-col justify-between "
    >
      <div className="flex h-[165px]">
        <div
          className="w-[150px] flex flex-col items-center justify-center"
          style={{ borderRight: "1px solid #000" }}
        >
          <img
            className="w-20 h-20 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <h3
            style={{
              color: "#1F3543",
              marginTop: "10px",
              fontWeight: "600",
            }}
          >
            User{" "}
          </h3>
          <p style={{ fontSize: "12px" }}>Coditude</p>
        </div>
        <div style={{ padding: "25px 25px", fontWeight: "500" }}>
          <h3
            style={{
              color: "#1F3543",
              marginTop: "10px",
              fontWeight: "500",
            }}
          >
            My Profile
          </h3>
          <h3
            style={{
              color: "#1F3543",
              marginTop: "10px",
              fontWeight: "500",
            }}
          >
            Customer Support{" "}
          </h3>
          <h3
            style={{
              color: "#1F3543",
              marginTop: "10px",
              fontWeight: "500",
            }}
          >
            Settings{" "}
          </h3>
        </div>
      </div>
      <button className="w-full h-8 bg-[#19115d] p-1 text-white font-Montserrat text-sm leading-17 tracking-wide text-center">
        Logout
      </button>
      <div data-popper-arrow></div>
    </div>
  );
};

export default Modal;
