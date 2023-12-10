//create Navbar using bootstrap and react
//will creating functional component, for creating we are using snippets go to extensions 
//  and search for react snpil select one of them and install it
//after installing use rfc automatically functional component will be created 
//install bootstrap using npm , command=> npm i bootstrap, once you installed you can check in package.json it contains bootstrap field with version 
//to use bootstarp we need to import it in app.js => import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// go to browser and search for bootstrap, go to the link => docs=>search=>navbar=>copy the code

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <div className="container-fluid">
         <a className="navbar-brand" href="#">
            Employee Management System
        </a>
    <button 
       className="navbar-toggler" 
       type="button" 
       data-bs-toggle="collapse" 
       data-bs-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent" 
       aria-expanded="false" 
       aria-label="Toggle navigation"
    >
       <span className="navbar-toggler-icon"></span>
    </button>

    <Link className="btn btn-outline-light" to="/addUser"> Add User </Link>
    </div>
  </nav>
</div>
  )
}
