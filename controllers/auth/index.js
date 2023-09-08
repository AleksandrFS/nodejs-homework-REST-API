const { ctrlWrapper } = require("../../utils");

const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const subscriptionUpdate = require("./subscriptionUpdate");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resetVerifyEmail = require('./resetVerifyEmail');

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  subscriptionUpdate: ctrlWrapper(subscriptionUpdate),
  updateAvatar: ctrlWrapper(updateAvatar),
  verifyEmail: ctrlWrapper(verifyEmail),
  resetVerifyEmail: ctrlWrapper(resetVerifyEmail),
};
