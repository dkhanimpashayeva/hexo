import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Card = () => {
  const[data,setData]=useState([])

  const getData=async()=>{
const res=await axios.get("http://localhost:3000/users")
setData(res.data)
  }
  useEffect(()=>{
getData()
  },[])


  const delCart = async (index) => {
  await axios.delete(`http://localhost:3000/users/${index}`)
  
    getData()
}
  return (
<>
<div className="container">
  <div className="row">
  {data && data.map((e,index)=>(
  <div className="card" style={{width:"20rem"}} key={index}>
  <div className="card-body">
    <h5 className="card-title">{e.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{e.job}</h6>
    <p className="card-text">{e.info}</p>
    <button type='button' onClick={()=>delCart(e.index)}>Delete</button>

  </div>
</div>

))}
  </div>
</div>


</>
  )
}

export default Card