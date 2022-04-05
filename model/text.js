const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// //* creating the invoice schema
const textSchema = new Schema({
  date: { type: Date, required: true },
  text: { type: String, required: true },
});

// * defining model
const TextModel = mongoose.model("Text", textSchema);

// * exporting the model
module.exports = TextModel;
