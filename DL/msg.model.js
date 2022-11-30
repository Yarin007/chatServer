const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    message: {
        type: String,
    },
    img: {
        type: String,
    },
    datetime: {
        type: Date,
        default: Date.now
    },
    likes: [{
        type: mongoose.SchemaTypes.ObjectId
    }],
    fires: [{
        type: mongoose.SchemaTypes.ObjectId
    }],
    hearts: [{
        type: mongoose.SchemaTypes.ObjectId
    }],
    isActive: {
        type: Boolean,
        default: true
    }
})

const msgData = mongoose.model('msg', msgSchema);
module.exports = {  msgData,  msgSchema };