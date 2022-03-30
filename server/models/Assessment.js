const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const assessmentSchema = new Schema(
  {
    assessment_id: {
      type: String,
      require: true,
      unique: true
    },
    assessment_name: {
      type: String,
      require: true
    },
    user_id: {
      type: String,
      require: true,
      unique: true
    },
    section_id: {
      type: String,
      require: true,
      unique: true
    },
    assessment_start_date: {
      type: String
    },
    assessment_end_date: {
      type: String
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Assessment = model('Assessment', assessmentSchema);

module.exports = Assessment;
