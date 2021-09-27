const fs = require("fs");

function createJson(nameFile, json){
    fs.writeFileSync(`./src/JSONs/${nameFile}.json`, JSON.stringify(json), 'utf8', (err) => {
        if (err) throw err;
        console.log("Created json!");
    });

}

function readJson(nameFile){
    return JSON.parse(fs.readFileSync(`./src/JSONs/${nameFile}.json`, 'utf8'));
    
}

function deleteJson(nameFile){
    fs.rm(`./src/JSONs/${nameFile}.json`, (err) => {
        if (err) throw err;
        console.log("Deleted json!");
    })

}

module.exports = {createJson, deleteJson, readJson}