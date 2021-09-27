const fs = require("fs");

function createJson(nameFile, json){
    fs.writeFileSync(`./resources/jsons/${nameFile}.json`, JSON.stringify(json), 'utf8', (err) => {
        if (err) throw err;
        console.log("Created json!");
    });

}

function readJson(nameFile){
    return JSON.parse(fs.readFileSync(`./resources/jsons/${nameFile}.json`, 'utf8'));
    
}

function deleteJson(nameFile){
    fs.rm(`./resources/jsons/${nameFile}.json`, (err) => {
        if (err) throw err;
        console.log("Deleted json!");
    })

}

module.exports = {createJson, deleteJson, readJson}