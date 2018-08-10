const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const GIF = require("./gif");
const Schema = mongoose.Schema;


// User Schema for new users
const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	gifs: [GIF.schema]
});

const User = mongoose.model("User", userSchema);

userSchema.pre("save", async function(next) {
	const existingUser = await User.findOne({username: this.username})
	if (!existingUser) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
});


module.exports = User;
