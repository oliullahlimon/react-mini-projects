// here we create a custom hook name useUserContext
import { useContext } from "react";
import { UsersContext } from "./UsersContext";

export const useUserContext = () => {
  return useContext(UsersContext);
};
