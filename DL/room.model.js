const mongoose = require("mongoose");
const {msgSchema} = require('./msg.model')

const roomSchema = new mongoose.Schema({
    name : {
        type: String
    },
    creator : {
        type: mongoose.SchemaTypes.ObjectId,
        ref : 'user'
    },
    createDate : {
        type: Date,
        default: Date.now
    },
    messages : [msgSchema],
    isActive : {
        type: Boolean,
        default: true
    }
})

const roomData = mongoose.model('room',roomSchema);
module.exports = {roomData};
