const { model } = require("mongoose");
const {userSchema} = require("../schema/userSchema");

const userModel = new model("User",userSchema);
module.exports = userModel;