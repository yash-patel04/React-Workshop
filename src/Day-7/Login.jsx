import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Login = () => {
  let [data, setData] = useState({ Username: "", Password: "" });
  let navigate = useNavigate();
  return (
    <>
      <table>
        <tr>
          <td>Enter Username:</td>
          <td>
            <input
              type="text"
              value={data.Username}
              onChange={(e) => {
                setData({ ...data, Username: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Password:</td>
          <td>
            <input
              type="text"
              value={data.Password}
              onChange={(e) => {
                setData({ ...data, Password: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button
              className="btn btn-primary"
              onClick={() => {
                fetch(`http://localhost:3000/login`, {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: { "Content-Type": "application/json" },
                })
                  .then((res) => res.json())
                  .then((res) => {
                    if (res.sucess) {
                      console.log("Success");
                      //   navigate("/dashboard");
                    } else {
                      alert("Invalid Credentials");
                    }
                  });
              }}
            >
              Login
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Login;
