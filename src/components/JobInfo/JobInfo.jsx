import React from "react";
import data from "./data";
import { useMemo } from "react";

import { useStateContext } from "../ContextProvider";

const JobInfo = () => {
  const { dispatch, tags } = useStateContext();

  const filteredList = useMemo(
    () =>
      data.filter((element) => tags.every((tag) => element.tags.includes(tag))),
    [tags]
  );

  const dataList = filteredList.map((element) => {
    return (
      <div className="dataList" key={element.id}>
        <div>
          <img alt="img" src={element.logo} />
        </div>
        <div className="content">
          <div style={{ display: "flex" }}>
            <div className="company">{element.company}</div>
            {element.new ? <span className="new"> NEW! </span> : ""}
            {element.featured ? (
              <span className="featured">FEATURED </span>
            ) : (
              ""
            )}
          </div>
          <div style={{ marginTop: "17px" }}>
            <h2 className="position">{element.position}</h2>
            <div style={{ display: "flex", marginTop: "15px" }}>
              <p className="info">{element.postedAt}</p>
              <p className="info">{element.contract}</p>
              <p className="info">{element.location}</p>
            </div>
          </div>
        </div>

        <div className="buttons">
          {element.tags.map((val) => {
            return (
              <button
                className="button"
                onClick={() => dispatch({ type: "ADD_TAG", payload: val })}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="list" style={{ marginTop: "70px" }}>
        {dataList}
      </div>
    </>
  );
};

export default JobInfo;
