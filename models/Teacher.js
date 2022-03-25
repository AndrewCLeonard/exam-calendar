const { Schema, model, Types } = require("mongoose");

const TeacherSchema = new Schema({
	teacherID: {
		type: String,
		required: true,
	},
	teacherFirstName: {
		type: String,
		required: true,
	},
	teacherLastName: {
		type: String,
		required: true,
	},
	teacherEmail: {
		type: String,
		required: true,
	},
	// fk school_id needed
});

const Teacher = model("Teacher", TeacherSchema);

module.exports = Teacher;
