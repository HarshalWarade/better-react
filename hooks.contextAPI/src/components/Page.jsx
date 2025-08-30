import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Page = () => {
  const { user, setUser } = useContext(UserContext);
  return (
  <div>
    <input type="text" placeholder="Enter Username" value={user} onChange={(e) => setUser(e.target.value)} />
    <p>{user}</p>
  </div>
  );
};

export default Page;
