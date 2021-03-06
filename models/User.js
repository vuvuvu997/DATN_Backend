const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String },
    isAdmin: { type: Boolean, default: false },
    photo: { type: String },
    email: { type: String, default: "" },
    fullName: { type: String },
    socialId: { type: String },
    phoneNumber: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
