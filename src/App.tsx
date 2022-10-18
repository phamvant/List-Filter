import { useState } from "react";
import reactLogo from "./assets/react.svg";
import MyRadioGroup from "./components/RadioGroup";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <>
      <SearchBox />
      <div className="pt-10 flex flex-row justify-between">
        <div></div>

        <div className="Content z-0">
          <MyRadioGroup />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
