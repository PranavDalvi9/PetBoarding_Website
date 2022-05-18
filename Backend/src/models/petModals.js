const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    // class1: {type: String, require: true}

    name: {type: String, require: true},
    city: {type: String, require: true},
    address: {type: String, require: true},
    capacity: {type: String, require: true},
    cost: {type: String, require: true},
    verified: {type: String, require: true},
    rating: {type: String, require: true},
    types: {type: String, require: true},
    size: {type: String, require: true},
    supervision: {type: String, require: true},
    unsepervised: {type: String, require: true},
    sleepPlace: {type: String, require: true},
    poty: {type: String, require: true},
    walks: {type: String, require: true},
    typeofhome: {type: String, require: true},
    outdoor: {type: String, require: true},
    emergency: {type: String, require: true},
    summary: {type: String, require: true}

},
{
    versionKey: false,
    timestamps: true,
})

const Pet = mongoose.model("pets",petSchema );
module.exports = Pet;

