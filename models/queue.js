const mongoose = require('mongoose');

const QueueSchema = new mongoose.Schema({
	songs: [],
	playlist_assoc: String,
});

module.exports = mongoose.model('Queue', QueueSchema);