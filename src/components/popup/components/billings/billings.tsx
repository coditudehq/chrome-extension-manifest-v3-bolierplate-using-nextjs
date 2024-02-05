/* eslint-disable */

import React from "react";

// import "../../../../styles/cards.css";
import Invoice from "../invoice/invoice";
import { masterCard } from "../constant";

const Billings = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="w-[762px]   mt-7">
        <div className="mr-5 flex flex-col ">
          <h3 style={{ fontSize: "17px", fontWeight: "400" }}>Billing</h3>
          <p style={{ color: "#676767", fontFamily: "sans-serif" }}>
            Effortlessly handle your billing and invoices here.
          </p>
        </div>
      </div>

      <div className="w-[762px] flex gap-3  mt-7">
        {/* cards 1 */}
        <div className="w-[388px]  cards h-[150px]">
          <div className="flex p-2 justify-between items-center">
            <h3 className="cards-title ml-2">Current Plan Summary</h3>
            <button className="w-24 mr-2 h-8 bg-[#19115d] rounded-full text-white font-Montserrat  text-sm leading-17 tracking-wide text-center">
              Upgrade
            </button>
          </div>
          <hr />

          {/* cards 1 */}
          <div className="plans-details w-full mt-5 flex justify-around">
            <div className="plan">
              <h3>Plan Name</h3>
              <p>Basic</p>
            </div>

            <div className="plan">
              <h3>Billing Cycle</h3>
              <p>Monthly</p>
            </div>

            <div className="plan">
              <h3>Plan Cost </h3>
              <p>$200</p>
            </div>
          </div>
          {/* cards 2 */}
        </div>

        {/* card 2 */}
        <div className="w-[388px] cards h-[150px]">
          <div className="flex p-2 justify-between items-center">
            <h3 className="cards-title ml-2">Payment Method</h3>
          </div>
          <hr />

          <div
            className="plans-details justify-between w-full mt-5 flex "
            style={{
              padding: "10px",
              backgroundColor: "#EAEDED",
              width: "90%",
              margin: "auto",
              borderRadius: "3px",
              marginTop: "4px",
            }}
          >
            <div className="plan gap-2 flex">
              <img
                style={{ width: "24px", height: "14px", marginTop: "10px" }}
                src={masterCard}
                alt="master-card"
              />
              <div>
                <p>Master Card</p>
                <h3 style={{ fontSize: "17px" }}>**** **** **** 2023</h3>
                <h3 style={{ lineHeight: "0" }}>Expiry on 08/2026</h3>
              </div>
            </div>
            <button className="w-24 h-8  border border-[#19115d]  text-[#19115d] rounded-full  hover:bg-[#EBF6FE] font-Montserrat  text-sm leading-17 tracking-wide text-center">
              Change
            </button>
          </div>
        </div>
      </div>

      <Invoice />
    </div>
  );
};

export default Billings;
