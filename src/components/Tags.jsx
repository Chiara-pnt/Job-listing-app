import React from "react";
import { useStateContext } from "./ContextProvider";

const Tags = () => {
  const { tags, dispatch } = useStateContext();

  const listTags = tags.map((element) => {
    return (
      <div className="tag-cont">
        <div className="tag">{element}</div>
        <button
          className="tag-btn"
          onClick={() => dispatch({ type: "REMOVE_ONE", payload: element })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
            />
          </svg>
        </button>
      </div>
    );
  });

  return <div className="tags-box">{listTags}</div>;
};

export default Tags;
