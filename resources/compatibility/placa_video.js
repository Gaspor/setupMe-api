async function getVideoboards(videoboard) {
    var itens = [];

    if (videoboard != undefined){
        const fontes = require("./../getjsons/fonte");
        const { json } = await fontes.getFonte();
        
        for (var i = 0; i < json.length; i++) {
            if (json[i].watts >= parseInt(videoboard.fonte.replace("watts", ""))) {
                itens.push(json[i]);
    
            }
        }

        return itens;
    }

    return "<marquee>Placa de Vídeo inválida!</marquee>";
}

module.exports = { getVideoboards }