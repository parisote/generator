const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Init
const app = express();

//Config
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');

//Midle
app.use(express.urlencoded({extended: false}));

//Globales


//Routes
app.get('/', (req, res) => {
    res.render('index');
})

//Static
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;