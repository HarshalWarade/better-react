import React, { useState } from "react";
import UserContext from "../contexts/UserContext";

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState('harshal');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
