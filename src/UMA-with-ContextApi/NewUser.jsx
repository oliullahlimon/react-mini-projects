import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUserContext } from "./useUserContext";

const NewUser = () => {
  const { users, setUsers } = useUserContext(); // using custom hook
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: uuidv4(), userName: userName };
    setUsers((prevUser) => [...prevUser, newUser]);
    setUserName("");
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          id=""
          value={userName}
          onChange={handleChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
