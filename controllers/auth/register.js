const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { HttpError } = require("../../utils");
const { sendMail } = require("../../utils");
const { User } = require("../../models/user");
const crypto = require("node:crypto");
const { BASE_URL} = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email is already in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = crypto.randomUUID();
  const avatarURL = gravatar.url({ email });

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a href="${BASE_URL}/api/auth/verify/${verificationToken}">Click for verify</a>`,
  };
  
  await sendMail(verifyEmail);


  res.json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = register;
