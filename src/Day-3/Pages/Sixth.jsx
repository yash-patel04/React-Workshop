import React from "react";
import Cell from "../Parts/Cell";

const Sixth = () => {
  return (
    <>
      <div className="row first">
        <h2>site title</h2>
      </div>
      <div className="row p-4">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident officia facilis alias impedit eveniet veritatis, molestias hic esse deleniti at voluptatem magni tenetur voluptate maxime, adipisci ipsum perspiciatis distinctio maiores.</p>
      </div>
      <div className="row">
        <div className="col-4"><Cell num={1}/></div>
        <div className="col-4"><Cell num={2}/></div>
        <div className="col-4"><Cell num={3}/></div>
      </div>
      <div className="row">
        <div className="col-3"><Cell num={1}/></div>
        <div className="col-3"><Cell num={2}/></div>
        <div className="col-3"><Cell num={3}/></div>
        <div className="col-3"><Cell num={4}/></div>
      </div>
    </>
  );
};

export default Sixth;
