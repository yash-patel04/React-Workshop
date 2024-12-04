import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const StudentDetail = () => {
  const [student, setStudent] = useState([]);
  const apiUrl = "https://674ecbf5bb559617b26cbc04.mockapi.io/Student/";
  const navigation = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    fetch(apiUrl + id)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, []);

  return (
    <>
      <img src={student.studentImage} />
      <br />
      Name:{student.studentName}
      <br />
      Age: {student.studentAge}
      <br />
      Number: {student.studentNumber}
      <br />
      Email: {student.studentEmail}
      <br />
      <Link to="/" className="btn btn-primary">
        Back to Student List
      </Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          fetch(apiUrl + id, { method: "DELETE" })
            .then((res) => res.json())
            .then((res) => {
              navigation("/");
            });
        }}
      >
        Delete
      </button>
    </>
  );
};

export default StudentDetail;
