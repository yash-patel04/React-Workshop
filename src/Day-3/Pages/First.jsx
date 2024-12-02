import React from "react";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";

const First = () => {
  return (
    <>
      <div className="col-3 ">
        <Left />
      </div>
      <div className="col-6">
        <Main />
      </div>
      <div className="col-3">
        <Right />
      </div>
    </>
  );
};

export default First;
