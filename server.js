console.log('server is running...');

// Require npm modules
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session');

// Require database
require('./db/db');

// Setting up session
app.use(session({
	secret: "giffy me",
	resave: false,
	saveUninitialized: false
}));

// Required middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cors middleware
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions));

// GIF controller
const gifController = require('./controllers/gifController');

// Auth Controller
const authController  = require('./controllers/authController');

app.use('/api/v1/gifs', gifController);

app.use('/auth/login', authController);
app.use((req, res, next) => {
	if (req.session.loggedIn === true) {
		return next();
	} else {
		res.redirect("/auth/login");		
	}
});

// Listening to server
app.listen(9000, () => {
    console.log('listening on port 9000');
  });