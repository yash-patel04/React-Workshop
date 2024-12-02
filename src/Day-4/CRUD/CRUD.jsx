import React, { useState } from "react";

const CRUD = () => {
  let [name, setName] = useState([]);
  let [data, setData] = useState("");

  let formattedName = name.map((n, i) => {
    return (
      <>
        <tr>
          <td>{n}</td>{" "}
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                setName(name.filter((_, index) => index !== i));
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <table>
        <tr>
          <td>Name:</td>
          <td>
            <input
              type="text"
              value={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button
              className="btn btn-success"
              onClick={() => {
                setName([...name, data]);
                setData("");
              }}
            >
              {" "}
              Add{" "}
            </button>
          </td>
        </tr>
        {formattedName}
      </table>
    </>
  );
};

export default CRUD;
