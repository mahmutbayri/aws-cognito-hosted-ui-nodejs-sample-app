const express = require('express');
const cookieParser = require('cookie-parser')
const {getAccessTokenFromCookie, getUser} = require('./bootstrap');
const app = express();
const port = process.env.PORT || 9800;
const host = '0.0.0.0';
require('dotenv').config();

// Loads the handlebars module
const {engine} = require('express-handlebars');

// Serves static files (we need it to import a css file)
app.use(express.static('public'));

// Cookie
app.use(cookieParser());

app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: {
        'getenv': function (env) {
            return process.env[env];
        }
    }
}));
app.set('view engine', '.hbs');
app.set("views", "./views");

app.get('/index.html', (req, res) => {

    const accessToken = getAccessTokenFromCookie(req.cookies);

    if (!accessToken) {
        res.render('index', {
            layout: false,
        });
        return;
    }

    getUser(accessToken)
        .then(function (userData) {
            res.render('index', {
                layout: false,
                user: userData,
            });
        })
        .catch(function (error) {
            res.render('index', {
                layout: false,
                error: error,
            });
        });
})

app.get('/login.html', (req, res) => {
    res.render('login', {layout: false});
});

app.get('/logout.html', (req, res) => {
    res.render('logout', {layout: false});
});

app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`)
});
