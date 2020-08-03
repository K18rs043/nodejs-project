var shortid = require("shortid");
var db = require("../../db");
var md5 = require("md5");

module.exports.user = function(req, res){
    var name = db.get("users").find({ name: name }).value();
    res.render("users/index", {
        name: name
    });
}

module.exports.create = function(req, res){
    res.render("users/views/create/user_create");
}

module.exports.createID = function(req, res){
    req.body.id = shortid.generate();
    db.get("users").push(req.body).write();
    res.redirect("index");
    
}