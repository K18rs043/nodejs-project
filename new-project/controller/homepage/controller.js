module.exports.homepage = function(req, res){
    res.render("homepage/index", {
        name: "Tuan"
    });
}