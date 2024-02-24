const Router = require('express');
const router = new Router();

const flatsRouter = require('./flatsRouter');
const likesRouter = require('./likesRouter');
const comparesRouter = require('./comparesRouter');

router.use('/flats', flatsRouter);
router.use('/likes', likesRouter);
router.use('/compares', comparesRouter);

module.exports = router;