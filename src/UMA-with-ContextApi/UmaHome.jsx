import React, { useState } from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import { v4 as uuidv4 } from "uuid";
import { UsersContext } from "./UsersContext";
import styles from "./uma.module.css";

const UmaHome = () => {
  const [users, setUsers] = useState([
    { id: uuidv4(), userName: "Oliullah" },
    { id: uuidv4(), userName: "Limon" },
  ]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div className={styles.container}>
        <h1>User Registration</h1>
        <NewUser />
        <Users />
      </div>
    </UsersContext.Provider>
  );
};

export default UmaHome;
