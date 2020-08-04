var shortid = require("shortid");
var db = require("../../db");
var md5 = require("md5");
//userpage
module.exports.user = function(req, res){
    var name = db.get("users").find({ name: name }).value();
    res.render("users/index", {
        name: name
    });
}
//create account 
module.exports.create = function(req, res){
    res.render("users/views/create/user_create");
}

module.exports.createID = function(req, res){
    req.body.id = shortid.generate();
    req.body.password1 = md5(req.body.password1);
    req.body.password2 = md5(req.body.password2);
    db.get("users").push(req.body).write();
    res.redirect("index");
    
}
//Restaurant list
module.exports.list = function(req, res){
    res.render("users/views/list", {
        restaurants: db.get("restaurants").value()
    });
}
//Restaurant detail
module.exports.viewDetail = function(req, res){
    var id = req.params.id;
    var restaurants = db.get("restaurants").find({ id: id }).value();
    res.render("users/views/view", {
        restaurants: restaurants
    })
}
//Restaurant search
module.exports.search = function(req, res){
    var q = req.query.q;
    var match = db.get("restaurants").value().filter(function(restaurants){
        return restaurants.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render("users/views/list", {
        restaurants: match,
        question: q
    });

}
//User logout
module.exports.logout = function(res, req){
    req.clearCookie("userId");
    req.redirect("/homepage/")
}
//Add a restaurant page
module.exports.add = function(req, res){
    res.render("users/views/add");
}
//Add a restaurant
module.exports.addRes = function(req, res){
    db.get("restaurants").push(req.body).write();
    res.redirect("/users/list");
}