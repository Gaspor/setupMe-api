async function getRam(ram) {
    var itens = [{
        placas_maes: [],
    }];

    if (ram != undefined){
        const placas_mae = require("./../getjsons/placa_mae");
        const { json } = await placas_mae.getMotherboards();
        
        for (var i = 0; i < json.length; i++) {
            if (ram.ddr === json[i].ddr) {
                itens[0].placas_maes.push(json[i]);
    
            }
        }

        return itens;
    }

    return "<marquee>Memória RAM inválida!</marquee>";
}

module.exports = { getRam }
