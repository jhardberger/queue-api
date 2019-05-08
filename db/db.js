const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/queue';

mongoose.connect(process.env.MONGODB_URI || connectionString, { userNewurlParser: true});

mongoose.connection.on('connected', () => {
	console.log('Connected at ', connectionString );
});

mongoose.connection.on('disconnected', () => {
	console.log('Disconnected');
});

mongoose.connection.on('error', (err) => {
	console.log('ERROR!->', err, '<-ERROR!');
})