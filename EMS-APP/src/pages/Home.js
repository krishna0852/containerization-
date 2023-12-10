import React, { useState } from 'react';
//import axios 
import axios from 'axios';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'


export default function Home() {

   
   const [users, setUsers]=useState([]) //we need to create an object to store user information

   const {id}=useParams()

  //by using useEffect, you will tell the react that your component needs to do something after render,
  // so evertime page is open it will fetch the user information
   useEffect(()=>{
    
    //console.log("krishnaTeja");
    loadUsers();

   },[]); // we need to give an empty array here , if we won't give empty array it will run un-limited times
   //if we give it will only run when the page is loaded
    
   //for loading user information we using loadusers 
   const loadUsers=async()=>{
      const result= await axios.get("http://16.171.112.88:8080/users")
      //console.log(result) you will get all the things 
      //console.log(result.data) //only data
      setUsers(result.data)
   };

   const deleteUser=async (id)=>{
    await axios.delete(`http://16.171.112.88:8080/user/${id}`)
    loadUsers()
}

    return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user, index)=>( // using map we are storing every user information into an array
      <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>
            View User
        </Link>
        <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>
         Edit
        </Link>
        <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>
            
            Delete</button>
      </td>
     </tr>
    ))
}
  
    
  </tbody>
</table>
        </div>
    </div>
  )
}
