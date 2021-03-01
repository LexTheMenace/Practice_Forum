const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;