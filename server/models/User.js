const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({

    display_name: {
        type: String,
        required: true
    },
    // URL string for Thumbnail image
    email: {
        type: String,
        required: true
    },
    google_id: {
        type: String,
        required: true
    },
    banned: {
        Boolean,
        required:true,
        default: false
    },
    role_id: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;