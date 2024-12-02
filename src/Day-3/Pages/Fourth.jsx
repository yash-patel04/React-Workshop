import React from "react";
import Right from "./Right";
import Left from "./Left";
import Main from "./Main";

const Fourth = () => {
  return (
    <>
      <div className="col-8">
        <div className="row">
          <Main />
        </div>
        <div className="row">
          <Right />
        </div>
      </div>
      <div className="col-4">
        <Left />
      </div>
    </>
  );
};

export default Fourth;
