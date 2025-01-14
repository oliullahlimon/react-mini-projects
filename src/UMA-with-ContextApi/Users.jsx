import React from "react";
import User from "./User";
import styles from "./users.module.css";
import { useUserContext } from "./useUserContext";

const Users = () => {
  const { users, setUsers } = useUserContext(); // using custom hook
  return (
    <div className={styles.users}>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
