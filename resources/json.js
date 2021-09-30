const fs = require("fs");

async function createJson(nameFile, json){
    await deleteJson(nameFile);

    fs.writeFileSync(`./resources/jsons/${nameFile}.json`, JSON.stringify(json), 'utf8', (err) => {
        if (err) return;
        console.log("Created json!");
    });

}

function readJson(nameFile){
    return JSON.parse(fs.readFileSync(`./resources/jsons/${nameFile}.json`, 'utf8'));
    
}

async function deleteJson(nameFile){
    fs.rm(`./resources/jsons/${nameFile}.json`, (err) => {
        if (err) return;
        console.log("Deleted json!");
    })

}

module.exports = {createJson, readJson}