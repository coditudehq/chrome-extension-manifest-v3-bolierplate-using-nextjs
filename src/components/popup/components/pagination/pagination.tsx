/* eslint-disable */

import React from "react";
import { NextSvgIcons, PrevSvgIcons } from "../svgIcons/svgIcons";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            // href="#"
            className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300  hover:bg-[#EBF6FE] hover:text-blue-700 dark:border-gray-700  dark:text-white"
          >
            <button className="sr-only">Previous</button>
            <PrevSvgIcons />
            <PrevSvgIcons />
          </button>
        </li>
        <li>
          <button
            // href="#"
            className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300  hover:bg-[#EBF6FE] hover:text-blue-700 dark:border-gray-700  dark:text-white"
          >
            <button className="sr-only">Previous</button>
            <PrevSvgIcons />
          </button>
        </li>
        <li>
          <button
            // href="#"
            aria-current="page"
            className="z-10 bg-[#19115D] text-white flex items-center justify-center px-3 h-8 leading-tight  border border-blue-300  hover:bg-[#EBF6FE] hover:text-blue-700 dark:border-gray-700  dark:text-white"
          >
            1
          </button>
        </li>
        <li>
          <button
            // href="#"
            aria-current="page"
            style={{ color: " #19115D" }}
            className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300  hover:bg-[#EBF6FE] hover:text-blue-700 dark:border-gray-700  dark:text-white"
          >
            2
          </button>
        </li>
        <li>
          <button
            // href="#"
            aria-current="page"
            style={{ color: " #19115D" }}
            className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300  hover:bg-[#EBF6FE] hover:text-blue-700 dark:border-gray-700  dark:text-white"
          >
            3
          </button>
        </li>
        <li>
          <button
            // href="#"
            className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300  hover:bg-[#EBF6FE] hover:text-blue-700 dark:border-gray-700  dark:text-white"
          >
            <a className="sr-only">Next</a>
            <NextSvgIcons />
          </button>
        </li>
        <li>
          <button
            style={{ color: " #19115D" }}
            // href="#"
            className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300  hover:bg-[#EBF6FE] hover:text-blue-700 dark:border-gray-700  dark:text-white"
          >
            <a className="sr-only">Next</a>

            <NextSvgIcons />
            <NextSvgIcons />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
