import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Card.scss"
const Card = () => {
  const[data,setData]=useState([])

  const getData=async()=>{
const res=await axios.get("http://localhost:3000/users")
setData(res.data)
  }
  useEffect(()=>{
getData()
  },[])


  const delCart = async (id) => {
  await axios.delete(`http://localhost:3000/users/${id}`)
  
    getData()
}
  return (
<>
<section className="testimonial">
  <div className="testimonial-title">
    <h2>Testimonial
</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.
</p>
  </div>
<div className="container">
  <div className="row">
  {data && data.map((e)=>(
  <div className="card card-container" style={{width:"20rem"}} key={e._id}>
  <div className="card-body">
<div className="d-flex justify-content-around align-items-center">
<div className="card-left">
<img src={e.url} alt="" />

</div>
  <div className="card-right">
  <h5 className="card-title">{e.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{e.job}</h6>
  </div>
</div>
    <div className="d-flex justify-content-around align-items-center">
    <p className="card-text">{e.info}</p>
    <button type='button' onClick={()=>delCart(e._id)}>Delete</button>

    </div>
  </div>
</div>

))}
  </div>
</div>
</section>


</>
  )
}

export default Card