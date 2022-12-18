import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Clodata = () => {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch("https://ill-ray-cape.cyclic.app/todo",{
            headers:{
            "Authorization":`Bearer ${localStorage.getItem("psctoken")}`
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            setData(res)
            setLoading(false)
            console.log(res)
        })
        .catch((er)=>{
            console.log(er)
          setError(true)
          setLoading(false)
        })
    },[])
   
   
const handleSubmit=(todoID)=>{
fetch(`https://ill-ray-cape.cyclic.app/todo/delete/${todoID}`,{
    method:"DELETE",
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("psctoken")}`
    }
})


}


  return (
    <div>
       
          <h1>Cart Data</h1>
          <hr/>

               {loading && "loading....."}
               {error && "something went wrong"}

          { data && data.length>0 && data.map((el)=>(
            <div key={el._id}>
                 <p>{el._id}</p>
                   <img  width="10%" src={el.image} />
                  
            <p>{el.name?el.name:el.title}</p>
            <p>{el.name}</p>

            <p>{el.price}</p>
         

            <button onClick={()=>handleSubmit(el._id)}>delete</button>

      <hr />
            </div>
          ))}
    </div>
  )
}
export default Clodata