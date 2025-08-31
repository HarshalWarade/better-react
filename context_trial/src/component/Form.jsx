import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Form = () => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState('')

  const handleChange = () => {
    setUser(name)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Change name"
        onChange={(e) => setName(e.target.value)}
      />
      {" "}
      <button style={{ cursor: "pointer" }} onClick={handleChange}>
        Submit
      </button>
    </div>
  );
};

export default Form;
