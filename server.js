const express	= require('express');
const app		= express();

require('./db/db');

/** MIDDLEWARE, SESSIONS, ETC. GOES HERE**/


/** LISTENER **/
app.listen(process.env.PORT || 9000, () => {
	console.log('listening on port 9000');
});