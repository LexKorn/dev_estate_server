const Router = require('express');
const router = new Router();

const flatsRouter = require('./flatsRouter');
const likesRouter = require('./likesRouter');
const comparesRouter = require('./comparesRouter');
const usersRouter = require('./usersRouter');

router.use('/flats', flatsRouter);
router.use('/likes', likesRouter);
router.use('/compares', comparesRouter);
router.use('/users', usersRouter);

module.exports = router;