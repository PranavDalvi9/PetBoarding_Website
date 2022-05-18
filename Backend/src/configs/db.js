const mongoose = require("mongoose");

module.exports = () => {
//   return mongoose.connect("mongodb+srv://rajarsi:1122@cluster0.j7xke.mongodb.net/petboarding");
return mongoose.connect("mongodb+srv://pranav:pranav123@cluster0.gvulk.mongodb.net/PetBoarding_Data?retryWrites=true&w=majority");
};
