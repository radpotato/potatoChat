var mongoose = require('mongoose'),
schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/testdb');

var chatSchema = new schema({
	name : String,
	content : String,
	date : Date
});

var chatModel = mongoose.model('chat',chatSchema);

var chating = new chatModel();

chating.name = "choeun";
chating.content = "i don't like you";
chating.date = new Date();

chatModel.find({}, function(err, docs) {
	if(!err) console.log('success');
});

/*
chating.save(function (err) {
	if(!err) console.log('success');
});
*/
