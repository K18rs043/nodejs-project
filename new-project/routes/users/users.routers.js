var express = require("express");
var router = express.Router();

var controller = require("../../controller/users/user.controller");
var validate = require("../../validate/users.vallidate");

router.get("/index", controller.user);

module.exports = router;