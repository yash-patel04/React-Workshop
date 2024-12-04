import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch(`https://6715d69e33bc2bfe40bb44cb.mockapi.io/Employee/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

  let { id } = useParams();

  return (
    <>
      <img src={employee.eImage} />
      <br />
      Name:{employee.eName}
      <br />
      Age: {employee.eAge}
      <br />
      Number: {employee.eDepartment}
      <br />
      <Link to="/">
        <button>Back to Employee List</button>
      </Link>
    </>
  );
}

export default EmployeeDetail