const Dataitem = require('../../models/Dataitem');

const getAll = async (req, res) => {
  const owner = req.user._id;
  const { page = 1, limit = 3, ...query } = req.query;
  const projection = '-createdAt -updatedAt';
  const skip = (page - 1) * limit;

  const result = await Dataitem.find({ owner, ...query }, projection, { skip, limit }).populate(
    'owner',
    'name email'
  );
  const total = await Dataitem.countDocuments({ owner, ...query });
  res.status(200).json({ total, result });
};

module.exports = getAll;
