var express = require("express");
var router = express.Router();

var controller = require("../../controller/users/user.controller");
var validate = require("../../validate/users.vallidate");
var resValidate = require("../../validate/restaurant.validate");
var middleware = require("../../middleware/auth.middleware");

router.get("/index",middleware.requireAuth , controller.user);
router.get("/create", controller.create);
router.get("/list",middleware.requireAuth , controller.list);
router.get("/list/:id",middleware.requireAuth, controller.viewDetail);
router.get("/search",middleware.requireAuth, controller.search);
router.get("/logout", controller.logout);
router.get("/add",middleware.requireAuth ,controller.add);
router.post("/create",validate.postId, controller.createID);
router.post("/add",resValidate.validateRestaurant, controller.addRes);


module.exports = router;