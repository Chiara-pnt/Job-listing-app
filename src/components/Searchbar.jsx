import React from "react";
import Tags from "./Tags";
import { useStateContext } from "./ContextProvider";

const Searchbar = () => {
  const { dispatch } = useStateContext();
  return (
    <div className="input">
      <span>
        <Tags />
      </span>
      <button
        className="clear"
        onClick={() => dispatch({ type: "REMOVE_TAGS" })}
      >
        Clear
      </button>
    </div>
  );
};

export default Searchbar;
