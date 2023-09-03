const Jimp = require("jimp");

const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models/user");
const { HttpError } = require("../../utils");

const avatarsDir = path.join(__dirname, "..", "..", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;

  const check = req.file;

  if (!check) {
    next(HttpError(400, "Avatar not found"));
  }
  const { path: tempUpload, originalname } = req.file;
  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, fileName);
  await fs.rename(tempUpload, resultUpload);
  try {
    await Jimp.read(resultUpload).then((image) => {
      image.resize(250, 250);
      image.write(resultUpload);
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    next(HttpError(500, "Problem with uploading avatar"));
  }

  const avatarURL = path.join("avatars", fileName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
