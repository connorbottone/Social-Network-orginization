const { Schema, model } = require('mongoose');

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
      match: [/.+@.+\..+/, "Invalid e-mail address!"],
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref:'Thought'
    }],
    friends:[{
      type:Schema.Types.ObjectId,
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
