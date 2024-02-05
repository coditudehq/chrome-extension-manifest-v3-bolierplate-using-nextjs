/* eslint-disable */

import React, { useState } from "react";

// import "../../../../styles/newTab.css";
import { FaSort } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import Pagination from "../pagination/pagination";
const Invoice = () => {
  const invoiceData = [
    {
      id: "#876115",
      billingDate: "7 Nov. 2023",
      plan: "Basic Plan",
      amount: "$200",
      status: "Paid",
    },
    {
      id: "#876115",
      billingDate: "7 Nov. 2023",
      plan: "Basic Plan",
      amount: "$200",
      status: "Paid",
    },
    {
      id: "#876115",
      billingDate: "7 Nov. 2023",
      plan: "Basic Plan",
      amount: "$200",
      status: "Paid",
    },
  ];
  const invoiceHeader = [
    {
      id: 1,
      title: "Invoice Id",
    },
    {
      id: 2,
      title: "Billing Date",
    },
    {
      id: 3,
      title: "Plan",
    },
    {
      id: 4,
      title: "Amount",
    },
    {
      id: 5,
      title: "Status",
    },
  ];
  const [invoice, setInvoice] = useState(invoiceData);

  return (
    <div className="w-full  flex justify-center items-center">
      <div className="w-[760px] h-[317px]   mt-7">
        <div className="mr-5 flex justify-between ">
          <div>
            <h3 style={{ fontSize: "17px", fontWeight: "400" }}>Invoice</h3>
            <p style={{ color: "#676767", fontFamily: "sans-serif" }}>
              Effortlessly handle your billing and invoices here.
            </p>
          </div>
          <button className="w-24 h-8 bg-[#19115d] rounded-full text-white font-Montserrat  text-sm leading-17 tracking-wide text-center">
            Download
          </button>
        </div>

        <div className="userTable">
          <table>
            <tr>
              {invoiceHeader?.map((item, index) => {
                return (
                  <th key={item.id}>
                    <div className="flex justify-center items-center gap-2">
                      {item.title} <FaSort />
                    </div>
                  </th>
                );
              })}
            </tr>
            {invoice?.map((invoice, index) => {
              return (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.billingDate}</td>
                  <td>{invoice.plan}</td>
                  <td>{invoice.amount}</td>
                  <td style={{ color: "#00962A", fontWeight: "600" }}>{invoice.status}</td>
                  <td>
                    <IoEllipsisVertical />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className="w-full mt-[20px] flex justify-center items-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
