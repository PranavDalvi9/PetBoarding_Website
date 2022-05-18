const express = require("express")
const Pet = require("../models/petModals");

const router = express.Router()

router.post("",async(req,res) => {
    try {
        console.log(req.body)
        const pet = await Pet.create(req.body)
        return res.send(pet)
    } catch (error) {
       return res.send(500).send({message: error.message})
    }
})



router.get("", async (req, res) => {
    // try {
    //   const pet = await Pet.find().lean().exec();
    //   console.log(pet)
    //   return res.send(pet)
    // } catch (error) {
    //   return res.send(error);
    // }

    try {
      const page = req.query.page || 1;
      const size = req.query.size || 4;
      if (req.query.name) {
        const user = await Pet.find({ name: req.query.name })
          // .populate({ path: "classes", select: ["class1"] })
          .skip((page - 1) * size)
          .limit(size)
          .lean()
          .exec();
        console.log(user);
        return res.send(user);
      }
      else {
        const user = await Pet.find()
          // .populate({ path: "classes", select: ["class1"] })
          .skip((page - 1) * size)
          .limit(size)
          .lean()
          .exec();
        console.log(user);
        return res.send(user);
      }
    } catch (error) {
        return res.send(error);
      }
    
  });

module.exports= router