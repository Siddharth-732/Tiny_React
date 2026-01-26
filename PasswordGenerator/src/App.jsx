import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  console.count("🔁 Component rendered");
  const [length, setlength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz";

    if (NumberAllowed) str += "1234567890";
    if (CharAllowed) str += "@#$%^&*";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, NumberAllowed, CharAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, NumberAllowed, CharAllowed, passwordGenerator]);

  return (
    <>
      <div className=" w-full h-screen  bg-amber-100 flex justify-center items-center">
        <div className="w-100 h-60 rounded-3xl bg-amber-300">
          <div className="flex flex-col items-center gap-3">
            <div className="m-2 px-2 text-3xl">
              <h1 className="font-bold">Password Generator</h1>
            </div>
            <div className="h-10 w-full bg-amber-50 flex justify-between">
              <input
                className="px-3"
                type="text"
                value={Password}
                placeholder="Password"
                readOnly
                ref={passwordRef}
              />
              <button
                onClick={copypassword}
                className="h-10 w-15 bg-amber-700 rounded-bl-lg text-amber-50"
              >
                Copy
              </button>
            </div>
            <div className="flex gap-1">
              <input
                type="range"
                min={6}
                max={15}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label>Length:{length}</label>
              <input
                type="checkbox"
                defaultChecked={CharAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>char</label>
              <input
                type="checkbox"
                defaultChecked={NumberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Number</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
