const mongoose = require ("mongoose")

const PostSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    desc2: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    photo2: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: false,
    }},

{ timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);