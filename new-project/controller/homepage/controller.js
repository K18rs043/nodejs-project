//database
var db = require("../../db");

module.exports.homepage = function(req, res){
    res.render("homepage/index");
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

module.exports.search = function(req, res){
    var q = req.query.q;
    var match = db.get("restaurants").value().filter(function(restaurants){
        return restaurants.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render("homepage/views/list", {
        restaurants: match,
        question: q
    });

}