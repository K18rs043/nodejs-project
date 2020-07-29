var express = require("express");
var router = express.Router();

var controller = require("../../controller/homepage/controller");

router.get("/", controller.homepage);

module.exports = router;