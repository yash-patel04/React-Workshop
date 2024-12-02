import React from "react";
import Right from "./Right";
import Left from "./Left";
import Main from "./Main";

const Fifth = () => {
  return (
    <>
      <div className="row">
        <Main />
      </div>
      <div className="row">
        <div className="col-6">
          <Left />
        </div>
        <div className="col-6">
          <Right />
        </div>
      </div>
    </>
  );
};

export default Fifth;
