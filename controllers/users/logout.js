const User = require('../../models/User');

const logout = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { token: null });
  res.status(200).json({ message: 'Logged out' });
};

module.exports = logout;
