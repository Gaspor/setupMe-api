const express = require('express');
const apiRouter = express();

apiRouter.use('/', require('./placa_mae'));
apiRouter.use('/', require('./armazenamento'));
apiRouter.use('/', require('./placa_video'));
apiRouter.use('/', require('./processador'));
apiRouter.use('/', require('./ram'));

module.exports = apiRouter;