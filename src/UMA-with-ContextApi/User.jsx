import React from "react";
import styles from "./user.module.css";
import { useUserContext } from "./useUserContext";

const User = ({ id, userName }) => {
  const { users, setUsers } = useUserContext(); // using custom hook

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div className={styles.user}>
      <h1>{id}</h1>
      <h2>{userName}</h2>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default User;
