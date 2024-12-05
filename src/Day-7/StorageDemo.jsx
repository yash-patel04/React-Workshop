import React, { useState } from "react";

const StorageDemo = () => {
  let [name, setName] = useState(localStorage.getItem("name"));
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          localStorage.setItem("name", name);
          // sessionStorage.setItem("name", name)
        }}
      >
        Add
      </button>
    </>
  );
};

export default StorageDemo;
