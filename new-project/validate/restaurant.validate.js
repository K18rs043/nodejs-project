module.exports.validateRestaurant = function(req, res, next){
    var errors = [];
    if(!req.body.name){
        errors.push("name is required");
    }
    if(!req.body.address){
        errors.push("address is required");
    }
    if(errors.length){
        res.render("users/views/add",{
            errors: errors,
            values: req.body
        });
        return;
    };
    next();
}

