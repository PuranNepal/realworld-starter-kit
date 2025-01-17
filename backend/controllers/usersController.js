const UserModel = require("../Models/UserModel");
const ProfileModel = require("../Models/ProfileModel");
//Post
const registerUser = async (req, res) => {
  const { username, email, password } = req.body.user;
  try {
    const user = await UserModel.create({ username, email, password });
    const profile = await ProfileModel.create({ username });
    res.status(200).json({ user, profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser };
