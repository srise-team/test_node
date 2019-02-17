const LocalStratgy = require("passport-local").Strategy;
const crypto = require("crypto");
const connection = require("./connection");
const dbconfig = require('./database');

module.exports = passport => {
    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        connection.query("SELECT * FROM " + dbconfig.user_table + " WHERE username = ?", [username],
            (err, rows) => {
                done(err, rows[0]);
            } 
        );
    });

    passport.use(
        'local-login',
        new LocalStratgy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        (req, username, password, done) => {
            connection.query("SELECT * FROM " + dbconfig.user_table + " WHERE username = ?", [username],
            (err, rows) => {
                if(err)
                    return done(err);
                if(!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'No User Found'));
                }
                let _hashValue = crypto.createHash('md5').update(password).digest('hex') + rows[0].salt;
                let __hashValue = crypto.createHash('md5').update(_hashValue).digest('hex');
                if(__hashValue != rows[0].password) {
                    return done(null, false, req.flash('loginMessage', 'Wrong Password'));
                }

                req.session.username = username;
                req.session.password = password;
                return done(null, rows[0]);
            });
        })
    );

}