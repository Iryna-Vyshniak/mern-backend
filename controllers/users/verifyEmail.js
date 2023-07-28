const User = require('../../models/User');
const { ctrlWrapper } = require('../../decorators');
const { HttpError, sendEmail } = require('../../utils');

const verifyEmail = ctrlWrapper(async (req, res) => {
  const { verificationCode } = req.params;
  const user = await User.findOne({ verificationCode });
  if (!user) throw HttpError(401, 'Email not verified');
  await User.findByIdAndUpdate(user._id, {
    verifiedEmail: true,
    verificationCode: '',
  });
  res.json({ message: `Email ${user.email} verified` });
});

const resendEmail = ctrlWrapper(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, 'Email not found');
  if (user.verifiedEmail) throw HttpError(400, 'Email already verified');
  await sendEmail(email, user.verificationCode);
  res.json({ message: `Email sent to ${email}` });
});

module.exports = { verifyEmail, resendEmail };
