const { Schema, Types } = require("mongoose");
 

const ThoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: "Thought is Required",
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        //  get method to format the timestamp
        get: (timestamp) => dateFormat(timestamp),
      },
      username: {
        type: String,
        required: true,
      },