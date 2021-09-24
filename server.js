const express = require("express");
const app = express();
const db = require("./src/database/connection");

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("Running");
});

app.get('/', (req, res) =>{
    res.send("Hello world!!");
    db.connect();
});