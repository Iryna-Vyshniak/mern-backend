const Dataitem = require('../../models/Dataitem');
const { HttpError } = require('../../utils');

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Dataitem.findByIdAndDelete(id);
  if (!result) throw HttpError(404, `id=${id} not found`);
  res.status(201).json({ result });
};

module.exports = removeById;
