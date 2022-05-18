const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
   

    city: {type: String, require: true},
    

},
{
    versionKey: false,
    timestamps: true,
})

const City = mongoose.model("citys",citySchema );
module.exports = City;

