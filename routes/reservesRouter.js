const Router = require('express');
const router = new Router();

const reservesController = require('../controllers/reservesController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, reservesController.create);
router.get('/', authMiddleware, reservesController.getOne);
router.delete('/:id', authMiddleware, reservesController.delete);

module.exports = router;