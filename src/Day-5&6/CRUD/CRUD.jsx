import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CRUDwithAPI = () => {
  let [data, setData] = useState([]);
  let [student, setStudent] = useState({
    studentName: "",
    studentEnrol: "",
    studentEmail: "",
  });
  let [isUpdate, setIsUpdate] = useState(false);
  // let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://674f01b2bb559617b26da25d.mockapi.io/Student/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [isUpdate]);

  const handleSubmit = () => {
    fetch(`https://674f01b2bb559617b26da25d.mockapi.io/Student/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then(() => {
        setIsUpdate(!isUpdate);
        setStudent({
          studentName: "",
          studentEnrol: "",
          studentEmail: "",
        });
      });
  };

  const handleDelete = (id) => {
    fetch(`https://674f01b2bb559617b26da25d.mockapi.io/Student/${id}`, {
      method: "DELETE",
    }).then(() => {
      setIsUpdate(!isUpdate);
      // navigate("/")
    });
  };

  return (
    <>
      <table>
        <tr>
          <td>Enter Student Name:</td>
          <td>
            <input
              type="text"
              value={student.studentName}
              onChange={(e) => {
                setStudent({ ...student, studentName: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Student Email:</td>
          <td>
            <input
              type="email"
              value={student.studentEmail}
              onChange={(e) => {
                setStudent({ ...student, studentEmail: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Student Enrollment:</td>
          <td>
            <input
              type="email"
              value={student.studentEnrol}
              onChange={(e) => {
                setStudent({ ...student, studentEnrol: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center">
            <button
              className="btn btn-success"
              onClick={
                handleSubmit
                //   () => {
                //   setData([...data, student]);
                //   setStudent({
                //     studentName: "",
                //     studentEnrol: "",
                //     studentEmail: ""
                //   });
                // }
              }
            >
              {" "}
              Add{" "}
            </button>
          </td>
        </tr>
        <tr>
          <td className="font-weight-bold">Name</td>
          <td className="font-weight-bold">Enrollment</td>
          <td className="font-weight-bold">Email</td>
          <td className="font-weight-bold">Actions</td>
        </tr>
        {data.map((stu) => (
          <>
            <tr key={stu.id}>
              <td>{stu.studentName}</td>
              <td>{stu.studentEnrol}</td>
              <td>{stu.studentEmail}</td>
              <td>
                <button className="btn btn-warning" onClick={() => {}}>
                  Edit
                </button>
              </td>{" "}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    // setData(data.filter((_, index) => index !== i));
                    handleDelete(stu.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
};

export default CRUDwithAPI;