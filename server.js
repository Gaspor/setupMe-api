const express = require("express");
const cors = require("cors");
const app = express();
const armazenamento = require("./src/routes/armazenamento");
const placa_mae = require("./src/routes/placa_mae");
const placa_video = require("./src/routes/placa_video");
const processador = require("./src/routes/processador");
const ram = require("./src/routes/ram");

app.use(cors());
app.use("/", armazenamento);
app.use("/", placa_mae);
app.use("/", placa_video);
app.use("/", processador);
app.use("/", ram);


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
