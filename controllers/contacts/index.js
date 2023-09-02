const { ctrlWrapper } = require("../../utils");

const getAll = require("./getAll");
const getById = require("./getById");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const updateContactFavorite = require("./updateContactFavorite");
const removeContact = require("./removeContact");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateContactFavorite: ctrlWrapper(updateContactFavorite),
  removeContact: ctrlWrapper(removeContact),
};
