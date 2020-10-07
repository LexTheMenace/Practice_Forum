const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({

    display_name: {
        type: String,
        required: true
    },
    email: String,
    google_id: {
        type: String,
        required: true
    },
    banned: {
        type: Boolean,
        required:true,
        default: false
    },
    role_id: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    },
    image_url: String

});

const User = mongoose.model("User", userSchema);

module.exports = User;