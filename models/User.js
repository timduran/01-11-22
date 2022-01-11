const { Schema, model } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'post'
  }]
}, { timestamps: true })

// Post: attaching Post to User to timestamps when post are created 

User.plugin(require('passport-local-mongoose'))

module.exports = model('user', User)
