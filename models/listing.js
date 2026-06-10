const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: String,

    image: {
        url: String,
        filename: String,
    },

    price: Number,

    location: String,
    country: String,

    // 🌍 GEOJSON FIELD (IMPORTANT)
    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
            default: "Point"
        },
        coordinates: {
            type: [Number], // [lng, lat]
            required: true
        }
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    category: {
        type: String,
        enum: [
            "trending",
            "room",
            "iconic_city",
            "mountain",
            "castle",
            "amazing_pool",
            "camping",
            "farm",
            "arctic"
        ],
        default: "room"
    },
});

module.exports = mongoose.model("Listing", listingSchema);