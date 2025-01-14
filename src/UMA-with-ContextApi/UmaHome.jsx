import React, { useState } from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import { v4 as uuidv4 } from "uuid";
import { UsersContext } from "./UsersContext";

const UmaHome = () => {
  const [users, setUsers] = useState([
    { id: uuidv4(), userName: "Oliullah" },
    { id: uuidv4(), userName: "Limon" },
  ]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div>
        <NewUser />
        <Users />
      </div>
    </UsersContext.Provider>
  );
};

export default UmaHome;
