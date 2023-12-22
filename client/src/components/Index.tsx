import React from "react";
import { Link } from "react-router-dom";
// import TypingEffect from "./utils/TypingEffect";

const App_Layout: React.FC = () => {
  return (
    <div className={"pt-16 mt-10 flex items-center justify-center gap-10"}>
      <div>
        <div className={"text-4xl font-bold"}>
          Learn & become the
          <div className={"text-[#6674cc]"}>
            Top 1% software
            <div>developer</div>
          </div>
        </div>
        {/* Typing Effect */}
        <div>
          <span>
          Hello -
          </span>
            {/* <TypingEffect /> */}
        </div>
        <Link to={"/course"}>
          <button
            className={"bg-[#6674CC] text-white p-[15px] px-[27px] rounded-xl"}
            type="button"
          >
            Explore new batches
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App_Layout;
