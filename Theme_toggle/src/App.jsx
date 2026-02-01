/*
-> I used 2 hook from the react library
-> Theme Provider form theme.js
-> 2 Components (themeBtn and Card)
-> Finally App.css 
*/
import { useEffect, useState } from "react";
import { ThemeProvider } from "../contexts/theme";
import ThemeBtn from "../components/ThemeBtn";
import Card from "../components/Card";
import "./App.css";

function App() {
  //this is the use state i used so that i can change the theme with a toggle
  const [themeMode, setThemeMode] = useState("light")  

  // change the theme {dark -> light}
  const lightTheme = () => {
    setThemeMode("light")
  }
  // change the theme {light -> dark}
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Here is where i actually change the inner html that switch dark and light theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="bg-gray-300 flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App