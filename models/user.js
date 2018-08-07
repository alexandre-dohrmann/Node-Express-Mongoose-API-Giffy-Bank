const mongoose = require('mongoose');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const gif = require("./gif");
const Schema = mongoose.Schema;


const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  gifs: [gif.schema]
});


const User = mongoose.model("User", userSchema);


userSchema.pre("save", async function(next) {
	const existingUser = await User.findOne({username: this.username})
	if (!existingUser) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
});


module.exports = mongoose.model('User', UserSchema);
