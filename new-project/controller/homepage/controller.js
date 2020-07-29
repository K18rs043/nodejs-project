//database
var db = require("../../db");

module.exports.homepage = function(req, res){
    res.render("homepage/index", {
        name: "Tuan"
    });
}

module.exports.list = function(req, res){
    res.render("homepage/views/list", {
        restaurants: db.get("restaurants").value()
    })
}