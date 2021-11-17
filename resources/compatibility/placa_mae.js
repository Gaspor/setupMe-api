async function getMotherboards(motherboards) {
    var itens = [{
        rams: [],
        processadores: []
    }];

    if (motherboards != undefined){
        const processadores = require("./../getjsons/processador");
        const { json } = await processadores.getCPU();
        
        for (var i = 0; i < json.length; i++) {
            if (motherboards.socket === json[i].socket) {
                itens[0].processadores.push(json[i]);
    
            }
        }

        const rams = require("./../getjsons/ram");
        const ram = await rams.getRam();
        
        for (var i = 0; i < ram.json.length; i++) {
            if (motherboards.ddr === ram.json[i].ddr) {
                itens[0].rams.push(ram.json[i]);
    
            }
        }

        return itens;
    }

    return "<marquee>Placa Mãe inválida!</marquee>";
}

module.exports = { getMotherboards }
