const { Router } = require('express');

const ctrl = require('../controllers');
const schemas = require('../schemas');
const { validateBody } = require('../decorators');
const { authenticate, isValidId } = require('../middlewares');

const router = Router();

router.use(authenticate);

router.get('/', ctrl.getAll);
router.get('/:id', isValidId, ctrl.getById);
router.post('/', validateBody(schemas.addSchema), ctrl.add);
router.put('/:id', isValidId, validateBody(schemas.addSchema), ctrl.updateById);
router.patch('/:id', isValidId, validateBody(schemas.addSchema), ctrl.updateFieldById);
router.delete('/:id', isValidId, ctrl.removeById);

module.exports = router;
