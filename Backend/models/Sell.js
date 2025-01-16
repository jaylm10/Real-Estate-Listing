const mongoose = require("mongoose");

const propertSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    saleOrRent: { type: String, required: true, enum: ['sale', 'rent'] },
    price: { type: Number, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    sqft: { type: Number },
    description: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Property",propertSchema)
