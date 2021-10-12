const express = require('express');
const apiRouter = express();

apiRouter.use('/', require('./parts/placa_mae'));
apiRouter.use('/', require('./parts/armazenamento'));
apiRouter.use('/', require('./parts/placa_video'));
apiRouter.use('/', require('./parts/processador'));
apiRouter.use('/', require('./parts/ram'));
apiRouter.use('/', require('./games/fortnite'));

module.exports = apiRouter;