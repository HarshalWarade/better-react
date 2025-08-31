import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./contextProvider/UserContextProvider";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import Detail from "./component/Detail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Form />
        <Detail />
      </UserContextProvider>
    </>
  );
}

export default App;
