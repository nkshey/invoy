import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="lg:mx-auto lg:w-[45.625rem]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
