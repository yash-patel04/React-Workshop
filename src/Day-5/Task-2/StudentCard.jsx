import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentCard = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("https://674ecbf5bb559617b26cbc04.mockapi.io/Student")
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {student.map((data) => (
            <div className="col">
              <div class="card">
                <img
                  class="card-img-top"
                  src={data.studentImage}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Student Name={data.studentName}</h5>
                  <Link to={`/student/${data.id}`}>
                    <button className="btn btn-primary">View More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentCard;
