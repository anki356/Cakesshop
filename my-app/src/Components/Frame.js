import React, { PureComponent } from 'react';
import {useState}from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import  './Frame.css';
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

function Frame(props) {
  
  const [data,setData]=useState([]);
 
  const apiGet=()=>{
    fetch('http://localhost:8080')
    .then((response)=>response.json())
    .then((json)=>{
      setData(json);
      
    })
    
  }
 
 
  
    
      
   
 
  return (
    
    <div>
    
    
   <div>{apiGet()}</div>
    
   <LineChart width={400} height={250} data={data}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Sales" stroke="#0095FF" />
                
            </LineChart>
   
   </div>
  )}
       

    
               
            
          
export default Frame;