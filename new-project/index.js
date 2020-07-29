//express
var express = require("express");
var app = express();
//homepage.routers
var homepage = require("./routes/homepage/homepage.routes");
//auth.routers
var authRounts = require("./routes/auth/auth.route");
//server port
const port = 3000;
//app set view
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));


app.get("/", function(req, res){
    res.redirect("/homepage");
});
//use homepage
app.use("/homepage", homepage);
//use login
app.use("/auth", authRounts);
app.listen(port, function(){
    console.log("Listening to port: " + port);
});