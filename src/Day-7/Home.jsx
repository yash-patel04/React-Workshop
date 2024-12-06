import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    if(token == null){
        navigate("/")
        return
    }
  },[])
    return (
      <div>Home</div>
    )
  
}

export default Home