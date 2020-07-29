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

module.exports.viewDetail = function(req, res){
    var id = req.params.id;
    var restaurants = db.get("restaurants").find({ id: id }).value();
    res.render("homepage/views/view", {
        restaurants: restaurants
    })
}