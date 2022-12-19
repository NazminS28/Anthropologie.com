import React from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Order = () => {
    const navigate=useNavigate()
    useEffect(()=>{
      let id = setTimeout(()=>{
          navigate("/")
        },5000)
const cleanUp=()=>{
    clearTimeout(id)
}
        return cleanUp

    },[])
  return (
    <div style={{margin:"auto",marginTop:"2.5rem"}}>
        <img style={{margin:"auto", width:"60%"}} src="https://cdn.dribbble.com/users/361719/screenshots/6093431/media/2de6163884eb498a50045ed02e445e9d.png?compress=1&resize=400x300" />
        </div>
  )
}

export default Order