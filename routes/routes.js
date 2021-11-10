const express = require('express');
const apiRouter = express();

/* Parts */
apiRouter.use('/', require('./parts/placa_mae'));
apiRouter.use('/', require('./parts/armazenamento'));
apiRouter.use('/', require('./parts/placa_video'));
apiRouter.use('/', require('./parts/processador'));
apiRouter.use('/', require('./parts/ram'));
apiRouter.use('/', require('./parts/fonte'));

/* Games */
apiRouter.use('/games', require('./games/apex'));
apiRouter.use('/games', require('./games/cod'));
apiRouter.use('/games', require('./games/csgo'));
apiRouter.use('/games', require('./games/dota2'));
apiRouter.use('/games', require('./games/fifa21'));
apiRouter.use('/games', require('./games/fortnite'));
apiRouter.use('/games', require('./games/gtaV'));
apiRouter.use('/games', require('./games/lol'));
apiRouter.use('/games', require('./games/minecraft'));
apiRouter.use('/games', require('./games/valorant'));


/* Mounting */
apiRouter.use('/montagem', require('./mounting/pro-basica'));
apiRouter.use('/montagem', require('./mounting/pro-media.js'));
apiRouter.use('/montagem', require('./mounting/pro-avancada.js'));


apiRouter.use('/scraping', require('./scraping/scraping.js'));


apiRouter.use('/compatibility', require('./compatibility/processador.js'));

module.exports = apiRouter;