import React, { createContext, useContext } from "react";
import { useReducer } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const tagReducer = (tags, action) => {
    switch (action.type) {
      case "ADD_TAG":
        if (tags.includes(action.payload)) {
          return tags;
        } else {
          return [...tags, action.payload];
        }
      case "REMOVE_ONE":
        return tags.filter((el) => el !== action.payload);

      case "REMOVE_TAGS":
        return [];
      default:
        return tags;
    }
  };

  const [tags, dispatch] = useReducer(tagReducer, []);
  return (
    <StateContext.Provider value={{ tags, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
