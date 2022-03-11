const mongoose = require("mongoose");

const kycSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("kycModel", kycSchema);
