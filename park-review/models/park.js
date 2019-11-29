// mongo schema for parks
const mongoose = require('mongoose');

const parkSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    image_link: String,
    location: String,
    established_date: String,
    area: String,
    yearly_visitors: String,
    description: String, 
	twitter_id: String
});

module.exports = mongoose.model("Park", parkSchema);