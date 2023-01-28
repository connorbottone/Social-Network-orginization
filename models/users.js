const { Schema, Types } = require('mongoose');

const UserSchema = new Schema(
  {
   
    userName: {
      type: String,
      unique: true,
      required: true,
     trim:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: '',//match by valid email type,
    },
    thoughts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Thought'
    }],
    friends:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    }]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const Users = model("Users", UserSchema);

module.exports = Users;
