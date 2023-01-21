// import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import {formSchema} from "../../schema/formSchema";
import {yupResolver} from "@hookform/resolvers/yup"
import { useEffect, useState } from "react";
 import axios from 'axios'
const AddTestimonials = () => {

  const [input, setInput] = useState({
    name: "",
    job: "",

    info: ""
})

const getData = async () => {
  const res = await axios.get("http://localhost:3000/users");
  console.log(res.data);
};
useEffect(() => {
  getData();
}, []);

const handleChange = (e) => {
  setInput({ ...input, [e.target.name]: e.target.value });
};
const addData = () => {


  if (!input.name || !input.job||!input.info) return;

  axios.post("http://localhost:3000/users", input);
  getData();
};


  //yup
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors }
  } = useForm({resolver:yupResolver(formSchema)});
  const onSubmit = (data) => {

          //  console.log(data);
addData()

  }; 
  // console.log(watch("example")); 

  return (
<>
<style>
  {
  `body {
    background: #0e101c;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }
  
  form {
    max-width: 500px;
    margin: 0 auto;
padding:100px 0;
  }
  
  h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
  }
  
  .form {
    background: #0e101c;
    max-width: 400px;
    margin: 0 auto;
  }
  
  span{
    color: #bf1650;
  }
  
  span::before {
    display: inline;
    content: "⚠ ";
  }
  
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: white;
    font-size: 14px;
    font-weight: 200;
  }
  
  button[type="submit"],
  input[type="submit"] {
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
  }
  
  button[type="submit"]:hover,
  input[type="submit"]:hover {
    background: #bf1650;
  }
  
  button[type="submit"]:active,
  input[type="button"]:active,
  input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
  
  input:disabled {
    opacity: 0.4;
  }
  
  input[type="button"]:hover {
    transition: 0.3s all;
  }
  
  button[type="submit"],
  input[type="button"],
  input[type="submit"] {
    -webkit-appearance: none;
  }
  
  .App {
    max-width: 600px;
    margin: 0 auto;
  }
  
  button[type="button"] {
    display: block;
    appearance: none;
    background: #333;
    color: white;
    border: none;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
  }
  
  hr {
    margin-top: 30px;
  }
  
  button {
    display: block;
    appearance: none;
    margin-top: 40px;
    border: 1px solid #333;
    margin-bottom: 20px;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
  }
  
  `
  }

</style>




<form onSubmit={handleSubmit(onSubmit)}>
      <input  {...register("name")} name="name" id="name"              value={input.name}
         onChange={handleChange}
   />
    
      {errors.name?( <span>{errors.name?.message}</span>):(
<></>
       )}
      <input  {...register("job")} name="job" id="job"        value={input.job}         onChange={handleChange}
   />
      {errors.job ? (
        <span style={{ color: "red" }}>{errors.job.message}</span>
      ) : (
        <></>
      )}
     
      <input  {...register("info")} name="info" id="info"        value={input.info}          onChange={handleChange}
  />
      {errors.info ? (
        <span style={{ color: "red" }}>{errors.info.message}</span>
      ) : (
        <></>
      )}

      <input type="submit" />
    </form>

</>
  )
}

export default AddTestimonials