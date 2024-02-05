import React from "react";
// import "../../../../styles/settings.css";

const Settings = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      {/* settign 1 */}
      <div className="flex justify-between items-center w-[762px]  mt-7">
        <div className="mr-5 flex flex-col ">
          <h3 style={{ fontSize: "17px", fontWeight: "400" }}>Settings</h3>
          <p style={{ color: "#676767", fontFamily: "sans-serif" }}>
            Customize your settings here.
          </p>
        </div>
        <div>
          <button className="w-24 h-8 bg-[#19115d] rounded-full text-white font-Montserrat font-semibold text-sm leading-17 tracking-wide text-center">
            Save
          </button>
        </div>
      </div>

      {/* setting 2 */}
      <div className="flex gap-10 items-center w-[762px]  mt-7">
        <span className="ms-3 text-sm font-medium text-[#19115D] ">Push Notification</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#19115D]"></div>
        </label>
      </div>

      {/* setting 3 */}

      <div className="flex gap-10 items-center w-[762px]  mt-7">
        <span className="ms-3 text-sm font-medium text-[#19115D] ">Theme Appearance</span>

        <div className="flex gap-2 items-center">
          <input
            checked
            id="default-radio-3"
            type="radio"
            value=""
            name="default-radio"
            // className="w-4 h-4 text-[#19115D] bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-[#19115D]">
            Default
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            id="default-radio-3"
            type="radio"
            value=""
            name="default-radio"
            // className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-[#19115D]">
            Light
          </label>
        </div>

        <div className="flex gap-2 items-center">
          <input
            id="default-radio-3"
            type="radio"
            value=""
            name="default-radio"
            // className="w-4 h-4 text-[#19115D] bg-gray-100 border-gray-300 focus:text-[#19115D]dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-[#19115D]">
            Dark
          </label>
        </div>
      </div>

      {/* setting 4 */}

      <div className="flex gap-10 items-center w-[762px]  mt-7">
        <span className="ms-3 text-sm font-medium text-[#19115D] ">Clock Format</span>
        <button className="w-24 h-8  border border-[#19115d]  text-[#19115d] rounded-full  hover:bg-[#EBF6FE] font-Montserrat font-semibold text-sm leading-17 tracking-wide text-center">
          Standard
        </button>

        <button className="w-24 h-8 bg-[#19115d] rounded-full text-white font-Montserrat font-semibold text-sm leading-17 tracking-wide text-center">
          24 Hour
        </button>
      </div>

      {/* setting 6 */}
      <div className="flex gap-10 items-center w-[762px]  mt-7">
        <span className="ms-3 text-sm font-medium text-[#19115D] ">Subscription</span>

        <button className="w-[180px] h-8 bg-[#19115d] rounded-full text-white font-Montserrat font-semibold text-sm leading-17 tracking-wide text-center">
          Cancel Subscription
        </button>
      </div>

      {/* setting 7 */}

      <div className="flex gap-10 items-center w-[762px]  mt-7">
        <span className="ms-3 text-sm font-medium text-[#19115D] ">Deactivate Account</span>

        <button className="w-24 h-8  border border-[#19115d]  text-[#19115d] rounded-full  hover:bg-[#EBF6FE] font-Montserrat font-semibold text-sm leading-17 tracking-wide text-center">
          Deactivate
        </button>
      </div>

      {/* settings 6 */}
    </div>
  );
};

export default Settings;
