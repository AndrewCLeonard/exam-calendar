const { Schema, model, Types } = require("mongoose");

const StudentSchema = new Schema({
	studentID: {
		type: String,
		required: true,
	},
	studentFirstName: {
		type: String,
		required: true,
	},
	studentLastName: {
		type: String,
		required: true,
	},
	studentEmail: {
		type: String,
		required: true,
	},
	studentGradeLevel: {
		type: Number,
		required: true,
	},
    // fk school_id needed
});

const Student = model("Student", StudentSchema);

module.exports = Student;
