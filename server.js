const express = require("express");
const app = express();
const processador = require("./src/routes/processador");
const placa_mae = require("./src/routes/placa_mae");

app.use("/", processador);
app.use("/", placa_mae);

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
