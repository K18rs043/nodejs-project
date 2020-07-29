var shortid = require("shortid");
var db = require("../../db");
var md5 = require("md5");

module.exports.user = function(req, res){
    var name = db.get("users").find({ name: name }).value();
    res.render("users/index", {
        name: name
    });
}