import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AdminDetailAPI = () => {
  
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    fetch(`https://6715d69e33bc2bfe40bb44cb.mockapi.io/Admin/${id}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data))
  },[])

  const { id } = useParams();

  return (
    <>

        <img src={admin.adminImage}/><br/>
        Name:{admin.adminName}<br/>
        Age: {admin.adminAge}<br/>
        Email: {admin.adminEmail}<br/>
        Department: {admin.adminDepartment}<br/>
      <Link to="/">
        <button>Back to Admin List</button>
      </Link>
    </>
  );
};

export default AdminDetailAPI;
