console.log("controllers/auth.js is running...");

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const session = require('express-session');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
console.log(req.session, ' this is session')
    try {
        //
    } catch(err) {
        res.send(err);
        console.log(err);
    }
});














module.exports = router;