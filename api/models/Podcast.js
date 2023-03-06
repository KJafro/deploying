const mongoose = require ("mongoose")

const PodcastSchema = new mongoose.Schema(
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
    desc3: {
        type: String,
        required: true,
    },
    photo: {
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

module.exports = mongoose.model("Podcast", PodcastSchema);