import React from "react";

const Cell = (props) => {
  return (
    <>
      <div className="cell">
        <h3>Cell_{props.num}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          distinctio voluptatibus vel maxime ab commodi accusantium laboriosam
          quas praesentium? Quae laboriosam quo similique repellendus itaque
          cumque magnam ipsa sequi iusto?
        </p>
      </div>
    </>
  );
};

export default Cell;
