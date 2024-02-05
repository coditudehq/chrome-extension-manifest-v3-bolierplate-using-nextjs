import React, { useState } from "react";
import TopComponent from "./topComponte/topComponent";
import UserTable from "./userTable/UserTable";
import AddUser from "./addUser/addUser";
import Settings from "./settings/settings";
import Billings from "./billings/billings";

const NewPopup = () => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className="w-[800px] h-[600px]">
      <TopComponent setTabIndex={setTabIndex} />
      {tabIndex === 1 && <UserTable />}
      {tabIndex === 2 && <AddUser />}
      {tabIndex === 3 && <Settings />}
      {tabIndex === 4 && <Billings />}
    </div>
  );
};

export default NewPopup;
