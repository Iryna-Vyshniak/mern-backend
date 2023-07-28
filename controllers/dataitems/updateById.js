const Dataitem = require('../../models/Dataitem');
const { HttpError } = require('../../utils');

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Dataitem.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) throw HttpError(404, `id=${id} not found`);
  res.status(201).json({ result });
};

module.exports = updateById;
