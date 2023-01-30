const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateHelper.js");

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
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
        reactions: [reactionSchema]
    },
    {
        toJson: {
            virtuals: true,
        },
        id:false
 
    }
);
ThoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
});
const Thought = model('thought', ThoughtSchema)

module.exports = Thought;