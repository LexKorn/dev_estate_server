const Router = require('express');
const router = new Router();

const messagesController = require('../controllers/messagesController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, messagesController.create);
router.get('/', authMiddleware, messagesController.getAll);
router.delete('/:id', authMiddleware, messagesController.delete);

module.exports = router;