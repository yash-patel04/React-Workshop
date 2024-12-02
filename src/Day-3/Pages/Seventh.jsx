import React from "react";
import CenterColumn from "../Parts/CenterColumn";
import Title from "../Parts/Title";
import Column from "../Parts/Column";
import Header2 from "../Parts/Header2";
import LastRow from "../Parts/LastRow";

const Seventh = () => {
  return (
    <>
      <div className="row first">
        <Title />
      </div>
      <div className="row p-4">
        <div className="col-8">
          <CenterColumn />
          <div className="row p-4">
            <div class="col">
            <Header2 />
            </div>
          </div>
        </div>
        <div className="col-4">
          <Column />
        </div>
      </div>

      <div className="row first">
        <LastRow />
      </div>
    </>
  );
};

export default Seventh;
