const Router = require('express');
const router = new Router();

const flatsRouter = require('./flatsRouter');
const likesRouter = require('./likesRouter');
const messagesRouter = require('./messagesRouter');
const comparesRouter = require('./comparesRouter');
const usersRouter = require('./usersRouter');

router.use('/flats', flatsRouter);
router.use('/likes', likesRouter);
router.use('/messages', messagesRouter);
router.use('/compares', comparesRouter);
router.use('/users', usersRouter);

module.exports = router;