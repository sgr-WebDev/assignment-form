const moment = require("moment");
const TextModel = require("../model/text");

module.exports = {
  save: (req, res) => {
    console.log(req.body.text);
    const newText = new TextModel({
      date: moment(),
      text: req.body.text,
    });
    newText
      .save()
      .then((data) => {
        res.status(200).send(`Saved`);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  fetch: (req, res) => {
    TextModel.find()
      .then((data) => res.send(data).status(200))
      .catch((err) => res.status(400).send(err));
  },
};
