const express = require("express");
const router = express.Router();
const textController = require("../controller/textController");

router.post("/save", textController.save);
router.get("/fetch", textController.fetch);

module.exports = router;
