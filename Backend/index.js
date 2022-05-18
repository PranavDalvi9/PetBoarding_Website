
const express = require("express");
const connect = require("./src/configs/db")
let port = process.env.PORT || 2344;
const cors = require("cors");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

//const connect = () => {
// return mongoose.connect("mongodb+srv://rajarsi:1122@cluster0.j7xke.mongodb.net/petboarding");
// };
app.use(cors());
 
const petData = require("./src/controllers/petController")
const cityData = require("./src/controllers/CityController")
 
app.use("/petData", petData)
app.use("/city", cityData)




app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
