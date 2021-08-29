import React, { Component } from 'react';

import './searchbox.css'
class searchbox extends Component {
    render(){
        return(

           
               <div className="input-group ">
               <span class = "input-group-addon">
               <i className="fa fa-search  " aria-hidden="false"></i></span>
               
           <input className="form-control " type="text" placeholder="Search" aria-label="Search"></input>
         
          </div>
            
            
           
          
           

)
        }
    }
export default searchbox;