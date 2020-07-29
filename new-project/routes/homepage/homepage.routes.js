var express = require("express");
var router = express.Router();

var controller = require("../../controller/homepage/controller");

router.get("/", controller.homepage);
router.get("/list", controller.list);
router.get("/list/:id", controller.viewDetail);

module.exports = router;