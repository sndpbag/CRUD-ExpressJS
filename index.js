const express = require("express");
const app = express();
const port = 5000;


// set middleware
//  set viwe engine for EJS
app.set("view engine", "ejs");

// Serve static files from the 'public' directory like image, css etc
app.use(express.static("public"));


app.get("/",(req,res )=>{
    res.render("index.ejs");
})



app.listen(port, () =>{
    console.log(`Our Express Server is Running on port no is ${port}`);
})