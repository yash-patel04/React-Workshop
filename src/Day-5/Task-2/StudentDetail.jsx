import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StudentDetail = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch(`https://674ecbf5bb559617b26cbc04.mockapi.io/Student/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, []);

  let { id } = useParams();

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
      <Link to="/">
        <button>Back to Student List</button>
      </Link>
    </>
  );
};

export default StudentDetail;
