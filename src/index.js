const express = require("express");
const app = express();

app.get("/",(req,res)=>{
   res.status(200).json({data:"Hello World"});
});

app.listen(3000);