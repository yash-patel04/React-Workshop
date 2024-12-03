import React, { useState } from "react";

const CRUD = () => {
  let [data, setData] = useState([]);
  let [info, setInfo] = useState({
    name: "",
    age: "",
  });

  let formattedName = data.map((n, i) => {
    return (
      <>
        <tr>
          <td>{n.name}</td>{" "}
          <td>{n.age}</td>{" "}
          {/* <td>
            <button
              className="btn btn-warning"
              onClick={() => {
                setName(name.filter((_, index) => index !== i));
              }}
            >
              Edit
            </button>
          </td>{" "} */}
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                setData(data.filter((_, index) => index !== i));
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
              value={info.name}
              onChange={(e) => {
                setInfo({...info, name: e.target.value});
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Age:</td>
          <td>
            <input
              type="number"
              value={info.age}
              onChange={(e) => {
                setInfo({...info, age: e.target.value});
              }}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button
              className="btn btn-success"
              onClick={() => {
                setData([...data, info]);
                setInfo({
                  name :"",
                  age: "",
                });
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
