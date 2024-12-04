import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FacultyDetailAPI = () => {
  const [faculties, setFaculties] = useState({});

  useEffect(() => {
    fetch(`https://674ecbf5bb559617b26cbc04.mockapi.io/Faculty/${id}`)
      .then((res) => res.json())
      .then((data) => setFaculties(data));
  }, []);

  const { id } = useParams();

  return (
    <>
      <img src={faculties.FacultyImage} />
      <br />
      Name:{faculties.FacultyName}
      <br />
      Initial: {faculties.FacultyInitial}
      <br />
      Description: {faculties.FacultyDescription}
      <br />
      Date of Birth:{" "}
      {new Date(faculties.FacultyDateOfBirth).toLocaleDateString()}
      <br />
      <Link to="/">
        <button>Back to Faculty List</button>
      </Link>
    </>
  );
};

export default FacultyDetailAPI;
