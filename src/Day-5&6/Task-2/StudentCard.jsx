import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentCard = () => {
  const [student, setStudent] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsUpdate(!isUpdate);
    }, 1000);
  }, []);

  const apiUrl = "https://674ecbf5bb559617b26cbc04.mockapi.io/Student";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [isUpdate]);

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
                  <Link to={`/student/${data.id}`} className="btn btn-primary">
                    View More
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      fetch(apiUrl + data.id, { method: "DELETE" })
                        .then((res) => res.json())
                        .then((res) => {
                          setIsUpdate(!isUpdate);
                        });
                    }}
                  >
                    Delete
                  </button>
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
