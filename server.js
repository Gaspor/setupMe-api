const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(require('./routes/routes'));

const server = app.listen(process.env.PORT || 3000, err => {
    if(err) {
        console.log("Error: " , err);
        return;    
    }

    console.log("Running...");
});

app.get('/', async (req, res) => {
    res.send("<marquee><h1> There's nothing around here! </h1></marquee>");

});
