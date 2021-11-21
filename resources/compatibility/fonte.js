async function getFonte(fonte) {
    var itens = [];

    if (fonte != undefined){
        const placa_video = require("./../getjsons/placa_video");
        const { json } = await placa_video.getGPU();
        
        for (var i = 0; i < json.length; i++) {
            if (fonte.watts >= parseInt(json[i].wattsFonte.replace("watts", ""))) {
                itens.push(json[i]);
    
            }
        }

        return itens;
    }

    return "<marquee>Placa de Vídeo inválida!</marquee>";
}

module.exports = { getFonte }