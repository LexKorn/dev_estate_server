const Router = require('express');
const router = new Router();

const flatsRouter = require('./flatsRouter');

router.use('/flats', flatsRouter);

module.exports = router;