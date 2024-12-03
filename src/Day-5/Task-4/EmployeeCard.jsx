import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const EmployeeCard = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("https://6715d69e33bc2bfe40bb44cb.mockapi.io/Employee")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {employee.map((data) => (
            <div className="col">
              <div class="card">
                <img
                  class="card-img-top"
                  src={data.eImage}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Employee Name={data.eName}</h5>
                  <Link to={`/employee/${data.id}`}>
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
}

export default EmployeeCard