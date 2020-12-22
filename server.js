require('./models/database');
require('dotenv').config();

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./routes/employee');
const testDbController = require('./controllers/testDB');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs(
    { extname: 'hbs', 
    defaultLayout: 'mainLayout', 
    layoutsDir: __dirname + '/views/layouts/' 
    })
);

app.set('view engine', 'hbs');

app.listen(3500, () => {
    console.log('Express server started at port : 3500');
});

app.use('/database', testDbController);
app.use('/employee', employeeController);