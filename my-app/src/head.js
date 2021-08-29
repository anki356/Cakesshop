import React, { Component } from 'react';

import './head.css';
class head extends Component {
    render(){
        return(
            <div className="head">
                <header>
            <div className="sidepanel">
            <i className="fa fa-th-large fa-2x" ></i>
            <a href="#" ><b>Buy</b></a>
            <i className="fa fa-bell" ></i>
             </div>
             <div className="search-box" >
            <input type="text" className="search-text">
           <a href="#" className="searchbutton">
          <i className="fa fa-search" ></i></a>
           </input>
           </div>
          </header>
            </div>
        )}}
        export default head;