const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
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
      match: //match by valid email type
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
  
);

module.exports = assignmentSchema;
