const express = require('express')
const session = require('express-session');
const cookiePaser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const flash = require('connect-flash');
const app = express();

const path = require('path');
const CONFIG = require('./config/config')

require('./config/passport')(passport);

// configure middleware
app.use(morgan(CONFIG.app));
app.use(cookiePaser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

app.set('port', CONFIG.port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine

app.use(session({
    secret: CONFIG.secret,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes/route.js')(app, passport);

// set the app to listen on the port
app.listen(CONFIG.port, () => {
    console.log(`Server running on port: ${CONFIG.port}`);
});
 