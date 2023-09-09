const { User } = require("../../models/user");
const { HttpError } = require("../../utils");
const { sendMail } = require("../../utils");
const { BASE_URL } = process.env;

const resetVerifyEmail = async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email not found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click for verify</a>`,
  };

  await sendMail(verifyEmail);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = resetVerifyEmail;
