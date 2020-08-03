module.exports.postId = function(req, res, next){
    var errors = [];
    if(!req.body.name){
        errors.push("name is required");
    }
    if(!req.body.email){
        errors.push("email is required");
    }
    if(!req.body.password1){
        errors.push("password is required");
    }
    if(req.body.password1 != req.body.password2){
        errors.push("password1 and password2 is not the same");
    }
    if(!req.body.phone){
        errors.push("Phone is required");
    }
    if(errors.length){
        res.render("users/views/create/user_create",{
            errors: errors,
            values: req.body
        });
        return;
    };
    next();
}

