const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');
const app = express();
const port = 8888;
var bodyParser = require('body-parser')

const route = require('./routes');
const db = require('./config/db')

//connect to DB
db.connect()

//connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(methodOverride('_method'))

// HTTP logger
// app.use(morgan('combined'))

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

// Route init
route(app);

app.listen(port, () =>
    console.log('App listening at http://localhost:${port}'),
);
