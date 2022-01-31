const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	fullName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: false
	},
	bio: {
		type: String,
		required: false
	},
	profilePic: {
		type: String,
		required: false
	},
	phoneNumber: {
		type: String,
		required: false
	},
	instagram: {
		type: String,
		required: false
	},
	facebook: {
		type: String,
		required: false
	},
	whatsapp: {
		type: String,
		required: false
	},
	linkedIn: {
		type: String,
		required: false
	},
	customLink: {
		type: String,
		required: false
	},
	snapshot: {
		type: String,
		required: false
	},
	twitter: {
		type: String,
		required: false
	},
	discord: {
		type: String,
		required: false
	},
	map: {
		type: String,
		required: false
	},
	youtube: {
		type: String,
		required: false
	},
	isAdmin: Boolean
});

module.exports = mongoose.model('User', userSchema);
