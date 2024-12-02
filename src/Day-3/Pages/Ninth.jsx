import React from "react";
import LastRow from "../Parts/LastRow";
import Header2 from "../Parts/Header2";
import CenterColumn from "../Parts/CenterColumn";
import Column from "../Parts/Column";
import Title from "../Parts/Title";

const Ninth = () => {
  return (
    <>
      <div className="row first">
        <Title />
      </div>
      <div className="row">
        <div className="col-10">
          <div className="row">
            <div className="col">
              <CenterColumn />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Header2 />
            </div>
          </div>
          <div className="row first">
            <div className="col">
              <LastRow />
            </div>
          </div>
        </div>
        <div className="col-2">
          <Column />
        </div>
      </div>
    </>
  );
};

export default Ninth;
