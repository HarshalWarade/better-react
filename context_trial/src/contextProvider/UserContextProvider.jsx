import React from "react";
import UserContext from "../context/UserContext.js";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('harshal')
  return (
    <>
      <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
