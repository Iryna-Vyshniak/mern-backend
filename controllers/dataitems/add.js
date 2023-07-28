const Dataitem = require('../../models/Dataitem');

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Dataitem.create({ ...req.body, owner });
  res.status(201).json({ result });
};

module.exports = add;
