var express = require("express");
const SmsController = require("../controllers/SmsController");

var router = express.Router();

router.get("/:phone", SmsController.getAccountBalance);
router.post("/send/:phone", SmsController.sendSms);

module.exports = router;
