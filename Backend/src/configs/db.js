const mongoose = require("mongoose");

module.exports = () => {
//   return mongoose.connect("mongodb+srv://rajarsi:1122@cluster0.j7xke.mongodb.net/petboarding");
return mongoose.connect("mongodb+srv://rajarsi:1122@cluster0.j7xke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};
