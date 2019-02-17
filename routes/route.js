const connection = require("../config/connection");

module.exports = (app, passport) => {
    app.get('/', (req, res) => {        
        res.redirect('/login');
    })
    
    app.get('/login', (req, res) => {
        if(req.session.username) {
            res.redirect('/home');
        } else {
            res.render('login.ejs', {message: req.flash('loginMessage')});
        }
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash: true
    }),
    (req, res) => {
        if(req.body.remember) {
            req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
            req.session.cookie.expires = false;
        }
        res.redirect('/');
    });

    app.get('/home', isLoggedIn, (req, res) => {

        let query = "SELECT A.*, categories.`name` as category_name FROM " + 
                        "(SELECT projects.project_id, projects.project_title, projects.date_added, projects.cid, users.username " + 
                            " FROM " + 
                                    " `ilance_projects` as projects " +
                                " JOIN " + 
                                    " `ilance_users` as users " + 
                                " ON (projects.user_id = users.user_id) " + 
                            ") as A " +
                                " LEFT JOIN " + 
                                " `ilance_categories` as categories " + 
                                " ON (A.cid = categories.cid) " ;
                                
        connection.query(
            query,
            (err, rows) => {
                if(err)
                    console.log(err) ;
                else
                    console.log(rows);

                res.render('home.ejs', {
                    user: req.user,
                    err: err,
                    rows: rows
                });
            });
    });

    app.get('/logout', (req, res) => {
        req.logout();
        req.session.destroy();
        res.redirect('/');
    });

            // catch 404 and forward to error handler
    app.all('*', function(req, res, next) {
    
        res.render('./error/404.ejs', {
            title: 'Not Found'
        });
    });
  
    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated())
            return next();

        res.redirect('/');
    }

};

