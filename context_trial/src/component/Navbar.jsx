import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{borderBottom: '1px solid #eaeaeaff', paddingBottom: '10px'}}>
        {user}
    </div>
  );
};

export default Navbar;
