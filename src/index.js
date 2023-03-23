var express = require('express');
var path = require('path');
var morgan = require('morgan');
var mysql = require('mysql'); // add library mysql
var db = require('./config/database'); // database
var bodyParser = require('body-parser');
const port = 3000;
const handlebars = require('express-handlebars');
var methodOverride = require('method-override');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');



// test connection
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// connection db MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '030201',
    database: 'news_db'
});

// routes path 
var employee = require('./routes/employee');
var job = require('./routes/job');
var home = require('./routes/home');

var app = express();

// view engine setup
// app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(methodOverride('_method'))



// request 
app.use('/', home);
app.use('/job', job);
app.use('/job/add', job);
app.use('/job/edit/:id', job);
app.use('/employee', employee);
app.use('/employee/add', employee);
app.use('/employee/edit/:id', employee);


// template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


app.listen(port, () =>
    console.log('App listening at http://localhost:${port}'),
);
