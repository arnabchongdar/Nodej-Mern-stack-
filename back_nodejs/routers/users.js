const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const userModel = require("../models/userModels");
// get all members
router.get("/login", async (req, res) => {
  try {
    const entry = await userModel.find();
    res.json(entry);
  } catch (error) {
    console.log("Error" + error);
  }
});
// get a single member
router.get("/:id", async (req, res) => {
  try {
    const oneEntry = await userModel.findById(req.params.id);

    res.json(oneEntry);
  } catch (error) {
    console.log("Error" + error);
  }
});
//post

router.post("/register", async (req, res) => {
  const { name, email, password, mobile } = req.body;
  try {
    if (!name || !email || !password || !mobile) {
      return res.status(400).json({ msg: "please include a name and email" });
    }
    userModel.findOne({ email: email }).then((savedUser) => {
      if (savedUser) {
        return res.status(400).json({ msg: "email already used" });
      }
      bcrypt.hash(password, 10).then((hashpassword) => {
        const person = new userModel({
          name: name,
          email: email,
          password: hashpassword,
          mobile: mobile,
        });
        const a1 = person.save();
        res.json(a1);
      });
    });
  } catch (error) {
    res.send(error);
  }
});
//put
router.put("/:id", async (req, res) => {
  const upmembers = req.body;
  try {
    const singleEntry = await userModel.findById(req.params.id);
    if (singleEntry) {
      singleEntry.name = upmembers.name ? upmembers.name : singleEntry.name;
      singleEntry.email = upmembers.email ? upmembers.email : singleEntry.email;
      singleEntry.password = upmembers.password
        ? upmembers.password
        : singleEntry.password;
      singleEntry.mobile = upmembers.mobile
        ? upmembers.mobile
        : singleEntry.mobile;

      const a1 = await singleEntry.save();

      res.json(a1);
    } else {
      console.log(`No people present with the requested ${req.params.id}`);
    }
  } catch (error) {
    console.log("Error" + error);
  }
});
// delete members

router.delete("/:id", async (req, res) => {
  try {
    //const person = await people.findByIdAndDelete(req.params.id);
    const delperson = await userModel.findById(req.params.id);
    if (delperson) {
      const a2 = await delperson.delete();
      res.json(a2);
    }
  } catch (error) {
    console.log("Error" + error);
  }
});

module.exports = router;
