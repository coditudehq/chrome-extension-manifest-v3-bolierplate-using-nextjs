/* eslint-disable */

import React, { useEffect, useState } from "react";
// import "../../../../styles/newTab.css";
import { FaSort } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Pagination from "../pagination/pagination";
const usersData = [
  {
    id: 115,
    name: "BN Garg",
    email: "bngarg1@gmail.com	",
    city: "Rewa",
    state: "Madhya Pradesh",
    country: "India",
    loginMethod: "google",
  },
  {
    id: 116,
    name: "Sachin",
    email: "sachin@gmail.com	",
    city: "Pune",
    state: "Maharastra",
    country: "India",
    loginMethod: "google",
  },
  {
    id: 117,
    name: "John",
    email: "johndeo@gmail.com	",
    city: "Pune",
    state: "Maharastra",
    country: "Indea",
    loginMethod: "google",
  },
];
const userHeader = [
  {
    id: 1,
    title: "Id",
  },
  {
    id: 2,
    title: "Name",
  },
  {
    id: 3,
    title: "Personal Email",
  },
  {
    id: 4,
    title: "City",
  },
  {
    id: 5,
    title: "State",
  },
  {
    id: 6,
    title: "Country",
  },
  {
    id: 7,
    title: "Login Using",
  },
];
const UserTable = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    if (search.length > 0) {
      const searchedData: any = usersData.filter((elm) => {
        return (
          elm.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          elm.email.toLowerCase().includes(search.toLocaleLowerCase()) ||
          String(elm.id) === search.toLocaleLowerCase()
        );
      });

      setUsers(searchedData);
    } else {
      setUsers(usersData);
    }
  }, [search]);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[762px] h-[317px]  mt-7">
        <div className="mr-5 flex flex-col ">
          <h3 style={{ fontSize: "17px", fontWeight: "400" }}>Users</h3>
          <p style={{ color: "#676767", fontFamily: "sans-serif" }}>
            Use search to check on the user records.
          </p>
        </div>

        <div className="flex  justify-center items-center gap-3 mt-5">
          <div className="search-box  flex justify-center items-center">
            <span className="ml-3">
              <IoSearch />
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ outline: "none", border: "none", marginLeft: "10px" }}
              className="w-full"
              type="text"
              placeholder="Search by Id , name or email "
            />
          </div>
          <button className="search-btn">Search</button>
        </div>

        <div className="userTable">
          <table>
            <tr>
              {userHeader?.map((item, index) => {
                return (
                  <th>
                    <div className="flex justify-center items-center gap-2">
                      {item.title} <FaSort />
                    </div>
                  </th>
                );
              })}
            </tr>
            {users?.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>{user.country}</td>
                  <td>{user.loginMethod}</td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className="w-full mt-[100px] flex justify-center items-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default UserTable;
