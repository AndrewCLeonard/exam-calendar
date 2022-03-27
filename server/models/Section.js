const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const sectionSchema = new Schema(
  {
    section_id: {
      type: String,
      require: true,
      unique: true
    },
    section_name: {
      type: String,
    },
    section_description: {
      type: String
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

//sectionSchema.virtual('reactionCount').get(function() {
//  return this.reactions.length;
//});

const Section = model('Section', sectionSchema);

module.exports = Section;
