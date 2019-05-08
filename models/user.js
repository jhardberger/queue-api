const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	password: String,
	id: String,
	spotify_auth_key: String,
	queues_created: [Queue.Schema],
	queues_following: [Queue.Schema]

});

module.exports = mongoose.model('User', UserSchema);