async function getProcessor(processor) {
    const placas_mae = require("./../getjsons/placa_mae");
    const { json } = await placas_mae.getMotherboards();
    var itens = [];
    
    for (var i = 0; i < json.length; i++){
        if (processor.socket === json[i].socket) {
            itens.push(json[i]);

        }
    }

    return itens;
}

module.exports = { getProcessor }