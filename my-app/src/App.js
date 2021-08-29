import React, { Component } from 'react';
import Head from './Components/head';
import Searchbox from './Components/searchbox';
import Wrapper from './Components/wrapper'
import Frame from './Components/Frame';
import{BrowserRouter as Router,Route, Switch} from "react-router-dom";
import './App.css'

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
class App extends Component {
  

    render(){
        return(
          
        <div className="App"> 
        <Router>
         
           
           
           
            
        <div className="container-fluid">
          <div className="col-lg-2  ">
          <div className="container pt-0 ">
          
              
          
           
            <Wrapper/>
            
            
            </div>
            </div>
            
            <div className="col-lg-10">
            <div className="container">
            
            <div className="col-lg-2   "><Searchbox></Searchbox></div>
            <div className="col-lg-4 offset-2 "><img src="..//public/pp.jpg"></img></div>
             <div className="col-md-1 offset-md-3 "> <Head></Head></div>
             <div className="container  ">
             <Switch><Route exact path="/frames"><Frame/></Route></Switch></div>
             </div>    
             </div>
             
             </div>
             </Router>
             </div>
       
       
      )}} 
           
         
          

       
export default App;


