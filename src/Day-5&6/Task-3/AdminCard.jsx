import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminCardAPI = () => {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    fetch("https://6715d69e33bc2bfe40bb44cb.mockapi.io/Admin")
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {admin.map((data) => (
            <div className="col">
              <div class="card">
                <img
                  class="card-img-top"
                  src={data.adminImage}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Admin Name={data.adminName}</h5>
                  <Link to={`/admin/${data.id}`}>
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

export default AdminCardAPI;
