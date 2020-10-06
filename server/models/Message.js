const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const messageSchema = new mongoose.Schema({
    sender_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    contents: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: String,
        required: true
    }


});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;