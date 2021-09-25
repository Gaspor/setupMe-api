const express = require("express");
const app = express();
const db = require("./src/database/connection");

const server = app.listen(process.env.PORT || 3000, err => {
    if(err) {
        console.log("Error: " , err);
        return;    
    }
    
    console.log("Running...");
});

app.get('/', (req, res) => {
    res.send("<marquee><h1> There's nothing around here! </h1></marquee>");

});