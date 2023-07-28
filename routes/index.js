const { Router } = require('express');

const usersRouter = require('./users');
const dataitemsRouter = require('./dataitems');

const router = Router();

router.use('/users', usersRouter);
router.use('/dataitems', dataitemsRouter);

module.exports = router;
