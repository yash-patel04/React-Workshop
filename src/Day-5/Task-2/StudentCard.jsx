import React, { useEffect, useState } from 'react'

const StudentCard = () => {

    const [student, setStudent] = useState([])

    useEffect(() => {
        fetch("https://674ecbf5bb559617b26cbc04.mockapi.io/Student")
        .then(res => res.json())
        .then(data => setStudent(data))
    },[])

  return (
    <>
    </>
  )
}

export default StudentCard