const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//SETTINGS... a variable is created to contain the port
app.set('port', process.env.PORT || 3000);
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARE 
//Morgan: mostrara por consola las peticiones al server
app.use(morgan('dev'));
//Body-parser: permite entender peticiones POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//ROUTES
require('./routes/index')(app);

//CREATED SERVER 
app.listen(app.get('port'), () => {
   console.log(`Server on port ${app.get('port')}`)
})
