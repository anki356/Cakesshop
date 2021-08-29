import React, { Component } from 'react';

import {Link, Route, Router, Switch} from "react-router-dom";
import './wrapper.css'

class wrapper extends  Component {
 
 
   
   

     render(){
      
            
        return(
          <nav >
            
            
         
         
           
          <a href="#">
          
          <i className="fa fa-bars  "  ></i></a>
          
          <div className="nav-item  ">
             <div className="btn-group dropend  " >
      <button type="button" class="btn  dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
            Dashboard
         </button>
      <ul class="dropdown-menu">
     
     <Link to="/frames" className="nav-link">Default</Link>
      <a className="nav-item">content</a>
     </ul>
</div>

</div>


</nav>

            
        
          
   
 

 


       
       
        );}}
   export default wrapper  ; 
 
   

      