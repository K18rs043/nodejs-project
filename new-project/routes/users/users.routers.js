var express = require("express");
var router = express.Router();

var controller = require("../../controller/users/user.controller");
var validate = require("../../validate/users.vallidate");

router.get("/index", controller.user);
router.get("/create", controller.create);
router.post("/create",validate.postId, controller.createID);

module.exports = router;