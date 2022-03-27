const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    user_id: {
      type: String,
      require: true,
      unique: true,
      trim: true
    },
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    role: {
      type: String,
      require: true,
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

//userSchema.virtual('friendCount').get(function() {
//  return this.friends.length;
//});

const User = model('User', userSchema);

module.exports = User;
