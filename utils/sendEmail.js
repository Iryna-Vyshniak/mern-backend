const nodemailer = require('nodemailer');

const { UKR_NET_EMAIL, UKR_NET_PASSWORD, BASE_URL } = process.env;

const nodemailerConfig = {
  host: 'smtp.ukr.net',
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (to, verificationCode) => {
  const emailOptions = {
    from: `"Support" <${UKR_NET_EMAIL}>`,
    to,
    subject: 'Email verification',
    text: 'Hello!',
    html:
      'Hello! Click the link below to email verification.' +
      `<a href='${BASE_URL}/api/users/verify/${verificationCode}' target='_blank'>✔ Click the link to verify <b>${to}</b></a>`, // html body
  };
  try {
    await transport.sendMail(emailOptions);
    console.log(`Email sent to ${emailOptions.to}`);
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = sendEmail;
