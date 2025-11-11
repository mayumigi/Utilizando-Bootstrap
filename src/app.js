const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.render('pages/index');
});

module.exports = app;