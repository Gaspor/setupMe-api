const express = require("express");
const app = express();

const server = app.listen(3000, () => {
    console.log("Running");
});

app.get('/', (req, res) =>{
    res.send("Hello world!!");

});