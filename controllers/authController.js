
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const session = require("express-session");
const bcrypt = require("bcrypt");


// Register Route
router.post('/', async (req, res) => {
    console.log(req.session, ' this is session')
    try {
        const createdUser = await User.create(req.body);
        req.session.logged = true;
        req.session.username = req.body.username;

        res.json({
            status: 200,
            data: 'login successful'
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

// Login Route
router.post("/", async (req, res) => {
	try {
		const loginAttempt = await User.findOne({username: req.body.username})
		if (!loginAttempt) {
			console.log("invalid username");
			req.session.message = "Invalid Credentials"
			res.redirect("/")
		} else {
			const validLogin = await bcrypt.compare(req.body.password, loginAttempt.password)
			if (!validLogin) {
				console.log("invalid password")
				req.session.message = "Invalid Credentials"
				res.redirect("/")
			} else {
				console.log("logging in")
				req.session.loggedIn = true;
				req.session.displayName = loginAttempt.displayName;
				req.session.userId = loginAttempt.id;
				res.redirect("/");
			}
		}
	} catch (err) {
		res.send(err)
	}
});







module.exports = router;