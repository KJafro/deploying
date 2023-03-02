const mongoose = require ("mongoose")

const PodcastSchema = new mongoose.Schema(
{
    titlePodcast: {
        type: String,
        required: true,
        unique: true,
    },
    descPodcast: {
        type: String,
        required: true,
    },
    videoPodcast: {
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