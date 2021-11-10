async function getProcessor(processor) {
    var itens = [];

    if (processor != undefined){
        const placas_mae = require("./../getjsons/placa_mae");
        const { json } = await placas_mae.getMotherboards();
        
        for (var i = 0; i < json.length; i++) {
            if (processor.socket === json[i].socket) {
                itens.push(json[i]);
    
            }
        }

        return itens;
    }

    return "<marquee>Processador inválido!</marquee>";
}

module.exports = { getProcessor }
