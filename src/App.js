import { useEffect, useState } from "react";
import "./App.css";
import DesktopBg from "./components/DesktopBg.svg";
import JobInfo from "./components/JobInfo/JobInfo";
import MobileBg from "./components/MobileBg";
import Searchbar from "./components/Searchbar";

import { ContextProvider } from "./components/ContextProvider";

function App() {
  const [screenSizeSmall, setScreenSizeSmall] = useState(undefined);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 375px)");
    function screenTest(e) {
      if (e.matches) {
        /* the viewport is 600 pixels wide or less */
        setScreenSizeSmall(true);
      } else {
        /* the viewport is more than 600 pixels wide */
        setScreenSizeSmall(false);
      }
    }

    mql.addEventListener("change", screenTest);
  }, []);

  return (
    <>
      <header>
        {screenSizeSmall ? <MobileBg /> : <img alt="dbg" src={DesktopBg} />}
      </header>
      <div className="App">
        <ContextProvider>
          <Searchbar />
          <JobInfo />
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
