const { Router } = require('express');

// const ctrl = require('../controllers');
// const { authenticate, isValidId, bodyValidation } = require('../middlwares');
// const { addSchema } = require('../schemas/itemValidationSchema');

const router = Router();

router.get('/', (req, res) => {
  console.log('qwe');
});

// // Private route middleware
// router.use(authenticate);

// // GET
// router.get('/', ctrl.items.getAll);
// router.get('/:id', isValidId, ctrl.items.getById);

// // POST
// router.post('/', bodyValidation(addSchema), ctrl.items.add);

// // PUT
// router.put('/:id', isValidId, bodyValidation(addSchema), ctrl.items.updateById);

// // PATCH
// router.patch(
//   '/:id',
//   isValidId,
//   bodyValidation(addSchema),
//   ctrl.items.updateTitleById
// );

// // DELETE
// router.delete('/:id', isValidId, ctrl.items.removeById);

module.exports = router;
