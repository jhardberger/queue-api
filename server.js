const express	= require('express');
const app		= express();

require('./db/db');

/** 	MDDLWR		**/

const bodyParser 	 = require('body-parser');
const methodOverride = require('method-override'); 

/**		CNTRLRS		**/

const userController = require('./controllers/userController');

/** 	USE MDDLEWR	**/

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

/** 	USE CNTRLRS	**/

app.use('/users', userController);

/** 	LISTENER	**/

app.listen(process.env.PORT || 9000, () => {
	console.log('listening on port 9000');
});

