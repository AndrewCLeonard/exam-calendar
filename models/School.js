const { Schema, model, Types } = require("mongoose");

const SchoolSchema = new Schema({
	schoolID: {
		type: Number,
		required: true,
	},
	schoolName: {
		type: String,
		required: true,
	},
	schoolType: {
		type: String,
		required: true,
	},
	schoolDescription: {
		type: String,
		required: true,
	},
});
