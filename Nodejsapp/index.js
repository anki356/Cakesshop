
const express = require("express");

const app = express();
const cors = require("cors");

 app.use(express.json()) 
 app.use(cors());
 var daysb  ;

 app.get("/", (req, res) => {
    daysb.collection("cakes sold").find({}).toArray(function (err, Cakes) {
        if(err){
       throw err;
        }
       
     
       res.send(Cakes) ; 
       
   },
       
)})

    
var mongodb=require ('mongodb');
var MongoClient=mongodb.MongoClient;

var url='mongodb://localhost:27017';
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
        MongoClient.connect(url,function(error,Days){ 
            if (error) throw error
            daysb=Days.db('Salesperf')
            
        })
          
    } )
    
    
        
   
      
   
  



    
