const mongoose = require("mongoose");

const ProfileModelSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: false,
    default: "",
  },
  image: {
    type: String,
    required: false,
    default: "",
  },
  following: {
    type: Boolean,
    default: false, // Defaults to false if not explicitly set
  },
});

const Profile = mongoose.model("Profile", ProfileModelSchema);

module.exports = Profile;
