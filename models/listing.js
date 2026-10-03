const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Default_Image = "https://images.unsplash.com/photo-1567117439408-c01fa6282ed1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: Default_Image,
            set: (v) => v === "" ? Default_Image : v,
        }
    },
    price: Number,
    location: String,
    country: String,
})

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;