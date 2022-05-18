const express = require("express")
const City = require("../models/City");

const router = express.Router()

router.post("",async(req,res) => {
    try {
        console.log(req.body)
        const pet = await City.create(req.body)
        return res.send(pet)
    } catch (error) {
       return res.send(500).send({message: error.message})
    }
})



router.get("", async (req, res) => {
    try {
      const pet = await City.find().lean().exec();
      console.log(pet)
      return res.send(pet)
    } catch (error) {
      return res.send(error);
    }

    
  });

module.exports= router