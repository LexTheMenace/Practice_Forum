const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({

    display_name: {
        type: String,
        required: true
    },
    email: {
        type: String
        // required: true
    },
    google_id: {
        type: String
    },
    banned: {
        type: Boolean,
        default: false
    },
    role_id: {
        type: Number,
        ref: 'Role',
        default: 1
    },
    image_url: {
        type: String,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdontstarve.fandom.com%2Fwiki%2FCategory%3AUser_Images&psig=AOvVaw0nB8GS0WeP8xxyHcRkqvhi&ust=1614621453837000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOD5h-qTje8CFQAAAAAdAAAAABAD'
    },
    password: String

});

const User = mongoose.model("User", userSchema);

module.exports = User;