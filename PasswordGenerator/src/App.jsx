import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  return (
    <>
      <div className=" w-full h-screen  bg-amber-100 flex justify-center items-center">
        <div className="w-100 h-60 rounded-3xl bg-amber-300">
          <div className="flex flex-col items-center gap-3">
            <div className="m-2 px-2 text-3xl">
              <h1 className="font-bold">Password Generator</h1>
            </div>
            <div className="h-20 w-full bg-white"></div>
            <div className="flex gap-2">
              <input type="range" />
              <input type="checkbox" /><>Numerals</>
              <input type="checkbox" /><>SpecialChar</>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
