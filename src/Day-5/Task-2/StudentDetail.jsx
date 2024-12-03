import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDetail = () => {
    const [student, setStudent] = useState([])

    useEffect(() => {
        fetch(`https://674ecbf5bb559617b26cbc04.mockapi.io/Student/${id}`)
        .then(res => res.json())
        .then(data => setStudent(data))
    },[])

    let {id} = useParams();

  return (
    <>
    </>
  )
}

export default StudentDetail