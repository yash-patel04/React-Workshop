import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FacultyCardAPI = () => {
  
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    fetch(`https://674ecbf5bb559617b26cbc04.mockapi.io/Faculty/`)
    .then(res=>res.json())
    .then(data=>setFaculties(data))
  },[])

  return (
    <>
      <div className="container">
        <div className="row">
          {faculties.map((data) => (
            <div className="col">
              <div class="card">
                <img
                  class="card-img-top"
                  src={data.FacultyImage}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Faculty Name={data.FacultyName}</h5>
                  {/* <p class="card-text">createdAt={data.createdAt}</p>
                  <p class="card-text">FacultyInitial={data.FacultyInitial}</p>
                  <p class="card-text">
                    FacultyDescription={data.FacultyDescription}
                  </p>
                  <p class="card-text">
                    FacultyDateOfBirth={data.FacultyDateOfBirth}
                  </p>
                  <p class="card-text">id={data.id}</p> */}
                  <Link to={`/facultyapi/${data.id}`}>
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

export default FacultyCardAPI;
